import { apiNode } from "@/plugins/axios";

class LoginService {
  login(credentials: Login.Credentials) {
    return new Promise<Login.TokenLogin>((resolve, reject) => {
      apiNode.post(`/sessions`, credentials).then(
        (response) => resolve(response.data),
        (err) => reject(err.response.data)
      );
    });
  }
  // refreshToken() {
  //   const token = {
  //     grantType: "REFRESH_TOKEN",
  //     refreshToken: localStorage.getItem("refreshToken"),
  //   };
  //   return new Promise<Login.TokenLogin>((resolve, reject) => {
  //     apiNode.post(`/token`, token).then(
  //       (response) => resolve(response.data),
  //       (err) => reject(err.response)
  //     );
  //   });
  // }

  forgetPassword(email: Login.UserEmail) {
    return new Promise((resolve, reject) => {
      apiNode.post(`/user/forget_password`, email).then(
        (response) => resolve(response),
        (err) => reject(err.response.data)
      );
    });
  }

  isValidToken(token: Login.TokenLogin) {
    return new Promise<boolean>((resolve, reject) => {
      apiNode.get(`/token/${token}`).then(
        (response) => resolve(response.data),
        (err) => reject(err.response)
      );
    });
  }
}

export default new LoginService();
