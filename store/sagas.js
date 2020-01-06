import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import axios from "axios";
import { initListAction } from "./actionCreators";

function* getInitList() {
  // try {
  //   console.log("abc");
  //   const res = yield axios.get("/xx.json");
  //   const action = initListAction(res.data);
  //   yield put(action);
  // }catch(e) {
  //   console.log('e');
  //   const list = ["jack", "rose"];
  //   const action = initListAction(list);
  //   yield put(action);
  // }
  console.log("abc");
  const list = ["jack", "rose"];
  const action = initListAction(list);
  yield put(action);
}
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
