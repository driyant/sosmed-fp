// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      const token = req.headers.authorization;
      const { id } = req.query;
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API}/api/post/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      res.status(response.status).json({ message: response.message });
    } catch (error) {
      console.log(error);
      res
        .status(error.response.status)
        .json({ message: error.response.statusText });
      // res.status(500).json({ message: "Hello!" });
    }
  }
  if (req.method === "GET") {
    try {
      const token = req.headers.authorization;
      console.log(token);
      const { id } = req.query;
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API}/api/post/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      res.status(response.status).json({ data: response.data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong!" });
      // res
      //   .status(error.response.status)
      //   .json({ message: error.response.statusText });
    }
  }
  if (req.method === "PATCH") {
    try {
      const token = req.headers.authorization;
      const { id } = req.query;
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API}/api/post/update/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          description: req.body.tweet,
        },
      });
      res.status(response.status).json({ data: response.data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong!" });
      // res
      //   .status(error.response.status)
      //   .json({ message: error.response.statusText });
    }
  }
}
