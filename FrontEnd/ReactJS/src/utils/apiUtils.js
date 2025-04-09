import axios from "axios";

//Admin
const apiAdmin = axios.create({
    baseURL: "http://localhost:8080/api/"
})

apiAdmin.interceptors.request.use(
    (config) => {
      config.headers = {
        ...config.headers,
        Authorization: localStorage.getItem("UserAdmin")
          ? "Bearer " + JSON.parse(localStorage.getItem("UserAdmin"))
          : "",
      };
  
      return config;
    },
    (errors) => {
      return Promise.reject(errors);
    }
);

//Guest
const apiGuest = axios.create({
    baseURL: "http://localhost:8080/api/",
});

apiGuest.interceptors.request.use(
    (config) => {
      config.headers = {
        ...config.headers,
        Authorization: localStorage.getItem("Guest")
          ? "Bearer " + JSON.parse(localStorage.getItem("Guest"))
          : "",
      };
  
      return config;
    },
    (errors) => {
      return Promise.reject(errors);
    }
);

export {apiAdmin, apiGuest};