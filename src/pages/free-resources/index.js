import Head from 'next/head'
import Image from 'next/image'
import MyNavBar from '@/components/MyNavBar'
import H1 from '@/components/H1'
import MyFooter from '@/components/MyFooter'
import MyResources from '@/components/MyResources'

import { DataStore, withSSRContext } from 'aws-amplify'
import { Resources } from '@/models'
import { serializeModel } from '@aws-amplify/datastore/ssr';
import Layout from '@/components/Layout'

export async function getServerSideProps() {
  const { DataStore } = withSSRContext();
  const resourceList = await DataStore.query(Resources);

  return {
    props: {
      resourceList: serializeModel(resourceList)
    },
  };
}

export default function FreeResources({resourceList}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ textAlign: '-webkit-center' }} className='' >
        <Layout>
        <H1>Descarga contenido exclusivo gratis.</H1>
        <MyResources resourceList={resourceList} />
        </Layout>
      </main>
    </>
  )
}
