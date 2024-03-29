import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextWithLinks from "@/utils/TextWithLinks";

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

const H1 = ({ children, subtitle }) => {
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
      transition={{ duration: 0.5 }}
      className={`mx-9 text-center text-4xl md:text-${fontSize} font-bold text-gray-100`}
      style={{marginTop: "60px"}}
    >
      {children}
      <p className="text-lg font-light pt-4 pb-4">{subtitle}</p>
    </motion.h1>
  );
};

export default H1;
