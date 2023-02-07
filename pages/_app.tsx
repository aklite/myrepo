import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"
import { seo } from '@/lib/seo'
export default function App({ Component, pageProps }:AppProps) {
  return (
    <>
    <DefaultSeo {...seo}/>
    <Component {...pageProps} />
    </>
  )
  
  
}
