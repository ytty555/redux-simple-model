import {
  CHANGE_OWNER_NAME,
  CHANGE_OWNER_SURNAME,
  CHANGE_OWNER_BIRTH,
  CHANGE_CAR_MODEL,
  CHANGE_CAR_COLOR,
  CHANGE_CAR_MADE
} from './constants';

// Action creators
export const changeOwnerName = value => {
  return {
    type: CHANGE_OWNER_NAME,
    payload: value
  };
};
 
export const changeOwnerSurname = value => {
  return {
    type: CHANGE_OWNER_SURNAME,
    payload: value
  };
};
 
export const changeOwnerBirth = value => {
  return {
    type: CHANGE_OWNER_BIRTH,
    payload: value
  };
};
 
export const changeCarModel = value => {
  return {
    type: CHANGE_CAR_MODEL,
    payload: value
  };
};
 
export const changeCarColor = value => {
  return {
    type: CHANGE_CAR_COLOR,
    payload: value
  };
};
 
export const changeCarMade = value => {
  return {
    type: CHANGE_CAR_MADE,
    payload: value
  };
};
 