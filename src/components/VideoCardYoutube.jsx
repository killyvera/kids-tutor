import { useRouter } from "next/router";
import Link from "next/link";

const VideoCardYoutube = ({ video }) => {
  const router = useRouter();

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
            scheme: "youtube://" + youtubeUrl,
          },
          android: {
            scheme: "vnd.youtube:" + youtubeUrl,
          },
        });
      } else {
        window.open(videoLink, "_blank");
      }
    }
  };

  if (!video || video.length === 0) {
    // Manejar el caso de ruta incorrecta o video no encontrado
    return <NotFoundCard />;
  }

  const details = video[0]?.details;
  const youtubeUrl = video[0]?.details?.youtube_id;
  const videoLink = youtubeUrl
    ? "https://www.youtube.com/watch?v=" + youtubeUrl
    : null;

  return (
    <div className="flex flex-col content-center justify-center items-center h-screen">
      <div
        style={{ width: "auto" }}
        className="md:flex-row scale-[100%] transition hover:md:scale-[105%] flex-col flex x-w-lg bg-gray-100 rounded-lg overflow-hidden shadow-lg items-center content-center self-center"
      >
        <div className="items-center justify-self-center bg-red-400 justify-center rounded-lg">
          {youtubeUrl ? (
            <iframe
              className=""
              width="500px"
              height="251px"
              src={"https://www.youtube.com/embed/" + youtubeUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-500px h-251px bg-gray-300"></div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{details?.title}</h3>
          <p className="text-gray-700 mb-4">{details?.description}</p>
          <button
            className="inline-block bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition-colors"
            onClick={handleOpenYouTubeApp}
          >
            Ver en App
          </button>
        </div>
      </div>
    </div>
  );
};

const NotFoundCard = () => {
  const router = useRouter();

  const handleGoToHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col content-center justify-center items-center h-screen">
      <div className="bg-white max-w-lg w-full rounded-lg overflow-hidden shadow-lg items-center content-center self-center">
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">
            404 - Video no encontrado
          </h3>
          <p className="text-gray-700 mb-4">
            El video que estás buscando no existe.
          </p>
          <Link
            href="/"
            className="inline-block bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition-colors"
            onClick={handleGoToHome}
          >
            Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoCardYoutube;
