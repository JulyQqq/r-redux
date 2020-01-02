const defaultState = {
  inputVal: "11",
  list: ["q", "b"]
};

//reducer可以接受state  但是绝对不能修改state
export default (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputVal = action.value;
    return newState;
  }
  console.log(state, action);
  return state;
};
