import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Auth } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
import MyAuth from "./MyAuth";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Button } from "@aws-amplify/ui-react";
import { Alert } from "@aws-amplify/ui-react";
import { useCartContext } from "@/context/CartContext";

import MyCart from "./MyCart";

const MyNavBar = ({ allProducts, total, signOut }) => {
  const { isCartOpen, toggleCart, cartItems, asset } = useCartContext();

  const [showMenu, setShowMenu] = useState(false);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      // Redirigir al usuario a la página principal
      useRouter.push("/");
    } catch (error) {
      console.log("Error al cerrar sesión:", error);
    }
  };

  const handleMenuClick = () => setShowMenu(!showMenu);
  // console.log(cartItems);
  // console.log(asset)
  return (
    <>
      <MyCart visible={visible} />
      <nav
        className="
                     bg-red-400
                        w-screen
                        z-40
                        p-3
                        flex
                        items-center
                        justify-between
                        flex-wrap
                        fixed
                        top-0
                        bg-opacity-70
                        backdrop-blur-[2px]
                        "
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href={"/"}>
            <Image
              width={"100"}
              height={"21"}
              src="/logo.png"
              alt="Logo"
              className="transition hover:scale-110"
            />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={handleMenuClick}
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          >
            <Image
              width={"24"}
              height={"24"}
              src="/hamburger.png"
              alt="Menu"
              className="w-6"
            />
          </button>
        </div>
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow text-center">
            <Link href="/" className={styleButton}>
              Home
            </Link>

            <Link href="/free-resources" className={styleButton}>
              Recursos Gratuitos
            </Link>
            <Link href="/products" className={styleButton}>
              Productos
            </Link>
            <Link
              href="https://www.youtube.com/@kidstutorstem"
              target="_blank"
              rel="noopener noreferrer"
              className={styleButton}
            >
              Youtube
            </Link>
            <Link href="/blog" className={styleButton}>
              Blog
            </Link>
            <Link href="/contact" className={styleButton}>
              Contactanos
            </Link>
          </div>
          <div className="">
          <div className="relative transition hover:scale-125">
                    {cartItems?.length >= 1 && (
                      <div className="bg-red-500 absolute h-4  w-4 text-white rounded-full shadow transition hover:scale-110 right-0 text-xs text-center justify-center">
                        {cartItems?.length}
                      </div>
                    )}
                    <Image
                      className="cursor-pointer"
                      width={"32"}
                      height={"32"}
                      src="/cart.png"
                      alt="Cart"
                      // className=" w-6 mx-4 block mt-4 lg:inline-block lg:mt-0 text-white transition hover:scale-125 mr-4"
                      onClick={() => toggleCart()}
                    />
                  </div>
            {authStatus === "authenticated" ? (
              <div className="flex flex-row">
                <div className="flex flex-row scale-75">

                  <Image
                    width={"32"}
                    height={"32"}
                    // maxHeight={"24px"}
                    src="/user.png"
                    alt="User"
                    // className=" w-6 mx-4 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                  />
                </div>
                <button
                  className="mr-4 bg-blue-500 text-white p-1 rounded transition hover:scale-110"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <p className="mx-4 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                <Link href={"/login"} className={styleButton}>
                  Acceder
                </Link>
                <Link href={"/login"} className={styleButton}>
                  Regístrarse
                </Link>
              </p>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNavBar;

const styleButton =
  "block mt-4 lg:inline-block lg:mt-0 text-white transition duration-50 hover:scale-125 mr-4 hover:bg-[#5197ff] hover:px-2 rounded font-semibold hover:shadow-sm px-2 py-1 text-base";
