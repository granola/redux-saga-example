import { eventChannel } from 'redux-saga';
import { call, delay, fork, takeLatest, put } from 'redux-saga/effects';
import { ADD_AREA, REMOVE_AREA } from './actions';

function* addCounter() {
   try {
      yield call(delay, 1000 + Math.random() * 2000);
      yield put({type: "ADD_COUNTER"});
   } catch (e) {
   }
}

export default function* rootSaga() {
  // yield fork(areaWatcher);
  yield takeLatest(ADD_AREA, addCounter)
}