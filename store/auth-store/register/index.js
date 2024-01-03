import { create } from "zustand";
import axios from "axios";

const useRegisterStore = create(() => ({
  registerHandler: async (data) => {
    try {
      const response = await axios({
        url: "/api/register",
        method: "POST",
        data: data,
      });
      console.log(response);
      return {
        success: true,
        code: response.status,
        text: response.statusText,
      };
    } catch (error) {
      console.log(error.response);
      return {
        success: false,
        error: "Register failed: " + error.response.statusText,
        code: error.response.status,
      };
    }
  },
}));

export default useRegisterStore;
