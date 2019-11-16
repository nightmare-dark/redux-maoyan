import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovies } from "../../actions";

class MovieItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      globalReleased: ""
    };
  }

  componentDidMount() {
    this.props.getMovies();
  }

  renderMovie = () => {
    if (this.props.movies != null) {
      console.log("数据", this.props.movies);
      return this.props.movies.data.movieList.map((item, index) => (
        <div className="main-block" key={index}>
          {/* 图片 */}
          <div className="avatar">
            <div className="default-img-bg">
              <img src={item.img.replace("w.h", "128.180")} />
            </div>
          </div>
          {/* 右边内容 */}
          <div className="mb-outline-b content-wrapper">
            <div className="column content">
              <div className="box-flex movie-title">
                <div className="title line-ellipsis">{item.nm}</div>
              </div>
              <div className="detail column">
                <div className="score line-ellipsis">
                  <span className="score-suffix">观众评{item.sc}</span>
                  <span className="grade"> </span>
                </div>
                <div className="actor line-ellipsis">主演:{item.star} </div>
                <div className="show-info line-ellipsis">{item.showInfo}</div>
              </div>
            </div>
            <div className="button-block" data-id="1218029">
              <div className="btn">
                <span className="fix" data-bid="dp_wx_home_movie_btn">
                  购买
                </span>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };
  render() {
    return (
      <div className="item" data-id="1218029" data-bid="dp_wx_home_movie_list">
        {this.renderMovie()}
      </div>
    );
  }
}

export default connect(
  state => state.movieItemReducer,
  dispatch => bindActionCreators({ getMovies }, dispatch)
)(MovieItem);
