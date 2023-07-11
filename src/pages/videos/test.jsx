import { useEffect } from 'react';
import { useRouter } from 'next/router';

const TestPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Obtén el enlace actualizado del video desde la API de AppSync
    const videoLink = 'https://www.youtube.com/shorts/YFJavXZK2HU'; // Reemplaza con tu enlace actualizado

    // Redirige al usuario al enlace del video en YouTube
    const redirectToYouTube = () => {
      if (typeof window !== 'undefined') {
        window.open(videoLink, '_blank');
      }
    };
    router.push("/")

    // Llama a la función redirectToYouTube cuando sea necesario, por ejemplo, cuando se escanea el código QR
    redirectToYouTube();
  }, []);

  return null; // Opcional: Puedes devolver null si no necesitas renderizar ningún contenido en esta página en particular
};

export default TestPage;
