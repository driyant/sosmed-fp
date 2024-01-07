import { create } from "zustand";
import axios from "axios";

const useProfileStore = create((set) => ({
  profile: {},

  fetchProfile: async (token) => {
    try {
      const response = await axios({
        url: "/api/profile",
        headers: {
          Authorization: token,
        },
      });
      set({ profile: response.data });
      return { success: true, error: null, profile: response.data };
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

export default useProfileStore;
