// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { post } = req.body;
      if (!post) {
        res.status(400).json({ message: "BAD_REQUEST" });
      }
      const token = req.headers.authorization;
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API}/api/post`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          description: post,
        },
      });
      // console.log(response);
      res.status(response.status).json({ message: response.data.message });
    } catch (error) {
      res
        .status(error.response.status)
        .json({ message: error.response.statusText });
    }
  }
}
