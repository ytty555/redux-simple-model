import { createStore } from 'redux';
import { changeName, changeSurname, addYearsOld } from './actions';
import reducer from './reducers';
    
// Store
const store = createStore(reducer);

console.log(store.getState());

store.dispatch(changeName('Olga'));
store.dispatch(changeSurname('Ivanova'));
store.dispatch(addYearsOld(5));

console.log(store.getState());
console.log(store.getState().user.firstName);
