import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
// className={inter.className}

export const metadata = {
  title: 'Credit Card Wrapped',
  description: 'Spotify Wrapped but for your credit card transaction history',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-[400px] mx-auto">{children}</body>
    </html>
  )
}
