import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Auth } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
import MyAuth from "./MyAuth";
import { motion } from "framer-motion";

const MyNavBar = ({ allProducts, total }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleMenuClick = () => setShowMenu(!showMenu);

  return (
    <>
      <Cart visible={visible} />
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
          <Image
            width={"100"}
            height={"32"}
            src="/logo.png"
            alt="Logo"
            className="w-32"
          />
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
            <Link
              href="/"
              className="text-lg block mt-4 lg:inline-block lg:mt-0 text-white transition duration-50 hover:scale-125 mr-4 hover:bg-blue-500 hover:px-2 rounded-xl"
            >
              Home
            </Link>
            <Link
              href="/free-resources"
              className="text-lg block mt-4 lg:inline-block lg:mt-0 text-white transition duration-50 hover:scale-125 mr-4 hover:bg-blue-500 hover:px-2 rounded-xl"
            >
              Recursos Gratuitos
            </Link>
            <Link
              href="/products"
              className="text-lg block mt-4 lg:inline-block lg:mt-0 text-white transition duration-50 hover:scale-125 mr-4 hover:bg-blue-500 hover:px-2 rounded-xl"
            >
              Productos
            </Link>
            <Link
              href="https://www.youtube.com/@kidstutorstem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg block mt-4 lg:inline-block lg:mt-0 text-white transition duration-50 hover:scale-125 mr-4 hover:bg-blue-500 hover:px-2 rounded-xl"
            >
              Youtube
            </Link>
            <Link
              href="/blog"
              className="text-lg block mt-4 lg:inline-block lg:mt-0 text-white transition duration-50 hover:scale-125 mr-4 hover:bg-blue-500 hover:px-2 rounded-xl"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-lg block mt-4 lg:inline-block lg:mt-0 text-white transition duration-50 hover:scale-125 mr-4 hover:bg-blue-500 hover:px-2 rounded-xl"
            >
              Contactanos
            </Link>
          </div>
          <div className="flex">
            {authStatus === "authenticated" ? (
              <>
                <Image
                  width={"24"}
                  height={"24"}
                  src="/cart.png"
                  alt="Cart"
                  className=" w-6 mx-4 block mt-4 lg:inline-block lg:mt-0 text-white transition hover:scale-125 mr-4"
                  onClick={() => onClose(setVisible, visible)}
                />
                <Image
                  width={"24"}
                  height={"24"}
                  src="/user.png"
                  alt="User"
                  className=" w-6 mx-4 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                />
              </>
            ) : (
              <p className="mx-4 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                <Link href={"/login"}>Acceder / Registrate </Link>{" "}
              </p>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

const onClose = (setVisible, visible) => {
  setVisible(!visible);
};

const Cart = ({ visible }) => {
  return (
    <motion.div
      className={`fixed z-50 top-12 right-0 flex flex-col`}
      initial={{ x: "100%" }}
      animate={{ x: visible ? 0 : "200%" }}
      transition={{ duration: 0.5 }}
    >
      <div>
      <h1 className="">Mi Carrito</h1>
      </div>
    </motion.div>
  );
};

export default MyNavBar;
