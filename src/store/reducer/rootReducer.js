import { combineReducers } from "redux";

import employeeReducer from "./employeeReducer";
import tableReducer from "./tableReducer";

export default combineReducers({
  employee: employeeReducer,
  table: tableReducer,
});
