import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Auth } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
import MyAuth from "./MyAuth";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useCartContext } from "@/context/CartContext";
import LanguageSelector from "@/components/LanguageSelector";
import MyCart from "./MyCart";
import { useTranslation } from "react-i18next";
import useOutsideClick from "@/utils/useOutsideClick";

const MyNavBar = () => {
  const { toggleCart, cartItems, getGlobalUser } = useCartContext();
  const [showMenu, setShowMenu] = useState(false);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [globalUser, setGlobalUser] = useState({});
  const componentRef = useRef(null);
  const menuRef = useRef(null);
  const refs = [componentRef, menuRef];
  const [visible, setVisible] = useState(false)


  const handleMenuClick = () => {
    console.log("click menu00", showMenu);
    setShowMenu(!showMenu);
    console.log("click menu01", showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
    console.log("LINK CLICK");
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    getGlobalUser()
      .then((user) => {
        setGlobalUser(user);
      })
      .catch((error) => {
        console.log("Error al obtener el perfil del usuario:", error);
      });
  }, [getGlobalUser]);

  const onClose = (event) => {
    // Verificar si el clic proviene del icono del menú hamburguesa
    if (event && componentRef.current && componentRef.current.contains(event.target)) {
      return;
    }
    setShowMenu(false);
    console.log("CLOSE MENU");
  };

  useOutsideClick(refs, onClose);

  return (
    <>
      <MyCart visible={visible} />
      <nav
        className="
                     bg-kids-tutor
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
            <Image width={"100"} height={"21"} src="/logo.png" alt="Logo" className="transition hover:scale-110" />
          </Link>
        </div>
        <div className="flex flex-row lg:hidden items-center">
          {/* <LanguageSelector /> */}
          <div className="relative transition scale-75 hover:scale-100 flex flex-row items-center">
            {cartItems?.length >= 1 && (
              <div className="bg-red-500 absolute h-4 w-4 text-white rounded-full shadow transition hover:scale-110 right-0 text-xs text-center justify-center">
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
            <Link href={"/profile"}>
              <Image
                className="cursor-pointer rounded-full h-[32px] w-[32px]"
                width={"32"}
                height={"32"}
                // maxHeight={"24px"}
                src={globalUser?.picture ? globalUser.picture : "/user.png"}
                alt="User"
                // className=" w-6 mx-4 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
              />
            </Link>
          </div>
        </div>
        <div className="block lg:hidden items-center">
          <button
            ref={componentRef}
            onClick={handleMenuClick}
            className="flex items-center px-[2px] py-[3px] border rounded text-white border-white hover:text-white hover:border-white"
          >
            <Image width={"24"} height={"24"} src="/hamburger.png" alt="Menu" className="w-6" />
          </button>
        </div>
        <div
          ref={menuRef}
          className={`${showMenu ? "block" : "hidden"} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow text-center">
            <NavLink href={"/"} onClick={handleLinkClick}>
              {t("home")}
            </NavLink>
            <NavLink href={"/free-resources"} onClick={handleLinkClick}>
              {t("free resources")}
            </NavLink>

            <NavLink href={"/products"} onClick={handleLinkClick}>
              {t("products")}
            </NavLink>
            <NavLink
              blank={true}
              href={"https://www.youtube.com/@kidstutorstem"}
              onClick={handleLinkClick}
            >
              {t("youtube")}
            </NavLink>
            <NavLink href={"/blog"} onClick={handleLinkClick}>
              {t("blog")}
            </NavLink>
            <NavLink href={"/contact"} onClick={handleLinkClick}>
              {t("contact")}
            </NavLink>
          </div>
          <div className="hidden lg:flex items-center ">
            {authStatus === "authenticated" && globalUser?.name && (
              <p className="text-gray-800 scale-75 font-semibold">
                ¡Hola, {globalUser?.name?.split(" ")[0]}!
              </p>
            )}

            <div className="relative transition scale-75 hover:scale-100">
              {cartItems?.length >= 1 && (
                <div className="bg-red-500 absolute h-4 w-4 text-white rounded-full shadow transition hover:scale-110 right-0 text-xs text-center justify-center">
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
                      src={globalUser?.picture ? globalUser.picture : "/user.png"}
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

const NavLink = ({ href, onClick, children, blank }) => {
  const router = useRouter(); // Obtener el objeto router
  const isActive = router.pathname === href; // Comprobar si la ruta actual coincide con la del link

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block mt-4 lg:inline-block lg:mt-0 text-white transition duration-50 hover:scale-125 mr-4 hover:bg-[#5197ff] hover:px-2 rounded font-semibold hover:shadow-sm px-2 py-1 text-base ${
        isActive ? "underline" : "" // Aplicar la clase 'underline' si isActive es verdadero
      }`}
      target={blank ? "_blank" : ""}
      rel={blank ? "noopener noreferrer" : ""}
    >
      {children}
    </Link>
  );
};

