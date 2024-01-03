
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saadat Ali',
  description: 'Portfolio website for Saadat Ali',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-[#121212] mx-0 px-0' lang="en">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;700&display=swap" />
      </head>
      <body suppressHydrationWarning className={inter.className}>{children}</body>
    </html>
  )
}
