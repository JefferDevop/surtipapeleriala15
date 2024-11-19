import { BASE_API } from "../config/constants";

export class Auth {

  async login(data) {
    try {
      const url = `${BASE_API}/api/auth/login/`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, params);

      if (response.status !== 200) throw result;

      const result = await response.json();

      return result;
    } catch (error) {
      throw error;
    }
  }
}
