import { useEffect } from "react";
import { useRouter } from "next/router";
import MyAuth from "@/components/MyAuth";
import { useAuthenticator } from "@aws-amplify/ui-react";

function MyPage() {
  const router = useRouter();
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  useEffect(() => {
    authStatus === "authenticated" ? router.push("/") : console.log("error");
  }, [authStatus, router]);

  return (
    <MyAuth>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-green-500 p-4 rounded-md text-white text-center">
          ¡Inicio de sesión exitoso! Será redirigido en unos instantes...
        </div>
      </div>
    </MyAuth>
  );
}

export default MyPage;
