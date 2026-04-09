"use client"

import Image from "next/image"
import { getMonthName } from "@/utils/dateUtils"

interface HeroSectionProps {
  imageUrl: string
  currentDate: Date
  accentColor?: string
}

export const HeroSection = ({
  imageUrl,
  currentDate,
  accentColor = "#1e88e5",
}: HeroSectionProps) => {
  const year = currentDate.getFullYear()
  const monthName = getMonthName(currentDate.getMonth())

  return (
    <div className="relative w-full h-52 md:h-60 overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={`${monthName} ${year}`}
        fill
        className="object-cover w-full h-full"
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 500px"
      />

      {/* Diagonal Overlay - Beautiful Wave Shape */}
<svg
  className="absolute inset-0 w-full h-full"
  preserveAspectRatio="none"
  viewBox="0 0 400 350"
>
  <defs>
    {/* 1. The main gradient definition (used for the base shape and overlays) */}
    <linearGradient id="overlayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: accentColor, stopOpacity: 0.85 }} />
      <stop offset="100%" style={{ stopColor: accentColor, stopOpacity: 1.0 }} />
    </linearGradient>

    {/* 2. THE MASK DEFINITION: This makes the shapes only visible *inside* your original curve. */}
    <mask id="shapeMask">
      {/* Black background hides everything */}
      <rect width="100%" height="100%" fill="black" />
      {/* White mask *reveals* content. We use your exact path here, 
         making it the master boundary.
      */}
      <path
        d="M 0,180 L 160,280 Q 200,310 240,280 L 400,120 L 400,350 L 0,350 Z"
        fill="white"
      />
    </mask>
  </defs>

  {/* A. The Main Base Shape. We apply the gradient, 
         making it blue rather than white.
  */}
  <path
    d="M 0,180 L 160,280 Q 200,310 240,280 L 400,120 L 400,350 L 0,350 Z"
    fill="url(#overlayGradient)"
  />

  {/* B. This <g> contains the two new overlays, 
         applying the mask we created in the <defs>.
  */}
  <g mask="url(#shapeMask)">
    {/* LEFT OVERLAY WING: Intersects the left boundary */}
    <path
      d="M -50,150 L 150,290 L 170,330 L -50,330 Z"
      fill="url(#overlayGradient)"
      opacity="0.7" /* Reduced opacity makes it look like an overlay */
    />
    
    {/* RIGHT OVERLAY WING: Intersects the right boundary */}
    <path
      d="M 220,290 L 450,130 L 450,330 L 220,330 Z"
      fill="url(#overlayGradient)"
      opacity="0.8" /* Slight variance for organic look */
    />
  </g>
</svg>

      {/* Year and Month - Bottom Right with Premium Typography */}
      <div className="absolute bottom-0 right-0 p-5 md:p-7 text-white z-10 bg-gradient-to-l from-black/20 to-transparent pr-8">
        <div className="text-right">
          <p className="text-3xl md:text-4xl font-black tracking-tighter leading-none">
            {year}
          </p>
          <p className="text-base md:text-lg font-bold tracking-widest mt-2 opacity-95">
            {monthName}
          </p>
        </div>
      </div>
    </div>
  )
}
