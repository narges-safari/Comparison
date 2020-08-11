import * as actionTypes from "../action/types";

const initialState = {};

function tableReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_EMPLOYEE_DATA:
      return { ...state, table: action.payload };

    default:
      return state;
  }
}

export default tableReducer;
