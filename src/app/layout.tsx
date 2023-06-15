import './globals.css'
import { Inter } from 'next/font/google'

import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import ControlBar from '@/components/controlBar/controlBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'caldayham.com',
  description: 'Primary source of public information about Cal Day Ham.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>

        <ControlBar />
        <Navbar />
        <div className='page'>
        {children}
        </div>
        <Footer />

        </div>
      </body>      
    </html>
  )
}
