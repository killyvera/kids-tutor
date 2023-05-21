import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

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
    <motion.h1
    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    transition={{duration: 0.5}}
      className={`mx-9 text-center text-4xl md:text-${fontSize} font-bold text-gray-100 my-20`}
    >
      {children}
    </motion.h1>
  );
};

export default H1;
