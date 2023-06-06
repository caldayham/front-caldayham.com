import './globals.css'
import { Inter } from 'next/font/google'

import Footer from '@/components/footer/Footer.ui'
import Navbar from '@/components/navbar/Navbar.ui'

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

        <Navbar />
        {children}
        <Footer />

        </div>
      </body>      
    </html>
  )
}
