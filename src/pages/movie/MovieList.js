import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovies, getMoviesComing } from "../../actions";
import MovieItem from "./MovieItem";
import BScroll from "better-scroll";
import _ from "lodash";
import { Toast } from "antd-mobile";
import axios from "axios";
import request from "../../actions/request";
import { GET_MOVIES } from "../../actions/actionType";

class MovieList extends Component {
  componentDidMount() {
    this.props.getMovies();
    this.props.getMoviesComing();
    let count = 0;
    const lsbox = document.querySelector(".list-box");
    //选中DOM中定义的 .list-box 进行初始化
    const scroll = new BScroll(lsbox, {
      scrollX: false, //开启横向滚动
      // click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: true, //关闭竖向滚动
      pullUpLoad: {
        threshold: 30
      }
    });
    scroll.on("pullingUp", () => {
      const movieIds = this.props.movies.data.movieIds.slice(12);
      const ids = _.chunk(movieIds, 10);
      function showToast() {
        Toast.info("没了", 1);
      }
      if (count == ids.length) {
        showToast();
        scroll.finishPullUp();
        return;
      }
      scroll.finishPullUp();
      count++;
    });
  }
  render() {
    return (
      <div className="list-box">
        <MovieItem />
      </div>
    );
  }
}

export default connect(
  state => state.movieListReducer,
  dispatch => bindActionCreators({ getMovies, getMoviesComing }, dispatch)
)(MovieList);
// export default MovieList;
