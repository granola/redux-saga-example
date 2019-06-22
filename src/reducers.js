import { combineReducers } from 'redux';
import { ADD_AREA, REMOVE_AREA } from './actions';

const initialState = {
  area: {
    count: 0,
  }
}

function areaReducer(state=initialState.area, {type}) {
  switch (type) {
    case ADD_AREA:
      console.log('add')
      return
    case REMOVE_AREA:
      console.log('remove')
      return
  }
  return initialState;
}

export default combineReducers(
  { areaReducer }
);
