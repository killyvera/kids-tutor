import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductFeatures = (props) => {
  const router = useRouter();
  const [isBlurred, setIsBlurred] = useState(false);
  const schools = props.feature2?.schools.split(",");

  useEffect(() => {
    const blurTimeout = setTimeout(() => {
      setIsBlurred(true);
    }, 1000);

    return () => clearTimeout(blurTimeout);
  }, []);

  return (
    <div className="">
      <div className="h-[100%] relative py-60">
        <div
          className={`-z-10 absolute inset-0 bg-cover bg-center bg-no-repeat backdrop-filter${
            isBlurred ? " duration-1000 transition blur-sm" : "blur-none"
          }`}
          style={{ backgroundImage: "url('/back00.png')", margin: "0px" }}
        />
        <img
          className="absolute 3xl:left-[466px] sm:left-[29%] 2xl: 2xl:bottom-[0px] xl:bottom-[-30px] xl:left-[300px] md:top-[-90px] md:left-[-150px] lg:top-[-80px] lg:left-[190px] sm:left-[-190px] sm:top-[-98px] mn:top-[120px] -z-[10] 2xl:left-[400px]"
          src="/girl2.png"
          alt="Featured Product"
          width="500px"
          height="500px"
        />

        <div className="flex flex-col items-center justify-center space-y-24">
          {/*
           */}
          <div className="relative w-[50%]">
            <img
              className="absolute 2xl:scale-[0.55] 2xl:hover:scale-[0.61] 2xl:top-[-340px] 2xl:left-[370px] xl:top-[-230px] xl:left-[370px] md:top-[-40px] md:left-[20px] md:scale-[80%] md:hover:scale-[90%] lg:top-[-130px] lg:left-[300px] lg:scale-[0.70] lg:hover:scale-[0.75] sm:top-[-20px] sm:left-[30px] mt-7 sm:scale-[0.9] sm:hover:scale-[1] mn:top-[120px] mn:scale-[100%] mn:hover:scale-[110%] transition duration-300 z-10 rot"
              src="/box.png"
              alt="Featured Product"
              width="800px"
              height="500px"
            />
            <h1 className="absolute lg:top-[-300px] lg:w-[120%] lg:left-[200px] lg:scale-[75%] lg:hover:scale-[80%] 2xl:top-[-290px] 2xl:w-[80%] 2xl:left-[400px] 2xl:scale-[100%] 2xl:hover:scale-[112%] xl:top-[-300px] md:top-[-300px] md:scale-[80%] md:hover:scale-90 md:w-[170%] md:left-[-90px] sm:w-[190%] sm:scale-[64%] sm:hover:scale-[75%] sm:top-[-300px] sm:left-[-80px] mn:top-[-300px] mn:scale-[50%] mn:hover:scale-[60%] mn:w-[300%] left-[-161px] text-3xl font-gloria text-left text-gray-800 bg-white p-4 rounded-xl shadow-xl transition hover:scale-100">
              {props.title}
            </h1>
            <p className="absolute 3xl:w-[40%] 3xl:top-[-100px] 3xl:left-[-380px] 2xl:scale-100 2xl:top-[-100px]  2xl:left-[-315px] 2xl:w-[50%] 2xl:hover:scale-[115%] xl:top-[-100px] xl:left-[-270px] xl:w-[55%] md:scale-[75%] md:left-[200px] md:top-[-180px] md:hover:scale-[87%] md:w-[90%] lg:left-[-220px] lg:scale-[90%] lg:hover:scale-[105%] lg:w-[47%] top-[-200px] sm:left-[130px] sm:hover:scale-[90%] sm:w-[110%] sm:scale-[80%] mn:w-[200%] mn:scale-[75%] mn:hover:scale-[80%] mn:left-[-80px] text-2xl font-medium text-gray-800 bg-white p-4 rounded-xl shadow-xl transition hover:scale-125">
              {props.content}
            </p>
          </div>
          {/* <div className="flex justify-center mt-8"> */}
          {/* <img className="hover:scale-x-105 hover:scale-y-105 transition duration-300" src="/acreditationImage1.png" alt="Accreditation" width="90px" height="90px" />
          <img className="hover:scale-x-105 hover:scale-y-105 transition duration-300" src="/acreditationImage2.png" alt="Accreditation" width="90px" height="90px" />
          <img className="hover:scale-x-105 hover:scale-y-105 transition duration-300" src="/acreditationImage3.png" alt="Accreditation" width="139px" height="90px" /> */}
          {/* </div> */}
        </div>
      </div>
      <div className="pt-[132px] bg-white ">
        {/* <img src="/medal2.png" className="w-[100px]" /> */}
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-10 pb-2">
          {props?.feature1?.title}
        </h2>
        <p className="text-gray-500 text-2xl border-t border-gray-200 w-[80%] pt-2">
          {props?.feature1?.content}
        </p>
        <dd className="mt-2 text-sm text-gray-500 flex flex-row py-8 w-[85%]">
          <img
            src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/us.svg"
            alt="Bandera de Estados Unidos"
            className="h-[120px] w-[22%] object-contain mx-auto transition hover:scale-125"
            loading="lazy"
            title="USA"
          />
          <img
            src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/jp.svg"
            alt="Bandera de Japon"
            className="h-[120px] w-[22%] object-contain mx-auto transition hover:scale-125"
            loading="lazy"
            title="Japan"
          />
          <img
            src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/es.svg"
            alt="Bandera de España"
            className="h-[120px] w-[22%] object-contain mx-auto transition hover:scale-125"
            loading="lazy"
            title="Spain"
          />
          <img
            src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/mx.svg"
            alt="Bandera de México"
            className="h-[120px] w-[22%] object-contain mx-auto transition hover:scale-125"
            loading="lazy"
            title="Mexico"
          />
        </dd>
        <div>
          <img src="/method.png" className="w-[100px] pb-8 pt-20" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-2">
            {props?.feature2?.title}
          </h2>
          <p className="text-gray-500 text-2xl border-t border-gray-200 w-[80%] pt-2">
            {props?.feature2?.content}
          </p>
          <div className="flex flex-row rounded-md w-[auto] space-x-10 items-center justify-center py-20">
            <a
              href="https://es.wikipedia.org/wiki/M%C3%A9todo_Montessori"
              target="_blank"
              rel="noopener noreferrer"
              className="items-center text-gray-700 hover:scale-110 font-medium justify-center transition duration-200 text-sm hover:bg-red-400 hover:text-gray-100 rounded-xl my-2 px-4 flex flex-row"
            >
              <img
                src="/montesori.png"
                alt="Medalla de Certificado de Excelencia Academica"
                className="h-[90px] px-4"
              />
              {schools[0]}
            </a>
            <a
              href="https://es.wikipedia.org/wiki/Matem%C3%A1ticas_m%C3%A9todo_Singapur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 items-center hover:scale-110 font-medium transition duration-200 text-sm hover:bg-red-400 hover:text-gray-100 my-2 py-2 px-4 rounded-xl flex flex-row"
            >
              <img
                src="/singapur.png"
                alt="Medalla de Certificado de Excelencia Academica"
                className="h-[80px] px-4"
              />
              {schools[1]}
            </a>
            <a
              href="https://es.wikipedia.org/wiki/Common_Core"
              target="_blank"
              rel="noopener noreferrer"
              className="items-center text-gray-700 hover:scale-110 font-medium transition duration-200 text-sm hover:bg-red-400 hover:text-gray-100 px-4 my-2 py-2 flex flex-row rounded-xl"
            >
              <img
                src="/commoncore.png"
                alt="Medalla de Certificado de Excelencia Academica"
                className="h-[80px] px-4"
              />
              {schools[2]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
