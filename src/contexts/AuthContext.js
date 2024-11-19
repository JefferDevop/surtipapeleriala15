import { createContext, useState, useEffect } from "react";
import { Token } from "@/api/token";
import { User } from "@/api/user";

export const AuthContext = createContext();

const tokenCtrl = new Token();
const userCtrl = new User();

export function AuthProvider(props) {
  const [user, setUSer] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState();

  useEffect(() => {
    (async () => {
      const token = tokenCtrl.getToken();

      if (!token) {
        logout();
        setLoading(false);
        return;
      }
      if (tokenCtrl.hasExpired(token)) {
        logout();
        setLoading(false);
        return;
      } else {
        await login(token);
      }
    })();
  }, []);

  const login = async (token) => {
    try {
      tokenCtrl.setToken(token);
      const response = await userCtrl.getMeAPi(token);
      setUSer(response);
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const { children } = props;

  const logout = () => {
    tokenCtrl.removeToken();
    setToken(null);
    setUSer(null);
  };

  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updateUser: null,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
