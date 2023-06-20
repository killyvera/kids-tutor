import { useState } from "react";
import Image from "next/image";
import { Storage } from "aws-amplify";

const Printable = ({ productId }) => {
  const [language, setLanguage] = useState(null);

  const handleDownload = async (format) => {
    if (language) {
      const fileName = `files/${productId}-${format}-${language}.pdf`;
      const fileUrl = await Storage.get(fileName, { level: "public" });
      window.open(fileUrl, "_blank");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 pb-5">
      <div className="flex flex-row">
        <div className="flex flex-row items-center space-x-2">
          <input
            type="radio"
            id="language-eng"
            name="language"
            value="eng"
            onChange={() => setLanguage("eng")}
          />
          <label htmlFor="language-eng">
            <Image
              src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/us.svg"
              alt="Bandera de inglés"
              height={30}
              width={40}
            />
            ENG
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="language-es"
            name="language"
            value="es"
            onChange={() => setLanguage("es")}
          />
          <label htmlFor="language-es">
            <Image
              src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/es.svg"
              alt="Bandera de español"
              height={30}
              width={40}
            />
            ESP
          </label>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          className="flex flex-row px-4 py-2 primary-button text-white rounded-md transition hover:scale-[1.15]"
          onClick={() => handleDownload("A4")}
          disabled={!language}
        >
          <Image
            src="/folio.png"
            alt="Icono de formato A4"
            height={40}
            width={30}
          />
          A4 Descargar
        </button>
        <button
          className="flex flex-row px-4 py-2 primary-button text-white rounded-md transition hover:scale-[1.15]"
          onClick={() => handleDownload("Letter")}
          disabled={!language}
        >
          <Image
            src="/folio.png"
            alt="Icono de formato Carta"
            height={40}
            width={30}
          />
          Carta Descargar
        </button>
      </div>
    </div>
  );
};

export default Printable;
