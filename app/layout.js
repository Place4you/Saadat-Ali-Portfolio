
import { Inter } from 'next/font/google'
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saadat Ali',
  description: 'Portfolio website for Saadat Ali',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-[#121212] px-6 mx-6' lang="en">
      <head>
      <Head> 
      <link rel="stylesheet" href="../app/globals.css" /></Head>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;700&display=swap" />
      </head>
      <body suppressHydrationWarning className={inter.className}>{children}</body>
    </html>
  )
}
