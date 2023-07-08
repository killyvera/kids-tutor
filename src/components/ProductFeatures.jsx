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
      <div
        className={` inset-0 bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: "url('/productfeaturesbkg.png')",
          marginTop: "55px",
          height:"500px"
        }}
      />
      <div className="relative flex flex-row items-center justify-center">
        <img
          className="scale-75 mt-7 hover:scale-[0.82] transition duration-300"
          src="/logoFull.png"
          alt="Logo"
          width="300px"
          height="300px"
        />
        <h1 className="text-4xl text-white text-center font-gloria">
          {props.title}
        </h1>
        <div className="mt-8 bg-red-400 bg-opacity-10 backdrop-filter backdrop-blur-[2px]">
          <p className="bg-transparent text-2xl font-medium text-white text-center px-8">
            {props.subtitle}
          </p>
        </div>
        <div className="flex justify-center mt-8">
          {/* <img className="hover:scale-x-105 hover:scale-y-105 transition duration-300" src="/acreditationImage1.png" alt="Accreditation" width="90px" height="90px" />
          <img className="hover:scale-x-105 hover:scale-y-105 transition duration-300" src="/acreditationImage2.png" alt="Accreditation" width="90px" height="90px" />
          <img className="hover:scale-x-105 hover:scale-y-105 transition duration-300" src="/acreditationImage3.png" alt="Accreditation" width="139px" height="90px" /> */}
        </div>
        <button
          className="scale-75 transition hover:scale-100 px-6 text-2xl lg:px-20 lg:text-3xl font-bold rounded p-3 text-gray-100 bg-blue-500 hover:bg-blue-400 mt-1"
          onClick={() => router.push("/products")}
        >
          {props.button}
        </button>
      </div>
    </div>
  );
};

export default ProductFeatures;
