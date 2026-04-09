"use client"

import { useState } from "react"

export const CalendarHanger = () => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="relative w-full max-w-sm mx-auto flex items-center justify-center py-1">
      {/* Hanger Image Container */}
      <div
        className={`relative transition-transform duration-500 ${
          isHovering ? "scale-105" : "scale-100"
        }`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Spiral Binding PNG Image */}
        <img
          src="/spiral-binding.png"
          alt="Calendar Spiral Binding"
          className="h-auto w-full"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          loading="eager"
        />
      </div>
    </div>
  )
}
