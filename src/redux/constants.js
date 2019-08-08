// Constants for Actions
export const CHANGE_OWNER_NAME = 'CHANGE_OWNER_NAME';
export const CHANGE_OWNER_SURNAME = 'CHANGE_OWNER_SURNAME';
export const CHANGE_OWNER_BIRTH = 'CHANGE_OWNER_BIRTH';
export const CHANGE_CAR_MODEL = 'CHANGE_CAR_MODEL';
export const CHANGE_CAR_COLOR = 'CHANGE_CAR_COLOR';
export const CHANGE_CAR_MADE = 'CHANGE_CAR_MADE';

// initialState
export const initialState = {
  owner: {
    name: '',
    surName: '',
    birth: 0
  },
  car: {
    model: '',
    color: '',
    made: 0
  }
};
