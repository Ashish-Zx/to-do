import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "";
const baseURL = apiUrl.endsWith("/api") ? apiUrl : `${apiUrl}/api`;

const client = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

client.interceptors.response.use(
  (res) => res,
  (err) => {
    const message =
      err?.response?.data?.message || err.message || "Request failed";
    return Promise.reject(new Error(message));
  }
);

export default client;
