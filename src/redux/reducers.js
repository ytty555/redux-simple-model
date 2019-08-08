import { combineReducers } from 'redux';
import {
  CHANGE_OWNER_NAME,
  CHANGE_OWNER_SURNAME,
  CHANGE_OWNER_BIRTH,
  CHANGE_CAR_MODEL,
  CHANGE_CAR_COLOR,
  CHANGE_CAR_MADE,
  initialState
} from './constants';

const owner = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_OWNER_NAME:
      return {...state, name: action.payload}; 
    case CHANGE_OWNER_SURNAME:
      return {...state, surName: action.payload};
    case CHANGE_OWNER_BIRTH:
      return {...state, birth: action.payload};
    default:
      return state;
  }
}

const car = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CAR_MODEL:
      return {...state, model: action.payload};
    case CHANGE_CAR_COLOR:
      return {...state, color: action.payload};
    case CHANGE_CAR_MADE:
      return {...state, made: action.payload};
    default:
      return state;
  }
}

const reducer = combineReducers({
  owner,
  car
})

export default reducer;