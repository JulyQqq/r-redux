import { takeEvery, put } from "redux-saga/effects";
import { INIT_LIST } from "./actionTypes";
import axios from "axios";
import { initListAction } from "./actionCreators";

function* getInitList() {
  const url =
    "https://route.showapi.com/341-2?maxResult=20&page=1&showapi_appid=135860&showapi_timestamp=20200107145003&showapi_sign=92e5b3b8d609bc1a97ba29706228d282";
  try {
    const res = yield axios.get(url);
    const list = res.data.showapi_res_body.contentlist;
    console.log(list);
    const action = initListAction(list);
    console.log(action)
    yield put(action);
  } catch (e) {
    console.log("e");
    const list = ["jack", "rose"];
    const action = initListAction(list);
    yield put(action);
  }
  // console.log("abc");
  // const list = ["jack", "rose"];
  // const action = initListAction(list);
  // console.log(action)
  // yield put(action);
}
function* mySaga() {
  yield takeEvery(INIT_LIST, getInitList);
}

export default mySaga;
