import axios from "axios";
import { getToken } from "../token";

function getClient() {
  // console.log(getToken())
  const api = axios.create({
    baseURL: "http://3.35.16.85:3000",
    headers: {
      "Authorization": getToken() || '',
      Content_type: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return api;
}

export default getClient;
