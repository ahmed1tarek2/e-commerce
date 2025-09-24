import axios from "axios";

const api = axios.create({
  baseURL: "/api", // all requests will start with /api
});

export default api;
