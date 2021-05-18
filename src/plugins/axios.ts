import axios from "axios";

const apiNode = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export { apiNode };
