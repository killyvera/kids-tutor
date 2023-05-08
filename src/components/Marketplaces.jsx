import React from "react";

const Marketplaces = ({ marketplaces }) => {
  const marketplaceIcons = {
    mercadolibre: "mercadolibre.png",
    amazon: "amazon.png",
    etsy: "etsy.png",
    liverpool: "liverpool.png"
  };

  return (
    <>
    <h1 className="justify-center pb-2" >Obtenlo Ahora en</h1>
    <div className="flex justify-center items-center space-x-4">
      {marketplaces !== null? Object.entries(marketplaces).map(([key, value]) => (
        <a href={value} target="_blank" rel="noopener noreferrer" key={key}>
          <img
            src={`/${marketplaceIcons[key]}`}
            alt={key}
            className="scale-75 rounded transition hover:scale-100"
          />
        </a>
      )): <p>Agotado o No Disponible</p>}
    </div>
    </>
  );
};

export default Marketplaces;
