import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Button — PRD Alice & Diana
 *
 * primary  → bordo 1px black-soft, bg trasparente | hover: bg black-soft, testo bianco
 * secondary→ bg gray-light, bordo trasparente     | hover: bg rose-cipria
 * outline  → bordo bianco, testo bianco           | hover: bg bianco, testo black-soft
 *            (per sfondi scuri / hero)
 *
 * Regole PRD:
 *  - border-radius: 0px (rounded-none)
 *  - NO gradient, NO shadow pesante
 *  - UPPERCASE, tracking largo, 14px
 *  - Transizione 300ms ease-out
 */
const buttonVariants = cva(
  // Base comune a tutti i variant
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap",
    "text-sm font-medium uppercase tracking-widest",
    "border transition-all duration-300 ease-out",
    "rounded-none",                          // PRD: 0px radius
    "cursor-pointer",
    "disabled:pointer-events-none disabled-opacity-50",
    // Focus accessibile (sottile, non invasivo)
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-dark focus-visible:ring-offset-2",
    // SVG inline
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary:
          "border-black-soft text-black-soft bg-transparent hover:bg-black-soft hover:text-white-pure",
        secondary:
          "bg-gray-light border-transparent text-black-soft hover:bg-rose-cipria",
        outline:
          "border-white-pure text-white-pure bg-transparent hover:bg-white-pure hover:text-black-soft",
      },
      size: {
        default: "px-8 py-4",          // 40px 16px — PRD: padding 16px 40px
        sm:      "px-6 py-3 text-xs",
        lg:      "px-10 py-5",
        icon:    "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
