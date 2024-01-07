import axios from "axios";
import { parse } from "cookie";
import { getServerSideProps } from "next";
import { Cookies } from "next-cookies";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const token = req.headers.authorization;
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API}/api/user/me`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      res.status(response.status).json({ profile: response.data.data });
    } catch (error) {
      console.error(error.response.data.message);
      res
        .status(error.response.status)
        .json({ message: error.response.data.message });
    }
  }
}
