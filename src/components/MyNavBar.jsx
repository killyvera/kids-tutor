import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MyNavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => setShowMenu(!showMenu);

    return (
        <nav className="bg-blue-500 p-3 flex items-center justify-between flex-wrap">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image  width={'120'} height={'120'}  src="/logo.png" alt="Logo" className="w-32" />
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={handleMenuClick}
                    className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
                >
                    <Image  width={'24'} height={'24'} src="/hamburger.png" alt="Menu" className="w-6" />
                </button>
            </div>
            <div
                className={`${showMenu ? "block" : "hidden"
                    } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
                <div className="text-sm lg:flex-grow text-center ">
                    <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" >
                        Home
                    </Link>
                    <Link href="/recursos-gratuitos" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" >
                        Recursos Gratuitos
                    </Link>
                    <Link href="/comprar" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" >
                            Comprar
                    </Link>
                    <Link href="/youtube" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" >
                            Youtube
                    </Link>
                    <Link href="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" >
                            Blog
                    </Link>
                    <Link href="/contacto" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" >
                            Contactanos
                    </Link>
                </div>
                <div className="flex">
                    <Image width={'24'} height={'24'} src="/cart.png" alt="Cart" className=" w-6 mx-4 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" />
                    < Image width={'24'} height={'24'} src="/user.png" alt="User" className=" w-6 mx-4 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" />
                </div>
            </div>
        </nav>
    );
};

export default MyNavBar;