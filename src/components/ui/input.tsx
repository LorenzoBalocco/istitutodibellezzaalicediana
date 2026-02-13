import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Input — PRD Alice & Diana
 *
 * - border: 1px solid #E8D5D0 (rose-cipria)
 * - border-radius: 2px (rounded-[2px])
 * - padding: 14px 16px
 * - font: sans-serif 16px
 * - focus: border → #B89B94 (rose-dark), NO ring colorato
 * - placeholder: #8B7F7A (gray-warm)
 * - disabled: opacità ridotta
 */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full",
        "border border-rose-cipria rounded-[2px]",
        "bg-white-pure text-black-soft",
        "px-4 py-3.5",                         // ~14px 16px
        "text-base font-sans",
        "placeholder:text-gray-warm",
        "transition-colors duration-200 ease-out",
        "focus:outline-none focus:border-rose-dark focus:ring-0",
        "disabled:cursor-not-allowed disabled:opacity-50",
        // File input reset
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className
      )}
      {...props}
    />
  )
}

export { Input }
