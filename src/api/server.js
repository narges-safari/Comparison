import axios from "axios";
import * as apiServer from "./apiConfig.js";

export const server = () =>
  axios.create({
    baseURL: `${apiServer.PROTOCOL}://${apiServer.BASE}:${apiServer.PORT}/api/v1`,
    headers: { Accept: "application/json" },
  });

export default server;
