import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyNavBar from '@/components/MyNavBar'
import HeroResponsive from '@/components/HeroResponsive'
import MyColleges from '@/components/MyColleges'

import { Amplify, DataStore, withSSRContext } from 'aws-amplify'
import { serializeModel } from '@aws-amplify/datastore/ssr';
import awsexports from 'src/aws-exports.js'

import H1 from '@/components/H1'
import MyCallToAction from '@/components/MyCallToAction'
import MyProductFeatures from '@/components/MyProductFeatures'
import MyFooter from '@/components/MyFooter'
import MyTestimonials from '@/components/MyTestimonials'
import MyHeroResponsive2 from '@/ui-components/MyHeroResponsive2'
import { ProductCollection } from '@/ui-components'
import YoutubeBackground from '@/components/YoutubeBackground'
import Spacer from '@/components/Spacer'
import MyResources from '@/components/MyResources'
import MyPosts from '@/components/MyPosts'
import { BlogPost } from "../models";

Amplify.configure(awsexports)

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const { DataStore } = withSSRContext();
  const list = await DataStore.query(BlogPost);

  return {
    props: {
      list: serializeModel(list)
    },
  };
}

export default function Blog({list}) {
  console.log(list)
  return (
    <>
      <Head>
        <title>Kids Tutor Blog</title>
        <meta name="description" content="Kids Tutor educational kits for children" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ textAlign: '-webkit-center' }} className='' >
        <MyNavBar />
        <H1>Conoce la opinion de nuestros expertos.</H1>
        <MyPosts list={list}/>
        <MyFooter />
      </main>
    </>
  )
}
