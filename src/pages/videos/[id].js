import { serializeModel } from "@aws-amplify/datastore/ssr";
import { DataStore, Amplify, withSSRContext } from "aws-amplify";
import { Video } from "@/models";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import VideoCardYoutube from "@/components/VideoCardYoutube";

export async function getStaticPaths({ req }) {
  const SSR = withSSRContext({ req });
  const videos = await SSR.DataStore.query(Video);
  const paths = videos.map((video) => ({ params: { id: video.video_id } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const SSR = withSSRContext({ context });
  // Obtener el recurso correspondiente al ID dado en la ruta
  const video = await SSR.DataStore.query(Video, (v) =>
    v.video_id.eq(context.params.id)
  );
  return {
    props: {
      video: serializeModel(video),
    },
  };
}

export default function VideoQR({ video }) {
  return <VideoCardYoutube video={video} />;
}
