import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import {
  POS_DEFAULT_DESCRIPTION,
  POS_META_KEYWORDS,
  POS_OG_DESCRIPTION,
  POS_SITE_NAME,
} from '@/lib/pos-seo'
import { CLICKMASTERS_SITE_URL } from '@/lib/site-config'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(CLICKMASTERS_SITE_URL),
  title: {
    default: `${POS_SITE_NAME} | Cloud POS & Point of Sale Software`,
    template: `%s | ${POS_SITE_NAME}`,
  },
  description: POS_DEFAULT_DESCRIPTION,
  keywords: [...POS_META_KEYWORDS],
  authors: [{ name: 'ClickMasters' }],
  category: 'business',
  openGraph: {
    url: CLICKMASTERS_SITE_URL,
    title: `${POS_SITE_NAME} — Retail & Restaurant POS Software`,
    description: POS_OG_DESCRIPTION,
    siteName: POS_SITE_NAME,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${POS_SITE_NAME} | Point of Sale for Every Industry`,
    description: POS_OG_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
