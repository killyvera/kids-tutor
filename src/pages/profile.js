import H1 from "@/components/H1";
import React, { useEffect } from "react";
import Image from "next/image";
import { Auth } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import MyAuth from "@/components/MyAuth";

const Profile = ({ user, email, avatar }) => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      // Redirigir al usuario a la página principal
      router.push("/");
    } catch (error) {
      console.log("Error al cerrar sesión:", error);
    }
  };

  return (
    <MyAuth>
      <div className="">
        <H1>Welcome, Jhon Doe.</H1>
        <div className="bg-white text-center py-12" style={{ padding: "40px" }}>
          <div className="mt-3 overflow-hidden flex flex-col justify-center items-center py-4">
            <Image
              className="inline-block rounded-full ring-2 bg-red-400 ring-white"
              src={"/liverpool.png"}
              alt={"user avatar"}
              width={80}
              height={80}
            />
            <h2 className="font-semibold text-3xl space-x-4">
              Jhon Doe
            </h2>
            <div
              className="flex flex-row space-x-1"
              style={{ paddingTop: "10px", paddingBottom: "10px" }}
            >
              <button className={styleButton}>
                Mis Compras
              </button>
              <button onClick={handleSignOut} className={styleButton}>
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </MyAuth>
  );
};

export default Profile;

const styleButton =
  " bg-blue-500 block lg:inline-block lg:mt-0 text-white transition duration-50 hover:scale-125 hover:bg-[#5197ff] hover:px-2 rounded font-semibold hover:shadow-sm px-2 py-1 text-base";
