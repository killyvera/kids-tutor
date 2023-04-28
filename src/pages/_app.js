import '@/styles/globals.css'
import '../styles/globals.css';
import { Amplify } from 'aws-amplify'
import awsexports from 'src/aws-exports.js'

Amplify.configure(awsexports)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
