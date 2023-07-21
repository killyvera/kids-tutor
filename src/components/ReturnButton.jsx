import React from "react";
import Link from "next/link";

export const Return = (color) => {
  const background = color ==="pink"? "bg-red-400 " : "bg-blue-500 hover:bg-blue-400";
  return (
    <Link href={"/"}>
      <div
        className={
          background + "shadow-xl p-[5px] mr-3 ml-2 rounded-full w-[40px] h-[40px] scale-100 transition hover:scale-[117%]"
        }
      >
        <img src="/back_arrow.jpg" className="w-[100%]" />
      </div>
    </Link>
  );
};
