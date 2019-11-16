import { GET_MOVIES } from "../actions/actionType";

const initState = {
  movies: null
};

const movieListReducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case GET_MOVIES:
      newState.movies = action.payload;
      break;
    default:
      break;
  }

  return newState;
};

export default movieListReducer;
