import React from "react";
import Image from "next/image";
import KidsTutorMarketplace from "./KidsTutorMarketplace";

const Marketplaces = ({ marketplaces }) => {
  console.log(marketplaces);
  const marketplaceIcons = {
    mercadolibre: "mercadolibre.png",
    amazon: "amazon.png",
    etsy: "etsy.webp",
    liverpool: "liverpool.png",
    kidstutor: "kidstutor.webp",
  };

  return (
    <div className="text-center pb-7">
      <h1 className="">Obtenlo Ahora en</h1>
      <div className="flex justify-center items-center mt-3">
        {marketplaces ? (
          Object.entries(marketplaces).map(([key, value]) => (
            <div className="pt-2" style={{ margin: "-5px" }} key={key}>
              {key === "kidstutor" ? (
                <KidsTutorMarketplace />
              ) : (
                <a href={value} target="_blank" rel="noopener noreferrer">
                  <Image
                    width={90}
                    height={90}
                    src={`/${marketplaceIcons[key]}`}
                    alt={key}
                    className="rounded transition scale-75 hover:scale-100"
                  />
                </a>
              )}
            </div>
          ))
        ) : (
          <p className="bg-red-500 text-white px-4 py-2 rounded">
            AGOTADO <br /> No Disponible
          </p>
        )}
      </div>
    </div>
  );
};

export default Marketplaces;
