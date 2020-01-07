import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEN,
  DELETE_ITEM,
  INIT_LIST,
  GET_INIT_LIST
} from "./actionTypes";
import axios from "axios";

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEN
});

export const getDeleteItemAction = index => ({
  type: DELETE_ITEM,
  index
});
export const getInitList = () => ({
  type:INIT_LIST
});
export const initListAction = list => ({
  type: GET_INIT_LIST,
  list
});
// export const getTodoList = () => {  redux-thunk
//   return (dispatch) => {
//     axios.get("/list.json").then(res => {
//       const list = ["jack", "rose"];
//       const action = initListAction(list);
//       dispatch(action);
//     });
//   };
// };
export const getTodoList = () => {};
