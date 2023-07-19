import { Auth } from "aws-amplify";
import { useRouter } from 'next/router';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      // Redireccionar a la página de inicio de sesión o a otra página deseada
      router.push("/login");
    } catch (error) {
      console.log("Error al cerrar sesión:", error);
    }
  };

  return (
    <button
      onClick={() => handleLogout()}
      className={styleButton}
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;

const styleButton =
  "bg-red-500 block mt-4 lg:inline-block lg:mt-0 text-white transition duration-50 hover:scale-125 mr-4 hover:bg-red-600 hover:px-2 rounded font-semibold hover:shadow-sm px-2 py-1 text-base";