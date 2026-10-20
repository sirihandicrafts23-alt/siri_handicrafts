"use client"

import DasAvatar from "@/components/das_avatar/DasAvatar"
import HeroComponent from "@/components/hero/Hero"
import Link from "next/link"
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
        <footer className="relative w-full border-t border-primary/20 bg-black py-8 text-center text-white">
          <div className="flex w-full flex-row justify-center gap-2 p-2 align-middle font-serif text-sm text-neutral-400">
            <span className="italic">Developed by: </span>
            <Link
              href={`https://wa.me/+919701732388?text="Hello!, I saw you build siri handicrafts website, texted you to consult for my business. let's discuss."`}
              aria-label="contact vijay on whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600"
            >
              <p>Srirangam Vijay Mohan</p>
            </Link>
          </div>
          <p className="font-serif text-sm text-neutral-400">
            © {new Date().getFullYear()} Siri Handicrafts. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  )
}
