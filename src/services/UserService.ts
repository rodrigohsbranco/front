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

  getDadosPaginated(page: number, per_page: number) {
    return new Promise<any>((resolve, reject) => {
      apiNode.get(`/users?page=${page}&per_page=${per_page}`).then(
        (response) => resolve(response.data),

        (err) => reject(err.response.data)
      );
    });
  }
}

export default new UserService();
