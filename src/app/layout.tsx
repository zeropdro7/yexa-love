import type { Metadata } from 'next'
import { Great_Vibes, Press_Start_2P, Roboto } from 'next/font/google'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'
import './globals.css'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

const greatVibes = Great_Vibes({
  variable: '--font-great-vibes',
  subsets: ['latin'],
  weight: '400',
})

const pressStart2P = Press_Start_2P({
  variable: '--font-press-start',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'YxaLov - 💕 Blog de Amor',
  description:
    'Para ti mi vida! Un blog lleno de amor, fechas especiales y momentos mágicos juntos.',
  keywords: [
    'amor',
    'romance',
    'blog',
    'fechas especiales',
    'kawaii',
    'anime',
  ],
  authors: [{ name: 'Pdro', url: 'https://yxalov.com' }],
  openGraph: {
    title: 'YxaLov - 💕 Blog de Amor',
    description:
      'Para ti mi vida! Un blog lleno de amor, fechas especiales y momentos mágicos juntos.',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`
          ${roboto.variable} ${greatVibes.variable} ${pressStart2P.variable} antialiased min-h-screen 
          flex flex-col bg-gradient-to-br from-kawaii-lavender/5 via-white to-turquoise-light/5 font-sans
        `}
        style={{
          fontFamily: 'var(--font-roboto), system-ui, sans-serif',
        }}
      >
        <Header />
        <main className="flex-1 pt-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
