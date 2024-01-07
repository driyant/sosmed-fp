// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  console.log(req.method);
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      const token = req.headers.authorization;
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API}/api/replies/post/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response);
      res.status(response.status).json({ data: response.data });
    } catch (error) {
      res
        .status(error.response.status)
        .json({ message: error.response.statusText });
    }
  }
  if (req.method === "POST") {
    try {
      const { id } = req.query;
      const { reply } = req.body;
      const token = req.headers.authorization;
      if (!reply) {
        res.status(400).json({ message: "BAD_REQUEST" });
      }
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API}/api/replies/post/${id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          description: reply,
        },
      });
      // console.log(response);
      res.status(response.status).json({ message: response.message });
    } catch (error) {
      console.log(error.response.statusText);
      res
        .status(error.response.status)
        .json({ message: error.response.statusText });
    }
  }
  if (req.method === "DELETE") {
    const { id } = req.query;
    const token = req.headers.authorization;
    try {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API}/api/replies/delete/${id}`,
        method: "DELETE",
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
