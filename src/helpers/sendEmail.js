// imports
import { SES } from "aws-sdk";

// configurar SES
const ses = new SES({
  region: "us-east-1",
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

// función para enviar email
export async function sendEmail(mailOptions) {
  // mapear parámetros a formato SES
  const params = {
    Source: mailOptions.from,
    Destination: {
      ToAddresses: [mailOptions.to],
    },
    Message: {
      Subject: {
        Data: mailOptions.subject,
      },
      Body: {
        Html: {
          Data: mailOptions.html,
        },
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    return {
      success: true,
      messageId: result.MessageId,
    };
  } catch (err) {
    return {
      success: false,
      error: err.message,
    };
  }
}
