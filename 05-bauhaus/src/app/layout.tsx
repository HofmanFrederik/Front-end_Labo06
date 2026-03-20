import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Bauhaus',
  description: 'My 500',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/evg5gjn.css" />
      </head>
      <body className="">{children}</body>
    </html>
  )
}
