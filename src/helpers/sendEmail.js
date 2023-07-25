import nodemailer from 'nodemailer';

export async function sendEmail(mailOptions) {
  const transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo electrónico enviado:");
    console.log("ID del mensaje:", info.messageId);
    return { success: true };
  } catch (err) {
    console.error("Error al enviar el correo electrónico:", err);
    return { success: false, error: err.message };
  }
}
