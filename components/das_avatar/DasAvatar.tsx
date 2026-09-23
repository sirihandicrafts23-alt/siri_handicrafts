"use client"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import TraditionalHeading from "../helpers/TraditionalHeading"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import { DASHAVATARA_DATA } from "./das_avatar_data"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

const TRANSACTION_DURATION: number = 3000

function DasAvatar() {
  return (
    <section className="relative z-10 flex w-full flex-col items-center overflow-hidden bg-black/40 py-12 backdrop-blur-xl">
      <TraditionalHeading className="pt-8 pb-12" />

      <Carousel
        plugins={[
          Autoplay({
            delay: TRANSACTION_DURATION,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative w-full max-w-7xl px-4 sm:px-12"
      >
        <CarouselContent className="-ml-4 py-4">
          {DASHAVATARA_DATA.map((i) => (
            <CarouselItem
              key={i.id + i.name}
              className="basis-full pl-4 opacity-100 sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/20 bg-black transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10">
                <CardContent className="relative aspect-10/11 w-full overflow-hidden bg-black p-0">
                  <Dialog>
                    {/* 1. Use asChild so the button spans 100% of CardContent for Image fill */}
                    <DialogTrigger
                      render={
                        <button
                          type="button"
                          className="relative block h-full w-full cursor-zoom-in text-left focus:outline-none"
                          aria-label={`View full size of ${i.name}`}
                        >
                          <Image
                            src={i.url}
                            alt={i.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </button>
                      }
                    />

                    {/* 2. Modal Content with full image display */}
                    <DialogContent className="max-w-2xl border border-primary/30 bg-black/95 p-4 text-white sm:max-w-3xl sm:p-6">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-xl tracking-wide text-foreground">
                          {i.name}
                          <span className="ml-2 font-serif text-sm font-normal text-primary">
                            ({i.sanskritName})
                          </span>
                        </DialogTitle>
                      </DialogHeader>

                      {/* 3. Explicit height/aspect container so fill knows its bounds */}
                      <div className="relative aspect-10/11 max-h-[75vh] w-full overflow-hidden rounded-lg bg-neutral-950">
                        <Image
                          src={i.url}
                          alt={i.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 800px"
                          className="object-contain"
                          priority
                        />
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* 4. Sanskrit Badge (pointer-events-none lets clicks trigger the modal beneath it) */}
                  <div className="pointer-events-none absolute top-3 right-3 rounded-full border border-primary/30 bg-black px-3 py-0.5">
                    <span className="font-serif text-xs font-medium tracking-wider text-primary">
                      {i.sanskritName}
                    </span>
                  </div>
                </CardContent>

                <CardHeader className="flex-1 bg-black p-5 pb-3">
                  <CardTitle className="flex flex-col gap-0.5">
                    <span className="font-serif text-lg font-bold tracking-wide text-white transition-colors group-hover:text-primary">
                      {i.name}
                    </span>
                    <span className="font-serif text-[11px] tracking-widest text-primary uppercase">
                      {i.tagline}
                    </span>
                  </CardTitle>
                  <CardDescription className="line-clamp-2 pt-2 text-xs leading-relaxed text-neutral-400">
                    {i.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="border-t border-primary/10 bg-black px-5 py-3 text-xs">
                  <div className="flex w-full items-center justify-between text-neutral-400">
                    <span className="font-serif text-[10px] tracking-wider uppercase">
                      Handcrafted Relic
                    </span>
                    <span className="font-serif text-[11px] font-medium text-primary transition-transform group-hover:translate-x-1">
                      Explore Panel &rarr;
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 z-20 size-10 cursor-pointer bg-black/70! font-bold text-white hover:bg-neutral-900 sm:left-1 sm:size-20" />
        <CarouselNext className="right-2 z-20 size-10 cursor-pointer bg-black/70! font-bold text-white hover:bg-neutral-900 sm:right-1 sm:size-20" />
      </Carousel>
    </section>
  )
}

export default DasAvatar
