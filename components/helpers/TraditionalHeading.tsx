interface TraditionalHeadingProps {
  title?: string
  subtitle?: string
  className?: string
}

export default function TraditionalHeading({
  title = "Das Avatar",
  subtitle = "Sacred Heritage Collection",
  className = "",
}: TraditionalHeadingProps) {
  return (
    <div
      className={`flex w-full items-center justify-center py-8 ${className}`}
    >
      {/* Front Horizontal Line */}
      <div className="h-px min-w-6 flex-1 bg-linear-to-r from-transparent via-primary/50 to-primary sm:h-0.5 sm:min-w-16" />

      {/* Traditional Double-Border Centerpiece */}
      <div className="mx-2 shrink-0 border-x border-primary/50 p-1 sm:mx-4 sm:p-1.5">
        <div className="relative flex flex-col items-center border-x-2 border-primary px-4 py-2 text-center sm:px-8 sm:py-3">
          {/* Top Decorative Diamond */}
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-background px-1.5 font-serif text-[10px] leading-none text-primary sm:text-xs">
            ◆
          </span>

          {subtitle && (
            <span className="font-serif text-[9px] tracking-[0.25em] text-primary/80 uppercase sm:text-xs">
              {subtitle}
            </span>
          )}

          <h2 className="font-serif text-xl font-bold tracking-widest text-foreground uppercase sm:text-3xl md:text-4xl">
            {title}
          </h2>

          {/* Bottom Decorative Diamond */}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background px-1.5 font-serif text-[10px] leading-none text-primary sm:text-xs">
            ◆
          </span>
        </div>
      </div>

      {/* Back Horizontal Line */}
      <div className="h-px min-w-6 flex-1 bg-linear-to-l from-transparent via-primary/50 to-primary sm:h-0.5 sm:min-w-16" />
    </div>
  )
}
