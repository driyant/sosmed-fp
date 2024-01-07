// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { id } = req.query;
      const token = req.headers.authorization;
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API}/api/likes/post/${id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      res.status(response.status).json({ message: response.data.message });
    } catch (error) {
      res
        .status(error.response.status)
        .json({ message: error.response.statusText });
    }
  }
}
