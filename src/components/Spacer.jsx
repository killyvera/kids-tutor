import React from 'react';

const Spacer = ({ altura }) => {
  console.log(altura)
  return <div  style={{minHeight: altura}} className={'w-full'}></div>;
}

export default Spacer;
