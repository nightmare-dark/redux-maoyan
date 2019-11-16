import store from "../store";

export const ADD_TODO = "ADD_TODO";
export const addTodo = val => {
  store.dispatch({
    type: ADD_TODO,
    payload: val
  });
};
