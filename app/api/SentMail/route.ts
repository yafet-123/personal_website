import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req:NextApiRequest, res) => {
  const { name , email , phone , message} = await req.json();

  // Create a Nodemailer transporter
  console.log("name")
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'addisuyafet321@gmail.com',
      pass: process.env.Password
    }
  });

  // Define the email options
  const mailOptions = {
    from: 'addisuyafet321@gmail.com',
    to: 'helenzersy8905@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name} \nEmail: ${email} \nphone: ${phone} \nMessage: ${message}`,
  };
  console.log(mailOptions)
  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify("Email Sent Succesfully"), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to send email"), { status: 200 });
  }
}
