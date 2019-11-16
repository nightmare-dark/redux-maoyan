import { combineReducers } from "redux";
import movieListReducer from "./movieListReducer";
import movieItemReducer from "./movieItemReducer";

const rootReducer = combineReducers({
  movieListReducer,
  movieItemReducer
});

export default rootReducer;
