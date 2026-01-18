// import type React from "react"
// import type { Metadata } from "next"
// // import { Geist, Geist_Mono } from "next/font/google"
// import { GeistSans } from "@vercel/geist/font/sans"

// import { Analytics } from "@vercel/analytics/next"
// import { GeistSans } from '@vercel/geist/font/sans'
// import { LanguageProvider } from "@/components/language-context"pnpm r
// import "./globals.css"

// const _geist = Geist({ subsets: ["latin"] })
// const _geistMono = Geist_Mono({ subsets: ["latin"] })


import type { Metadata } from "next"
import { GeistSans } from "@vercel/geist/font/sans"
import "./globals.css"
import { LanguageProvider } from "@/components/language-context"
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  title: "Paulo Manzano - Blockchain Developer",
  description: "Portfolio of Paulo Manzano, a blockchain developer transitioning to Web3",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
