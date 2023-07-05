import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { recipient, subject, text } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password'
    }
  });

  // Define the email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: recipient,
    subject,
    text
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify("Email Sent Succesfully"), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to send email"), { status: 200 });
  }
}
