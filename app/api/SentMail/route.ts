import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { name , email , phone , message} = req.body;

  // Create a Nodemailer transporter
  console.log(req.body)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'addisuyafet321@gmail.com',
      pass: process.env.Password
    }
  });

  // Define the email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'yafetaddisu123@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name} \nEmail: ${email} \nphone: ${phone} \nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify("Email Sent Succesfully"), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to send email"), { status: 200 });
  }
}
