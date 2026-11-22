import type { Metadata } from "next"
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server"
import { ConvexClientProvider } from "./ConvexClientProvider"
import { cn } from "@/lib/utils"
import AppShell from "@/components/AppShell"

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
// Amruta@23#Artist$
export const metadata: Metadata = {
  title: "Siri Handicrafts",
  description: "Handcrafted traditional art and wooden reliefs",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
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
          <ConvexClientProvider>
            <ThemeProvider>
              <AppShell>{children}</AppShell>
            </ThemeProvider>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  )
}
