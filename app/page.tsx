"use client"

import DasAvatar from "@/components/das_avatar/DasAvatar"
import HeroComponent from "@/components/hero/Hero"
import Link from "next/link"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      {/* Pinned Hero behind everything */}
      <div className="fixed inset-0 z-0 flex min-h-dvh w-full flex-col">
        <HeroComponent />
      </div>

      {/* 1 Viewport Spacer */}
      <div className="pointer-events-none h-dvh w-full" />

      {/* Content wrapper flying OVER the hero (must have solid bg-black) */}
      {/* Any Additional components only need to be added in below div */}
      <div className="relative z-10 w-full shadow-2xl">
        {/* DasAvatar blurs the fixed hero beneath it */}
        <DasAvatar />
        <Footer />
      </div>
    </>
  )
}
