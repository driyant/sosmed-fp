// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  const { body } = req;

  if (req.method === "POST") {
    const { email, password } = body;
    if (!email || !password) {
      res.status(400).json({ message: "BAD_REQUEST" });
    }
    try {
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API}/api/login`,
        method: "POST",
        data: {
          email,
          password,
        },
      });
      res.status(200).json({ data: response.data });
    } catch (error) {
      res
        .status(error.response.status)
        .json({ message: error.response.statusText });
    }
  }
}
