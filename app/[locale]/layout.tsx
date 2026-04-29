import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import '../globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ignacio Biran | Frontend Developer',
  description:
    'Frontend Developer specializing in React, TypeScript, and Next.js. Building microfrontends and scalable web applications. Based in Argentina.',
  keywords: [
    'Ignacio Biran',
    'Frontend Developer',
    'React Developer',
    'TypeScript',
    'Next.js',
    'Web Developer Argentina',
    'Microfrontends',
    'Software Engineer'
  ],
  authors: [{ name: 'Ignacio Biran', url: 'https://github.com/NBN7' }],
  creator: 'Ignacio Biran',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Ignacio Biran | Frontend Developer',
    description:
      'Frontend Developer specializing in React, TypeScript, and Next.js. Building microfrontends and scalable web applications.',
    siteName: 'Ignacio Biran'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ignacio Biran | Frontend Developer',
    description:
      'Frontend Developer specializing in React, TypeScript, and Next.js. Building microfrontends and scalable web applications.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: { url: '/icon.svg', type: 'image/svg+xml' }
  }
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  return (
    <html lang={locale} className='dark bg-background'>
      <body className='font-sans antialiased bg-background text-foreground min-h-dvh'>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
