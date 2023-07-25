import nodemailer from 'nodemailer';
import { promisify } from 'util';

const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

const sendMailAsync = promisify(transporter.sendMail).bind(transporter);

export async function sendEmail(mailOptions) {
  try {
    const info = await sendMailAsync(mailOptions);
    console.log("Correo electrónico enviado:");
    console.log("ID del mensaje:", info.messageId);
    return { success: true };
  } catch (err) {
    console.error("Error al enviar el correo electrónico:", err);
    return { success: false, error: err.message };
  }
}
