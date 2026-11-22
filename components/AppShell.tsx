"use client"

import { Fragment, useEffect, useState } from "react"
import Header from "@/components/header/Header"
import InitialLoad from "@/components/Loading/IntialLoad"
import SocialsFloater from "@/components/social/Socials"

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isLogoLoading, setIsLogoLoading] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogoLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLogoLoading) {
    return <InitialLoad />
  }

  return (
    <Fragment>
      <Header />
      {children}
      <SocialsFloater />
    </Fragment>
  )
}
