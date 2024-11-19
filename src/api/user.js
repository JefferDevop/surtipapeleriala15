import { BASE_API } from "../config/constants";
import { authFetch } from "@/config/authFetch";

export class User{

     async getMeAPi() {
        try {
          const url = `${BASE_API}/api/auth/me/`;



        //   const params = {
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //     },
        //   };
      
           const response = await authFetch(url);
           const result = await response.json();

           if (response.status !== 200) throw result

          return result;
        } catch (error) {
          throw error;
        }
      }

}