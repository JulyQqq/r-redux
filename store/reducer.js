import { CHANGE_INPUT_VALUE, ADD_TODO_ITEN, DELETE_ITEM,GET_INIT_LIST } from "./actionTypes";
const defaultState = {
  inputVal: "fff",
  list: []
};

//reducer可以接受state  但是绝对不能修改state
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputVal = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEN) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputVal);
    newState.inputVal = "";
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if(action.type===GET_INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.list
    return newState
  }
  return state;
};
