import { eventChannel, END } from 'redux-saga';
import { actionChannel, call, delay, fork, take, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { addArea, removeArea } from './actions';

function* takeLatestTask() {
   try {
      console.log('takeLatest task: start')
      const startTime = new Date()
      yield delay(2000);
      const finishTime = new Date()
      console.log('takeLatest task: done', finishTime - startTime )
   } catch (e) {
      console.log('error:', e)
   }
}

function* takeEveryTask() {
   try {
      console.log('takeEvery task: start')
      const startTime = new Date()
      yield delay(2000);
      const finishTime = new Date()
      console.log('takeEvery task: done', finishTime - startTime )
   } catch (e) {
      console.log('error:', e)
   }
}
    //↓の動きを確かめる
    // while(yield take(USER_DETAILS_REQUESTED)) {
// 連続でaddAreaをdispatchしても前の処理はcancelされない
// 連続でaddAreaをdispatchしても2度目以降のdispatchを処理しない
function* takeTaskHandle() {
  while (true) {
    try {
      // addAreaがdispatchされるまで待機
      yield take(addArea)
      console.log('take task: start')
      const startTime = new Date()
      yield delay(2000);
      const finishTime = new Date()
      console.log('take task: done', finishTime - startTime )
    } catch (e) {
       console.log('error:', e)
    }
  }
}

function* actionChannelTask() {
  // 1- Create a channel for request actions
  const addAreaChan = yield actionChannel(addArea)
  console.log('addAreaChan',addAreaChan)
  while (true) {
    // 2- take from the channel
    yield take(addAreaChan)
    // 3- Note that we're using a blocking call
    console.log('take task: start')
    const startTime = new Date()
    yield delay(2000);
    const finishTime = new Date()
    console.log('take task: done', finishTime - startTime )
    // yield call(handleRequest, payload)
  }
}

function* eventChannelTask() {
  const channel = yield call(addAreaChanFunc)

  while (true) {
    yield take(channel)
    console.log('take task: start')
    const startTime = new Date()
    yield delay(2000);
    const finishTime = new Date()
    console.log('take task: done', finishTime - startTime )
  }
}

function addAreaChanFunc() {
   return eventChannel(emitter => {
      let times = 10
      const iv = setInterval(() => {
        console.log('times',times)
        times -= 1
        if (times > 0) {
          emitter(times)
        } else {
          // this causes the channel to close
          emitter(END)
        }
      }, 1000);
        // The subscriber must return an unsubscribe function
    return () => {
      console.log('clearInterval')
      clearInterval(iv)
    }
  }
)}

export default function* rootSaga() {
  // yield takeLatest(addArea, takeLatestTask)
  // yield takeEvery(addArea, takeEveryTask)
  // yield fork(takeTaskHandle)
  // yield fork(actionChannelTask)
  yield fork(eventChannelTask)

}
