// Action creators
export const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  }
};

export const changeSurname = (name) => {
  return {
    type: 'CHANGE_SURNAME',
    name: name
  }
};

export const addYearsOld = (num) => {
  return {
    type: 'ADD_YO',
    yo: num
  }
};
