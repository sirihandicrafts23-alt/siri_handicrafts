"use client"

import DasAvatar from "@/components/das_avatar/DasAvatar"
import HeroComponent from "@/components/hero/Hero"
import { Fragment } from "react/jsx-runtime"

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
      <div className="relative z-10 w-full shadow-2xl">
        {/* DasAvatar blurs the fixed hero beneath it */}
        <DasAvatar />

        {/* Solid background can be placed on the footer */}
        <footer className="relative w-full border-t border-primary/20 bg-black py-12 text-center text-white">
          <p className="font-serif text-sm text-neutral-400">
            © {new Date().getFullYear()} Siri Handicrafts. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  )
}
