// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const token = req.headers.authorization;
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API}/api/posts?type=all`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // res.status(response.status).json({ posts: response.data });
      res.status(response.status).json({ data: response.data.data });
    } catch (error) {
      console.log(error);
      res
        .status(error.response.status)
        .json({ message: error.response.statusText });
      // res.status(500).json({ message: "Hello!" });
    }
  }
}
