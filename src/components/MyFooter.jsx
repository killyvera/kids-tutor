import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import Link from "next/link";

export default function MyFooter() {
  return (
    <footer style={{ backgroundColor: "#de6868" }}>
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src="/logoFull.png"
              className="h-12 mr-3"
              alt="Kids Tutor Logo"
            />
            <span className="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Kids Tutor
            </span>
          </Link>
          <ul>
            <SocialMediaIcons />
          </ul>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0">
            <Link href="/" className="mr-4 hover:underline md:mr-6 ">
              Home
            </Link>
            <Link href="/products" className="mr-4 hover:underline md:mr-6 ">
              Productos
            </Link>
            <Link
              href="/free-resources"
              className="mr-4 hover:underline md:mr-6 "
            >
              Recursos Gratis
            </Link>
            <Link href="/contact" className="mr-4 hover:underline md:mr-6 ">
              Contacto
            </Link>
          </ul>
          <ul>
            <Link
              href={"/privacy-policy"}
              className="text-white mr-4 hover:underline text-sm"
            >
              Política de Privacidad
            </Link>
            <Link
              href={"/terms-and-conditions"}
              className="text-white mr-4 hover:underline text-sm"
            >
              Terminos y condiciones
            </Link>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto  lg:my-8" />
        <span className="block text-sm  sm:text-center text-gray-100">
          © 2023{" "}
          <a href="https://kidstutor.co/" className="hover:underline">
            Kids Tutor™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
