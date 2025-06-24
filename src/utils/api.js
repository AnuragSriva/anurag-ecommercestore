import axios from "axios";

// const api = axios.create({
//   baseURL: "https://app.beeceptor.com/mock-server/fake-store-api",
//   timeout: 5000,
// });

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 5000,
});


api.interceptors.response.use(
  response => response,
  console.log("res",response),
  error => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
