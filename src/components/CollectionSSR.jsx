import {serializeModel} from '@aws-amplify/datastore/ssr'
import { DataStore, Amplify, withSSRContext } from 'aws-amplify'
import { Colleges } from '@/models'; 

export default async function getStaticPhats() {
  return (
    <p>hi</p>

  )
}
