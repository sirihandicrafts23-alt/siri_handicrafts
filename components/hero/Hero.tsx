import Image from "next/image"
import { Button } from "../ui/button"

function HeroComponent() {
  return (
    <div className="relative min-h-dvh w-full overflow-hidden">
      {/* Desktop Image (visible >= 640px) */}
      <Image
        src="/hero/hero_desktop.png"
        alt="Srirangam Amruta siri handicrafts desktop"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-center sm:block"
      />

      {/* Mobile Image (hidden >= 640px) */}
      <Image
        src="/hero/hero_mobile.png"
        alt="Srirangam Amruta siri handicrafts mobile"
        fill
        priority
        sizes="90vw"
        className="block object-cover object-center sm:hidden"
      />

      {/* Dark Overlay (optional tint over the background image) */}
      <div className="absolute inset-0 z-5 bg-black/40" />

      {/* Page Content */}
      {/* <div className="z-10 flex min-h-dvh flex-col items-center justify-center p-6 text-8xl text-red-500">
        rtrwetetert
      </div> */}
    </div>
  )
}

export default HeroComponent
