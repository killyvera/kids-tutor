import { Storage } from "@aws-amplify/storage";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

const product = {
  name: "Kids Tutor, la manera más divertida de aprender.",
  descriptionn:
    "Nuestros kits educativos ofrecen una forma interactiva y entretenida de mejorar las habilidades de inglés y matemáticas de tus hijos. Con actividades lúdicas, desafíos divertidos y materiales de alta calidad, Kids Tutor es la opción ideal para fortalecer el aprendizaje de tus hijos. ¡Descubre nuestros juegos didácticos hoy y bríndales a tus hijos una forma divertida de aprender mientras juegan!",
  sku: "CT-PHYSICS-001",
  price: 500,
  stock: 20,
  dimensions: "22x22x12",
  weight: 0.42,
  cover: "https://i.ibb.co/VSf5pBW/MATH-01.webp",
  categories: ["fisica", "juego de mesa"],
};

export default function MyProductFeatures({
  title,
  content,
  feature1,
  feature2,
  feature3,
  feature4,
}) {
  const featureContent = feature2.content;
  const schools = featureContent.split(",");

  console.log(schools);

  const [image, setImage] = useState("");
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const file = await Storage.get("images/MATH-01.webp", {
          level: "public",
        });
        setImage(file);
      } catch (error) {
        console.log("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);
  console.log(image && image, feature1);

  return (
    <div className="bg-white py-20">
      <div className="w-[80%]">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title && title}
        </h2>
        <p className="text-gray-500">{content && content}</p>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 sm:px-6 pt-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <img
                src="/medal.png"
                alt="Medalla de Certificado de Excelencia Academica"
                className=""
              />
              <dt className="font-medium text-gray-900">{feature1.title}</dt>
              <p className="mt-2 text-sm text-gray-500 flex flex-row">
                {feature1.content}
              </p>
              <dd className="mt-2 text-sm text-gray-500 flex flex-row">
                <img
                  src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/us.svg"
                  alt="Bandera de Estados Unidos"
                  className="h-6 w-6 object-contain mx-auto hover:scale-105"
                  loading="lazy"
                  title="USA"
                />
                <img
                  src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/jp.svg"
                  alt="Bandera de Japon"
                  className="h-6 w-6 object-contain mx-auto hover:scale-105"
                  loading="lazy"
                  title="Japan"
                />
                <img
                  src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/es.svg"
                  alt="Bandera de España"
                  className="h-6 w-6 object-contain mx-auto hover:scale-105"
                  loading="lazy"
                  title="Spain"
                />
                <img
                  src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/mx.svg"
                  alt="Bandera de México"
                  className="h-6 w-6 object-contain mx-auto hover:scale-105"
                  loading="lazy"
                  title="Mexico"
                />
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <img
                src="/method.png"
                alt="Medalla de Certificado de Excelencia Academica"
                className="pb-4"
              />
              <dt className="font-medium text-gray-900">{feature2.title}</dt>
              <div className=" flex flex-col bg-gray-100 rounded-md">
                <a
                  href="https://es.wikipedia.org/wiki/M%C3%A9todo_Montessori"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:scale-110 font-medium transition duration-200 text-sm hover:bg-red-400 hover:text-gray-100 rounded-sm my-2 py-2 flex flex-row"
                >
                  <img
                    src="/college.png"
                    alt="Medalla de Certificado de Excelencia Academica"
                    className="h-5 px-4"
                  />
                  {schools[0]}
                </a>
                <a
                  href="https://es.wikipedia.org/wiki/Matem%C3%A1ticas_m%C3%A9todo_Singapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:scale-110 font-medium transition duration-200 text-sm hover:bg-red-400 hover:text-gray-100 rounded-sm my-2 py-2 flex flex-row"
                >
                  <img
                    src="/college.png"
                    alt="Medalla de Certificado de Excelencia Academica"
                    className="h-5 px-4"
                  />
                  {schools[1]}
                </a>
                <a
                  href="https://es.wikipedia.org/wiki/Common_Core"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:scale-110 font-medium transition duration-200 text-sm hover:bg-red-400 hover:text-gray-100 rounded-sm my-2 py-2 flex flex-row"
                >
                  <img
                    src="/college.png"
                    alt="Medalla de Certificado de Excelencia Academica"
                    className="h-5 px-4"
                  />
                  {schools[2]}
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <img
                src="/playing.png"
                alt="Medalla de Certificado de Excelencia Academica"
                className=""
              />
              <dt className="font-medium text-gray-900">{feature3?.title}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature3?.content}
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <img
                src="/cards.png"
                alt="Medalla de Certificado de Excelencia Academica"
                className="w-11"
              />
              <dt className="font-medium text-gray-900">{feature4?.title}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature4?.content}
              </dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            src={image && image}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            width={500}
            height={500}
            className="rounded-lg bg-gray-100"
            priority={true}
          />
          <img
            src="https://i.ibb.co/ydL2gdS/feature-Image01.png"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://i.ibb.co/G2n77Rv/feature-Image02.png"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://i.ibb.co/B4CvPVW/feature-Image00.png"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}

const TitleWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl font-bold text-center"
    >
      {children}
    </motion.div>
  );
};
