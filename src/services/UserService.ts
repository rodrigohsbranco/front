import { apiNode } from "@/plugins/axios";

class UserService {
  getInfo(token: string) {
    return new Promise<any>((resolve, reject) => {
      apiNode.get(`/users/info/${token}`).then(
        (response) => resolve(response.data),

        (err) => reject(err.response.data)
      );
    });
  }
}

export default new UserService();
