import React from "react";
import * as actionTypes from "./action";

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    ///case1
    case actionTypes.ADD:
      const newPerson = {
        id: Math.random(),
        name: "Sky",
        age: Math.round(Math.random() * 40)
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };

    //case2
    case actionTypes.REMOVE:
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.personId)
      };

    default:
      null;
  }
  return state;
};

export default reducer;
