import { combineReducers } from 'redux';
import { addArea, removeArea } from './actions';

const initialState = {
  count: 0,
}

function areaReducer(state=initialState, {type}) {
  switch (type) {
    case addArea.toString():
      return { ...state, count: state.count + 1 }
    case removeArea.toString():
      return { ...state, count: state.count - 1 }
  }
  return initialState;
}

export default combineReducers(
  { areaReducer }
);
