import { ADD_TODO } from "../action";

const initState = {
  todos: [
    {
      id: 1,
      task: "任务一"
    },
    {
      id: 2,
      task: "任务二"
    }
  ]
};

const reducer = (state = initState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_TODO:
      newState.todos.push({
        id: newState.todos.length + 1,
        task: action.payload
      });
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
