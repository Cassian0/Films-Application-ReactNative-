import axios from "axios";

export const key = "ef5883b484528dc946942b86871f27a1";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
