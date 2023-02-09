import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />  
    </Head>
    <body className='bg-[#F8F9FA]'>
      <Main />
      <NextScript />
    </body>
  </Html>
  )
}
