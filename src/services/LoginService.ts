import { apiNode } from "@/plugins/axios";

class LoginService {
  login(credentials: any) {
    console.log(credentials);
    return new Promise<any>((resolve, reject) => {
      apiNode.post(`/sessions`, credentials).then(
        (response) => resolve(response.data[0]),
        (err) => reject(err.response.data)
      );
    });
  }
}

export default new LoginService();
