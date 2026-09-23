import { BsInstagram, BsWhatsapp, BsTelephone } from "react-icons/bs"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const whatsAppNumber = "8847843759"
const instagramLink = "https://www.instagram.com/siri_handicrafts"
const message =
  "Hello Siri Handicrafts! I Just viewed your wesbite and would like to connect with you.\nThank you"

function SocialsFloater() {
  const encodedMessage = encodeURIComponent(message)
  return (
    <section
      aria-label="social media links of siri handicrafts"
      className="fixed right-3 bottom-1/6 z-50 flex flex-row gap-1 opacity-80 hover:opacity-100 sm:right-40 sm:bottom-35"
    >
      <Card className="border-border bg-card/90 shadow-xl backdrop-blur-md">
        <div className="flex flex-col gap-8 py-3 sm:flex-row sm:px-3 sm:py-0">
          <CardContent>
            <Link
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="visit our instagram page"
            >
              <BsInstagram
                size="25"
                className="cursor-pointer hover:text-red-400"
              />
            </Link>
          </CardContent>
          <CardContent>
            <Link
              href={`https://wa.me/+91${whatsAppNumber}?text=${encodedMessage}`}
              aria-label="contact us on whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp
                size="25"
                className="cursor-pointer hover:text-red-400"
              />
            </Link>
          </CardContent>
          <CardContent>
            <Link
              href={`tel:+91${whatsAppNumber}`}
              aria-label="Call us directly on phone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTelephone
                size="25"
                className="cursor-pointer hover:text-red-400"
              />
            </Link>
          </CardContent>
        </div>
      </Card>
    </section>
  )
}

export default SocialsFloater
