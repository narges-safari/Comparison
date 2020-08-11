import server from "../../api/server";

import { GET_EMPOLYEE } from "./types";

export const getEmployee = () => async (dispatch) => {
  const response = await server().get("/employees");

  dispatch({ type: GET_EMPOLYEE, payload: response });
  return response;
};
