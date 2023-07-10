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
      className="inline-block px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
