import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const VideoCardYoutube = ({ video }) => {
  const details = video[0]?.details;
  const youtubeUrl = video[0]?.details.youtube_id;
  const router = useRouter();
  const videoLink = "https://www.youtube.com/watch?v=" + youtubeUrl;

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
              scheme: "youtube://" + youtubeUrl, // Esquema de la aplicación de YouTube en iOS
            },
            android: {
              scheme: "vnd.youtube:" + youtubeUrl, // Esquema de la aplicación de YouTube en Android
            },
          });
        } else {
          window.open(videoLink, "_blank");
        }
      }
    };
    handleOpenYouTubeApp();
  }, [videoLink, youtubeUrl]);

  return (
    <div className="flex flex-col  content-center justify-center items-center h-screen">
      <div
        style={{ width: "auto" }}
        className="md:flex-row scale-[100%] transition hover:md:scale-[105%] flex-col flex x-w-lg bg-gray-100 rounded-lg overflow-hidden shadow-lg items-center content-center self-center"
      >
        <div className="items-center justify-self-center bg-red-400 justify-center rounded-lg">
          <iframe
            className=""
            width="500px"
            height="251px"
            src={"https://www.youtube.com/embed/" + youtubeUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{details?.title}</h3>
          <p className="text-gray-700 mb-4">{details?.description}</p>
          <Link
            href={videoLink && videoLink}
            className="inline-block bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Ver en App
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoCardYoutube;
