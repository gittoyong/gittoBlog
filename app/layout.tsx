/**
 * 전역 레이아웃을 정의하며, 페이지 전환 시에도 변경되지 않는 고정된 UI 설정 가능
 * NavigationBar 및 Footer, SideBar와 같은 공통 UI 요소들을 레이아웃에 정의
 */
import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { themeEffect } from 'utils/themeEffect'
import siteConfig from '../config/siteInfo'

/**
 * SEO 및 페이지의 메타 데이터 설정
 */
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.siteTitle,
    template: '%s',
  },
  description: 'Gitto, Blog, Next.js, TypeScript, JavaScript, React.js, Web Development, Programming',
  keywords: 'Next.js, TypeScript, JavaScript, React.js, Web Development, Programming',
  openGraph: {
    title: 'Gitto Blog',
    description: 'Gitto, Blog, Next.js, TypeScript, JavaScript, React.js, Web Development, Programming',
    url: baseUrl,
    siteName: 'Gitto Blog',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <meta name="google-site-verification" content="DkRp3QRLLad16lBEfQb3v-0zfzwkoqHGKnrocNv5TQQ" />
        <meta name="naver-site-verification" content="e18e318fd7ea9d66c56b73d79246196133e783f8" />
        <script dangerouslySetInnerHTML={{ 
          __html: `
          (${themeEffect.toString()})()
        `}}/>
      </head>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          {/** 웹 성능 및 사용자 경험 태그*/}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
