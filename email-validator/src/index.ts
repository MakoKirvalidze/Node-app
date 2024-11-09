import express, { Request, Response } from "express";
import validator from "email-validator";

const app = express();
const port = 5000;

app.use(express.json());

app.post("/validate-email", (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send("Email is required");
  }

  const isValid = validator.validate(email);

  if (isValid) {
    return res.status(200).send("Valid email");
  } else {
    return res.status(400).send("Invalid email");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
