import { combineReducers } from 'redux';

const user = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state, firstName: action.name
      };
    case 'CHANGE_SURNAME':
      return {
        ...state, secondName: action.name
      };
    default:
      return state;
  }
}

const yearsOld = (num = 1, action) => {
  switch (action.type) {
    case 'ADD_YO': 
      return num + action.yo;
    default:
      return num;
  }
}

const reducer = combineReducers({
  user,
  yearsOld
})

export default reducer;