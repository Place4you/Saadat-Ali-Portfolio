
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import './globals.css'

export const metadata = {
  title: 'Saadat Ali',
  description: 'Portfolio website for Saadat Ali',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-[#121212] px-6 mx-6' lang="en">
      <head>
      <link rel="stylesheet" href="./globals.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;700&display=swap" />
      </head>
      <body suppressHydrationWarning className={inter.className}>{children}</body>
    </html>
  )
}
