import axios from "axios";

const baseURL = "https://api.tvmaze.com";

const createApi = (baseURL: string) => {
  const api = axios.create({
    baseURL,
  });
  return api;
};

export const api = createApi(baseURL);
