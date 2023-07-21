import Image from "next/image";
import Link from "next/link";

const MailTemplate = ({ username, link, email, purchaseID }) => {
  return (
    <div
      style={{
        backgroundColor: "#FFF",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          flexDirection: "column",
        }}
      >
        <Link
          href="https://www.kidstutor.co"
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f87171",
            padding: "10px",
            width: "100%",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <img
            src="https://www.kidstutor.co/_next/image?url=%2FlogoFull.png&w=64&q=75"
            alt="Kids Tutor Logo"
            width={50}
            height={50}
            style={{
              marginRight: "7px",
              alignSelf: "center",
              marginRight: "10px",
              transition: "transform 0.3s",
              ":hover": { transform: "scale(1.25)" },
            }}
          />
          <h1
            style={{
              color: "#FFF",
              alignSelf: "center",
              fontSize: "2xl",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              textDecoration: "none",
            }}
          >
            Kids Tutor
          </h1>
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <img
            width={120}
            height={120}
            alt="success shoping icon"
            className=""
            src={"https://www.kidstutor.co/_next/image?url=%2FlogoFull.png&w=64&q=75"}
          /> */}
      </div>
      <div
        style={
          {
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
          }
        }
      >
        <h1
          style={{
            fontSize: "3xl",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#4B5563",
          }}
        >
          ¡Gracias por tu compra!
        </h1>
        <p style={{ fontSize: "lg", color: "#4B5563", marginBottom: "20px" }}>
          Tu Compra ha sido confirmada. <br /> No. de orden:
          {purchaseID}
        </p>

        <p style={{ fontSize: "lg", color: "#4B5563", marginBottom: "20px" }}>
          ¡Hola, {username}!
        </p>
        <p style={{ fontSize: "lg", color: "#4B5563", marginBottom: "20px" }}>
          Gracias por tu compra en Kids Tutor. Has adquirido un producto digital
          para imprimir.
        </p>
        <p style={{ fontSize: "lg", color: "#4B5563", marginBottom: "20px" }}>
          Puedes descargar tus productos haciendo clic en el siguiente enlace:
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <a
            href={link}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3B82F6",
              color: "#FFF",
              borderRadius: "5px",
              textDecoration: "none",
              transition: "background-color 0.3s",
              ":hover": { backgroundColor: "#2563EB" },
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Descargar productos
          </a>
        </div>
        <p style={{ fontSize: "base", color: "#6B7280", marginBottom: "10px" }}>
          Si tienes alguna pregunta, contáctanos a{" "}
          <a href={`mailto:${email}`} style={{ color: "#3B82F6" }}>
            {email}
          </a>
          . ¡Gracias por elegir Kids Tutor!
        </p>
        <p style={{ fontSize: "sm", color: "#6B7280", paddingBottom: "2rem" }}>
          Este correo es una confirmación automática, por favor no respondas a
          este mensaje.
        </p>
      </div>
    </div>
  );
};

export default MailTemplate;
