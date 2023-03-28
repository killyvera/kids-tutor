import React from 'react';

const MyHeading = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <h5
      className="transition-all duration-500 ease-in-out transform hover:opacity-75 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ opacity: isHovered ? 0.75 : 1 }}
    >
      Este es mi encabezado
    </h5>
  );
};

export default MyHeading;
