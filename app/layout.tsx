import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yiğit Tilaver - AI & Machine Learning Engineer Portfolio',
  description: 'Personal portfolio of Yiğit Tilaver, an AI and Machine Learning Engineer specializing in Python, TensorFlow, PyTorch, and Data Science.',
  keywords: [
    'Yiğit Tilaver', 
    'Portfolio', 
    'AI Engineer', 
    'Machine Learning', 
    'Deep Learning', 
    'Data Science', 
    'Python Developer', 
    'TensorFlow', 
    'PyTorch', 
    'Istanbul Technical University'
  ],
  authors: [{ name: 'Yiğit Tilaver', url: 'https://github.com/Yigit033' }],
  creator: 'Yiğit Tilaver',
  publisher: 'Yiğit Tilaver',
  icons: {
    icon: [
      { url: '/icon.svg' },
    ],
    apple: [
      { url: '/icon.svg' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yigittilaver.dev',
    siteName: 'Yiğit Tilaver Portfolio',
    title: 'Yiğit Tilaver - AI & Machine Learning Engineer',
    description: 'Personal portfolio of Yiğit Tilaver, an AI and Machine Learning Engineer specializing in Python, TensorFlow, PyTorch, and Data Science.',
    images: [
      {
        url: '/projects/profile-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Yiğit Tilaver',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yiğit Tilaver - AI & Machine Learning Engineer',
    description: 'Personal portfolio of Yiğit Tilaver, an AI and Machine Learning Engineer specializing in Python, TensorFlow, PyTorch, and Data Science.',
    images: ['/projects/profile-photo.jpg'],
    creator: '@yigittilaver',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://yigittilaver.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 to-black text-white min-h-screen`}>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <main className="min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}