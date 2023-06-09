import Image from "next/image";

const PrintableDownload = ({ a4Url, cartaUrl }) => {
  return (
      <div className="flex justify-center space-x-4 pb-5">
        <a href={a4Url} download>
          <button className=" flex flex-row px-4 py-2 primary-button text-white rounded-md transition hover:scale-[1.15]">
          <Image
              src="/folio.png"
              alt="Icono de formato A4"
              height={'40'}
              width={'30'}

            />
           A4 Descargar
          </button>
        </a>
        <a href={cartaUrl} download>
          <button className="flex flex-row px-4 py-2 primary-button text-white rounded-md transition hover:scale-[1.15]">
          <Image
              src="/folio.png"
              alt="Icono de formato A4"
              height={'40'}
              width={'30'}

            />
            Carta Descargar
          </button>
        </a>
      </div>

  );
};

export default PrintableDownload;
