import { useEffect } from "react";
import { useRouter } from "next/router";

const TestPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Obtén el enlace actualizado del video desde la API de AppSync
    // Reemplaza con tu enlace actualizado

    // Redirige al usuario al enlace del video en YouTube
    const redirectToYouTube = () => {
      if (typeof window !== "undefined") {
        const isMobile =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        const videoLink = `leIK1aUOF-Q&ab`; // Reemplaza con tu propio enlace del video

        if (isMobile) {
          window.location.href = `youtube://watch?v=${videoLink}`;
        } else {
          window.location.href = `https://www.youtube.com/watch?v=${videoLink}`;
        }
      }
    };

    router.push("/");

    // Llama a la función redirectToYouTube cuando sea necesario, por ejemplo, cuando se escanea el código QR
    redirectToYouTube();
  }, [router]);

  return null; // Opcional: Puedes devolver null si no necesitas renderizar ningún contenido en esta página en particular
};

export default TestPage;
