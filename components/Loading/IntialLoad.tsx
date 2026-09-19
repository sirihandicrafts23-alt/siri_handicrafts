import Image from "next/image"

function InitialLoad() {
  return (
    <div className="bg-black-100 relative flex h-screen w-full flex-1 items-center justify-center rounded-xl p-6 text-center">
      <Image
        src="/logo/siri logo final.jpg"
        alt="Siri Handicrafts Logo"
        fill
        priority
        className="animate-pulse object-contain p-4 duration-1000 sm:w-full"
        sizes="100vw"
      />
    </div>
  )
}

export default InitialLoad
