import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductFeatures = (props) => {
  const router = useRouter();
  const [isBlurred, setIsBlurred] = useState(false);

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
        style={{ backgroundImage: "url('/back00.png')", margin:"0px"}}
      />
      <img
        className="absolute sm:left-[29%] bottom-[0px] -z-[10] left-0"
        src="/girl2.png"
        alt="Featured Product"
        width="500px"
        height="500px"
      />
      
        <div className="flex flex-col items-center justify-center space-y-24">
          {/* 
           */}
          <div className="relative w-[50%]" >
        <img
          className="absolute top-[-330px] left-[370px] scale-[0.50] mt-7 hover:scale-[0.65] transition duration-300 z-10"
          src="/box.png"
          alt="Featured Product"
          width="100%"
          height="500px"
        />
        <h1 className="absolute w-[80%] top-[-290px] left-[400px] text-3xl font-gloria text-left text-gray-800 bg-white p-4 rounded-xl shadow-xl transition hover:scale-105">
            {props.title}
          </h1>
          <p className="absolute top-[-100px]  left-[-345px] w-[50%] text-2xl font-medium text-gray-800 bg-white p-4 rounded-xl shadow-xl transition hover:scale-105">
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
      <div className="pt-40 bg-white" >
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {props?.feature1?.title}
        </h2>
        <p className="text-gray-500">{props?.feature1?.content}</p>
        <dd className="mt-2 text-sm text-gray-500 flex flex-row py-8 w-[85%]">
                <img
                  src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/us.svg"
                  alt="Bandera de Estados Unidos"
                  className="h-[120px] w-[120px] object-contain mx-auto transition hover:scale-125"
                  loading="lazy"
                  title="USA"
                />
                <img
                  src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/jp.svg"
                  alt="Bandera de Japon"
                  className="h-[120px] w-[120px] object-contain mx-auto transition hover:scale-125"
                  loading="lazy"
                  title="Japan"
                />
                <img
                  src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/es.svg"
                  alt="Bandera de España"
                  className="h-[120px] w-[120px] object-contain mx-auto transition hover:scale-125"
                  loading="lazy"
                  title="Spain"
                />
                <img
                  src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/mx.svg"
                  alt="Bandera de México"
                  className="h-[120px] w-[120px] object-contain mx-auto transition hover:scale-125"
                  loading="lazy"
                  title="Mexico"
                />
              </dd>
        </div>
    </div>
  );
};

export default ProductFeatures;
