// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const token = req.headers.authorization;
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API}/api/logout`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      res.status(response.status).json({ message: response.message });
      res.status(200).json({ message: "OK" });
    } catch (error) {
      res
        .status(error.response.status)
        .json({ message: error.response.statusText });
    }
  }
}
