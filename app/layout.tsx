"use client"

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Header from "@/components/header/Header"
import { Fragment, useEffect, useState } from "react"
import InitialLoad from "@/components/Loading/IntialLoad"
import { Great_Vibes } from "next/font/google"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isLogoLoading, setIsLogoLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLogoLoading(false)
    }, 2500)
  }, [])
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        greatVibes.variable
      )}
    >
      <body>
        <ThemeProvider>
          {isLogoLoading ? (
            <InitialLoad />
          ) : (
            <Fragment>
              <Header />
              {children}
            </Fragment>
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}
