"use client"

import React from "react"
import { motion } from "framer-motion"

export type Testimonial = {
  name: string
  stars: number
  text?: string
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()

  return (
    <div className="h-10 w-10 rounded-full bg-rose-cipria flex items-center justify-center shrink-0">
      <span className="text-xs font-medium text-black-soft tracking-wide">{initials}</span>
    </div>
  )
}

function Stars({ count }: { count: number }) {
  return (
    <div className="text-rose-dark text-sm leading-none">
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </div>
  )
}

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4"
      >
        {[...Array(2)].map((_, idx) => (
          <React.Fragment key={idx}>
            {testimonials.map(({ name, stars, text }, i) => (
              <div
                key={i}
                className="p-6 border border-rose-cipria bg-white-pure shadow-sm max-w-xs w-full rounded-sm"
              >
                <Stars count={stars} />
                {text && (
                  <p className="mt-3 text-sm text-gray-warm leading-relaxed">
                    &ldquo;{text}&rdquo;
                  </p>
                )}
                <div className="flex items-center gap-3 mt-4">
                  <Avatar name={name} />
                  <span className="font-serif text-sm text-black-soft leading-tight">{name}</span>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
