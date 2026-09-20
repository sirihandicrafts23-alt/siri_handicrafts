import { Button } from "@/components/ui/button"
import Link from "next/link"

function HeroPageContent() {
  return (
    <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center justify-center p-6 sm:bottom-35 sm:left-40">
      <Button
        variant="default"
        size="lg"
        className="cursor-pointer px-6 py-5 text-3xl opacity-90 shadow-lg transition-all duration-300 hover:opacity-100"
      >
        <Link
          href="/about"
          aria-label="Explore our story and handcrafted collections"
          className="font-serif text-xs tracking-widest uppercase hover:text-white sm:text-2xl"
        >
          Explore
        </Link>
      </Button>
    </div>
  )
}

export default HeroPageContent
