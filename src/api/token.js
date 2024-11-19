import { TOKEN } from "@/config/constants";
import jwtDecode from "jwt-decode";

export class Token {
  setToken(token) {
    localStorage.setItem(TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  hasExpired(token) {
    const tokenDecode = jwtDecode(token);

    const expireDate = tokenDecode.exp * 1000;
    const currentData = new Date().getTime();


    if (currentData > expireDate) {
      return true;
    }
    return false;
  }

  removeToken() {
    localStorage.removeItem(TOKEN);
  }
}
