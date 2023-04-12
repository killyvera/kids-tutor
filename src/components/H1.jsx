import { useEffect, useState } from "react";

const H1 = ({ children }) => {
  const [fontSize, setFontSize] = useState("4xl");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setFontSize("3xl");
      } else if (window.innerWidth < 1024) {
        setFontSize("4xl");
      } else {
        setFontSize("5xl");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <h1 className={`mx-9 text-center text-4xl md:text-${fontSize} font-bold my-14 text-gray-100`}>
      {children}
    </h1>
  );
};

export default H1;
