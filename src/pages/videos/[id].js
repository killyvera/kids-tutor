import { serializeModel } from "@aws-amplify/datastore/ssr";
import { DataStore, Amplify, withSSRContext } from "aws-amplify";
import { Video } from "@/models";

export async function getStaticPaths({ req }) {
  const SSR = withSSRContext({ req });
  const videos = await SSR.DataStore.query(Video);
  const paths = videos.map((video) => ({ params: { id: video.title } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const SSR = withSSRContext({ context });
console.log(context)
  // Obtener el recurso correspondiente al ID dado en la ruta
  const video = await SSR.DataStore.query(Video,);

  return {
    props: {
      video: serializeModel(video),
    },
  };
}

export default function video({ video }) {
  console.log(video);
  return <div className="mt-[150px]">{video[0].title}</div>;
}
