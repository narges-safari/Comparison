import * as actionTypes from "../action/types";

const initialState = {};

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_EMPOLYEE:
      return { ...state, employeeList: action.payload };

    default:
      return state;
  }
}

export default employeeReducer;
