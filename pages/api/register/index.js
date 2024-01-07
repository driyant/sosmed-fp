// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  const { body } = req;
  if (req.method === "POST") {
    try {
      const { name, email, password, date, hobby, phone } = body;
      if (!name || !email || !password) {
        res.status(400).json({ message: "BAD_REQUEST" });
      }
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_API}/api/register`,
        method: "POST",
        data: {
          name,
          email,
          password,
          date,
          hobby,
          phone,
        },
      });
      res.status(response.status).json({ message: response.statusText });
    } catch (error) {
      console.log(error.response.data.message);
      res
        .status(error.response.status)
        .json({ message: error.response.data.message });
    }
  } else {
    res.status(405).json({ message: "HTTP Method Is Not Allowed!" });
  }
}
