import router from "@/router";
import axios from "axios";

const apiNode = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

function interceptorsResponseError(error: any) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    if (originalRequest.url === `${process.env.VUE_APP_BASE_URL}/token`) {
      router.push({
        name: "Login",
      });
      return Promise.reject(error);
    }
    originalRequest._retry = true;
    // LoginService.refreshToken()
    //   .then((response) => {
    //     store.commit("LOGIN", response);
    //     location.reload(true);
    //     return apiNode(originalRequest);
    //   })
    //   .catch((err) => {
    //     store.commit("LOGOUT");
    //     router.push({
    //       name: "Login",
    //     });
    //     return Promise.reject(err);
    //   });
  }
  return Promise.reject(error);
}

apiNode.interceptors.request.use(
  (config) => {
    const token = localStorage.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiNode.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return interceptorsResponseError(error);
  }
);

export { apiNode };
