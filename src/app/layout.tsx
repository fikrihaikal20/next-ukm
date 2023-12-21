import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar'
import About from '../components/about'
import Footer from '../components/footer'
import Contact from '../components/contact'
import Members from '../components/members'
import Gallery from '../components/gallery'
import Activity from '../components/activity'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <About />
        <Activity />
        <Members />
        <Gallery />
        <Contact />
        <Footer />

        {children}
      </body>
    </html>
  )
}
