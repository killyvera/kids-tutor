import { useEffect, useState } from "react";
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
import LanguageSelector from "@/components/LanguageSelector";
import MyCart from "./MyCart";
import { useTranslation } from "react-i18next";
import { Storage } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { Users } from "@/models";

const MyNavBar = ({ allProducts, total, signOut }) => {
  const { toggleCart, cartItems, getGlobalUser } = useCartContext();

  const [showMenu, setShowMenu] = useState(false);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [isFieldEdited, setIsFieldEdited] = useState(false);
  const [editableField, setEditableField] = useState(null);
  const [globalUser, setGlobalUser] = useState({});

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
  const { t, i18n } = useTranslation();
  // console.log(cartItems);
  // console.log(asset)
  useEffect(() => {
    getGlobalUser()
      .then((user) => {
        console.log(user);
        setGlobalUser(user);
      })
      .catch((error) => {
        console.log("Error al obtener el perfil del usuario:", error);
      });
  }, [getGlobalUser]);

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
        <div className="flex items-center flex-shrink-0 text-white">
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
        <div className="block sm:hidden">
          <LanguageSelector />
        </div>
        <div className="relative transition scale-75 hover:scale-100 block sm:hidden">
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
          <div className="flex flex-row sm:hidden">
            <div className="flex flex-row transition scale-75 hover:scale-100">
              <Image
                className="cursor-pointer rounded-full h-[32px] w-[32px]"
                width={"32"}
                height={"32"}
                // maxHeight={"24px"}
                src={globalUser?.picture ? globalUser.picture : "/user.png"}
                alt="User"
                // className=" w-6 mx-4 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
              />
            </div>
          </div>
        ) : (
          ""
        )}

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
              {t("home")}
            </Link>

            <Link href="/free-resources" className={styleButton}>
              {t("free resources")}
            </Link>
            <Link href="/products" className={styleButton}>
              {t("products")}
            </Link>
            <Link
              href="https://www.youtube.com/@kidstutorstem"
              target="_blank"
              rel="noopener noreferrer"
              className={styleButton}
            >
              {t("youtube")}
            </Link>
            <Link href="/blog" className={styleButton}>
              {t("blog")}
            </Link>
            <Link href="/contact" className={styleButton}>
              {t("contact")}
            </Link>
          </div>
          <div className="hidden lg:flex items-center ">
            {authStatus === "authenticated" && globalUser?.name && (
              <p className="text-gray-800 scale-75 font-semibold">
                ¡Hola, {globalUser?.name?.split(" ")[0]}!
              </p>
            )}

            <div className="relative transition scale-75 hover:scale-100">
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
                <div className="flex flex-row transition scale-75 hover:scale-100">
                  <Link href={"/profile"}>
                    <Image
                      className="cursor-pointer rounded-full shadow-xl h-[32px] w-[32px]"
                      width={"32"}
                      height={"32"}
                      // maxHeight={"24px"}
                      src={
                        globalUser?.picture ? globalUser.picture : "/user.png"
                      }
                      alt="User"
                      // className=" w-6 mx-4 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                    />
                  </Link>
                </div>
                {/* <button
                  className="mr-4 bg-blue-500 text-white p-1 rounded transition hover:scale-110"
                  onClick={handleSignOut}
                >
                  {t("sign out")}
                </button> */}
                <div className="relative pl-[75px]">
                  <div className="absolute right-4 top-1">
                    <LanguageSelector />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="mx-1 mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
                style={{ display: "flex" }}
              >
                <Link href={"/login"} className={styleButton}>
                  {t("log in")}
                </Link>
                <div className="relative pl-[75px]">
                  <div className="absolute right-4 top-1">
                    <LanguageSelector />
                  </div>
                </div>
                {/* <Link href={"/login"} className={styleButton}>
                {t("sig in")}
                </Link> */}
              </div>
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

export const avatarIcon = (src) => {
  return (
    <Link href={"/"}>
      <Image
        width={"100"}
        height={"21"}
        src={src ? src : "/logo.png"}
        alt="Logo"
        className="transition hover:scale-110"
      />
    </Link>
  );
};
