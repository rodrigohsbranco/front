import { apiNode } from "@/plugins/axios";

class UserService {
  getInfo(token: string) {
    return new Promise((resolve, reject) => {
      apiNode.get(`/users/info/${token}`).then(
        (response) => resolve(response),
        (err) => reject(err.response.data)
      );
    });
  }
}

export default new UserService();
