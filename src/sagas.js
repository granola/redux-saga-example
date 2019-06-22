import { eventChannel } from 'redux-saga';
import { call, delay, fork, takeLatest, put } from 'redux-saga/effects';
import { addArea, removeArea } from './actions';

function* takeLatestTask() {
   try {
      console.log('takeLatest task: start')
      const startTime = new Date()
      yield delay(2000);
      yield put({type: "ADD_COUNTER"});
      const finishTime = new Date()
      console.log('takeLatest task: done', finishTime - startTime )
   } catch (e) {
      console.log('error:', e)
   }
}

export default function* rootSaga() {
  yield takeLatest(addArea, takeLatestTask)
}
