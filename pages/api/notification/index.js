// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const token = req.headers.authorization;
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API}/api/notifications`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      res.status(response.status).json({ data: response.data });
    } catch (error) {
      res
        .status(error.response.status)
        .json({ message: error.response.statusText });
    }
  }
}
