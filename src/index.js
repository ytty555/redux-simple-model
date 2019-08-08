import { createStore } from 'redux';
import reducer from './reducers';
import {
  changeOwnerName,
  changeOwnerSurname,
  changeOwnerBirth,
  changeCarModel,
  changeCarColor,
  changeCarMade
} from './actions';
import {initialState} from './constants';

// Store
const store = createStore(reducer, initialState);

store.subscribe(() => console.log(store.getState()));

store.dispatch(changeOwnerName('Вася'));
store.dispatch(changeOwnerSurname('Пупкин'));
store.dispatch(changeOwnerBirth(1987));
store.dispatch(changeCarModel('Toyota'));
store.dispatch(changeCarColor('black'));
store.dispatch(changeCarMade(2017));
