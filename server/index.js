const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/submit", async (req, res) => {
  const { name, email, number, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const text = `
    Name: ${name},
    Email: ${email},
    Number: ${number},
    Message: ${message},
  `;

  await transporter.sendMail({
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject,
    text,
  });

  res.send({ message: "Thanks for your message" });
});

app.listen(PORT);
