import request from "./request";
import { GET_MOVIES } from "./actionType";

export const getMovies = () => {
  return async dispatch => {
    const result = await request({
      url: "/ajax/movieOnInfoList",
      params: {
        token: ""
      }
    });
    // console.log(result);

    dispatch({
      type: GET_MOVIES,
      payload: result
    });
  };
};
export const getMoviesComing = movieIds => {
  return async dispatch => {
    const res = await request({
      url: "/ajax/moreComingList",
      params: {
        token: "",
        movieIds
      }
    });
    dispatch({
      type: GET_MOVIES,
      payload: res.data
    });
    console.log("11", res.data);
  };
};
