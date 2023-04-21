import React from "react";

const Marketplaces = () => {
  return (
    <>
    <h1 className="justify-center py-3" >Obtenlo Ahora en los siguientes <br/>Marketplaces:</h1>
    <div className="flex justify-center items-center space-x-4">
      {/* Enlace de Mercado Libre */}
      <a
        href="https://www.mercadolibre.com.ar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/mercadolibre.png"
          alt="Mercado Libre"
          className="h-50 w-70 object-contain rounded transition hover:scale-125"
        />
      </a>
      {/* Enlace de Amazon */}
      <a
        href="https://www.amazon.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/amazon.png"
          alt="Amazon"
          className="h-50 w-70 object-contain rounded transition hover:scale-125"
        />
      </a>
      {/* Enlace de Etsy */}
      <a href="https://www.etsy.com/" target="_blank" rel="noopener noreferrer">
        <img
          src="/etsy.png"
          alt="Etsy"
          className="h-50 w-70 object-contain rounded transition hover:scale-125"
        />
      </a>
    </div>
    </>
  );
};

export default Marketplaces;
