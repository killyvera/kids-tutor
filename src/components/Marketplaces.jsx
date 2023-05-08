import React from "react";

const Marketplaces = ({ marketplaces }) => {
  const marketplaceIcons = {
    mercadolibre: "mercadolibre.png",
    amazon: "amazon.png",
    etsy: "etsy.png",
    liverpool: "liverpool.png"
  };

  return (
    <div className="text-center pb-7">
    <h1 className="" >Obtenlo Ahora en</h1>
    <div className="flex justify-center items-center space-x-3 mt-3">
      {marketplaces !== null? Object.entries(marketplaces).map(([key, value]) => (
        <a href={value} target="_blank" rel="noopener noreferrer" key={key}>
          <img
            src={`/${marketplaceIcons[key]}`}
            alt={key}
            className="rounded transition hover:scale-105"
          />
        </a>
      )): <p>Agotado o No Disponible</p>}
    </div>
    </div>
  );
};

export default Marketplaces;
