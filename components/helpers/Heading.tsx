import { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel
  children: string // Strictly accepts text as the child prop
  className?: string
}

const headingStyles: Record<HeadingLevel, string> = {
  h1: "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
  h2: "text-2xl font-semibold tracking-tight sm:text-3xl",
  h3: "text-xl font-semibold sm:text-2xl",
  h4: "text-lg font-medium sm:text-xl",
  h5: "text-base font-medium",
  h6: "text-sm font-medium uppercase tracking-wider",
}

export default function Heading({
  as: Tag = "h1",
  children,
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "text-foreground transition-colors",
        headingStyles[Tag],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
