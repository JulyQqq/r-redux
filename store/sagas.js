import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import axios from "axios";
import { initListAction } from "./actionCreators";

function* getInitList() {
  // const url =
  //   "https://route.showapi.com/341-2?maxResult=20&page=1&showapi_appid=135860&showapi_timestamp=20200107133628&showapi_sign=15e05ffa14789495adb25cac61404770";
  // try {
  //   console.log("abc");
  //   const res = yield axios.get(url);
  //   const list = res.data.showapi_res_body.contentlist;
  //   console.log(list);
  //   const action = initListAction(list);
  //   yield put(action);
  // } catch (e) {
  //   console.log("e");
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
  yield takeEvery(INIT_LIST, getInitList);
}

export default mySaga;
