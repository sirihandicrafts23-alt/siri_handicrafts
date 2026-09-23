import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "../ui/navigation-menu"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer"
import { Button } from "../ui/button"
import { Rows3Icon } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleSlider = () => {
    setOpen((prev) => !prev)
  }

  return (
    <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b border-border bg-black px-4 text-white sm:px-6">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-md">
          <Image
            src="/logo/siri logo final.jpg"
            alt="Siri Handicrafts Logo"
            fill
            priority
            sizes="40px"
            className="object-cover"
          />
        </div>
        <span className="font-cursive text-xl font-normal tracking-wider text-white sm:text-2xl">
          Siri Handicrafts
        </span>
      </Link>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex gap-10">
          <NavigationMenuItem>
            <Link href="/" className="text-white hover:text-primary">
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blog" className="text-white hover:text-primary">
              Blog
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" className="text-white hover:text-primary">
              About
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/admin" className="text-white hover:text-primary">
              Admin Page
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="md:hidden">
        <Drawer open={open} onOpenChange={handleSlider}>
          <DrawerTrigger
            render={
              <Button variant="ghost" size="icon" className="text-white">
                <Rows3Icon className="h-6 w-6" />
              </Button>
            }
          />
          <DrawerContent className="h-min-[33%] border-neutral-800 bg-neutral-950 text-white">
            <DrawerHeader>
              <DrawerTitle className="text-left font-cursive text-2xl underline underline-offset-5">
                Siri Handicrafts
              </DrawerTitle>
            </DrawerHeader>
            <nav className="flex flex-col gap-4 p-4 text-lg">
              <Link
                href="/"
                className="transition-colors hover:text-primary"
                onClick={handleSlider}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="transition-colors hover:text-primary"
                onClick={handleSlider}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-primary"
                onClick={handleSlider}
              >
                About
              </Link>
              <Link
                href="/admin"
                className="transition-colors hover:text-primary"
                onClick={handleSlider}
              >
                Admin Page
              </Link>
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  )
}
