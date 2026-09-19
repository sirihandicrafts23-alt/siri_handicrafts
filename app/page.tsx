"use client"

import HeroComponent from "@/components/hero/Hero"

export default function Page() {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <div className="flex w-full flex-1 items-center justify-center bg-[#000000] text-center">
        <HeroComponent />
      </div>
    </div>
  )
}
