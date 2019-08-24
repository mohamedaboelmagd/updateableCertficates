export async function sendEmail(data) {
  const nodemailer = require("nodemailer");

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    await transporter.sendMail(data);
    return;
  } catch (error) {
    console.error(error);
  }
}
export function emailObjectFromAward(award) {
  await sendEmail({
    from: "",
    to: email,
    subject: "You received a new certificate",
    body: "you have been awarded the following certificate" + award.url
  });
}
