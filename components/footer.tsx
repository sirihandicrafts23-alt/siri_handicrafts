import Link from "next/link"
import { Input } from "@/components/ui/input"
import FooterNewsletter from "./newletter/FooterNewsLetter"

export default function Footer() {
  return (
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
      <div className="flex w-full flex-col items-center justify-center p-5">
        <FooterNewsletter />
      </div>
      <div className="flex w-full"></div>
    </footer>
  )
}
