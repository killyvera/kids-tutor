import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const TestPage = () => {
  const router = useRouter();
  const videoLink =
    "https://www.youtube.com/watch?v=01LfI8Z7iec&ab_channel=RenzDagzTV";

  useEffect(() => {
    const handleOpenYouTubeApp = () => {
      if (typeof window !== "undefined") {
        const isMobile =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );

        if (isMobile) {
          const AppDeepLink = require("app-deep-link");
          AppDeepLink.wakeUpOrInstall({
            ios: {
              scheme: "youtube://", // Esquema de la aplicación de YouTube en iOS
            },
            android: {
              scheme: "vnd.youtube:", // Esquema de la aplicación de YouTube en Android
            },
          });
        } else {
          window.open(videoLink, "_blank");
        }
      }
    };

    handleOpenYouTubeApp();
  }, []);

  return (
    <div className="flex flex-row content-center justify-center items-center h-screen bg-white">
      <div className=" w-[300px] flex flex-row max-w-lg rounded-lg overflow-hidden shadow-lg items-center content-center self-center">
        <div className="w-[70%] items-center justify-self-center">
          <img
            src="/logoFull.png"
            alt="Video Capture"
            className="w-[100px] h-[100px]"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Título del Video</h3>
          <p className="text-gray-700 mb-4">Descripción del video</p>
          <Link
            href={videoLink}
            className="inline-block bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Ver Video
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
