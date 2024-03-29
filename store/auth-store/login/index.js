import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";

const useLoginStore = create((set) => ({
  isLogin: false,
  loginHandler: async (data) => {
    try {
      const response = await axios({
        url: "/api/login",
        method: "POST",
        data: data,
      });

      if (response.status === 200) {
        set({ isLogin: true });
        const { token, expires_at } = response.data.data.data;
        Cookies.set("token", token);
        const expirationDate = new Date(expires_at);
        const formattedExpiration = expirationDate.toLocaleString("en-US");
        Cookies.set("expires", formattedExpiration);
        return { success: true, error: null };
      }
    } catch (error) {
      let message;
      if (error.response.status === 401) {
        message = "Invalid email or password!";
      } else {
        message = error.response.statusText;
      }
      return {
        success: false,
        error: "Login failed: " + message,
        code: error.response.status,
      };
    }
  },
}));

export default useLoginStore;
