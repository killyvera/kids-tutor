import { useState } from "react";
import ReactPlayer from "react-player";


const YoutubeBackground = () => {
  const [loading, setLoading] = useState(true);
  const videoUrl = "https://www.youtube.com/watch?v=VkBnNxneA_A"; // Inserta aquí el ID del video de YouTube

  const handleVideoReady = () => {
    setLoading(false);
  };

  return (
    <div className="relative h-screen">
      {loading && (
        <div className="absolute top-0 left-0 h-full w-full">
        </div>
      )}
      <ReactPlayer
        url={videoUrl}
        playing={true}
        muted={true}
        loop={true}
        width="100%"
        height="100%"
        onReady={handleVideoReady}
      />
      <div className="absolute top-0 left-0 w-full h-full z-10">
        {/* Aquí puedes agregar contenido sobre el video, como un título o un botón de call to action */}
      </div>
    </div>
  );
};

export default YoutubeBackground;
