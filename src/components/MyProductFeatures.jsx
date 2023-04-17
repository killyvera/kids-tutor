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
  cover: "https://m.media-amazon.com/images/I/91SShkxYS6L._AC_SX425_.jpg",
  categories: ["fisica", "juego de mesa"],
};

export default function MyProductFeatures() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {product.name}
          </h2>
          <p className="mt-4 text-gray-500">{product.descriptionn}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <img
                src="/medal.png"
                alt="Medalla de Certificado de Excelencia Academica"
                className=""
              />
              <dt className="font-medium text-gray-900">
                Producto con normas educativas Internacionales.
              </dt>
              <p className="mt-2 text-sm text-gray-500 flex flex-row">
                Eelaborado considerando los principales programas educativos y
                colaboraciones con profesorado de clase mundial.{" "}
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
                  src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/fr.svg"
                  alt="Bandera de Francia"
                  className="h-6 w-6 object-contain mx-auto hover:scale-105"
                  loading="lazy"
                  title="France"
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
              <dt className="font-medium text-gray-900">
                Los métodos en los que nos basamos son múltiples.
              </dt>
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
                  Método Montessori
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
                  Sistema educativo de Singapur
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
                  Núcleo común
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <img
                src="/playing.png"
                alt="Medalla de Certificado de Excelencia Academica"
                className=""
              />
              <dt className="font-medium text-gray-900">
                Aprendizaje a través del juego: nuestra filosofía.
              </dt>
              <dd className="mt-2 text-sm text-gray-500">
                Encontrar la forma más sencilla y entretenida para aprender es
                fundamental, Nosotros y tus pequeños sabemos que es jugando.
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <img
                src="/cards.png"
                alt="Medalla de Certificado de Excelencia Academica"
                className="w-11"
              />
              <dt className="font-medium text-gray-900">
                Aprendizaje divertido para niños en edad escolar con Kids Tutor.
              </dt>
              <dd className="mt-2 text-sm text-gray-500">
                Refuerza el aprendizaje de matemáticas y otros conceptos
                escolares mediante juegos y actividades divertidas con Kids
                Tutor.
              </dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://i.ibb.co/sVFLLb3/featureimage003.png"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
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
