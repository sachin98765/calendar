"use client"

export const SpiralBinding = () => {
  return (
    <div className="absolute -top-10 left-0 right-0 flex justify-center z-20 px-4">
      <svg
        width="100%"
        height="60"
        viewBox="0 0 360 60"
        className="drop-shadow-xl filter"
        preserveAspectRatio="xMidYMid meet"
        style={{ maxWidth: "320px" }}
      >
        {/* Metal background bar for binding */}
        <defs>
          <linearGradient id="metalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#e5e7eb", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "#d1d5db", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#c4b5fd", stopOpacity: 0.8 }} />
          </linearGradient>
        </defs>

        {/* Binding bar background */}
        <rect x="0" y="36" width="360" height="14" fill="url(#metalGradient)" rx="3" />

        {/* Shadow under bar */}
        <rect x="0" y="48" width="360" height="2" fill="#000" opacity="0.1" rx="1" />

        {/* Spiral coils - Left side */}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={`left-${i}`}>
            {/* Spiral wire circles */}
            <circle
              cx={25 + i * 15}
              cy={43}
              r="5.5"
              fill="none"
              stroke="#6b7280"
              strokeWidth="2.2"
            />
            {/* Inner highlight on coil */}
            <circle
              cx={25 + i * 15}
              cy={40}
              r="2"
              fill="#f3f4f6"
              opacity="0.9"
            />
            {/* Coil shadow */}
            <circle
              cx={25 + i * 15}
              cy={46}
              r="1"
              fill="#1f2937"
              opacity="0.3"
            />
          </g>
        ))}

        {/* Spiral coils - Right side */}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={`right-${i}`}>
            {/* Spiral wire circles */}
            <circle
              cx={335 - i * 15}
              cy={43}
              r="5.5"
              fill="none"
              stroke="#6b7280"
              strokeWidth="2.2"
            />
            {/* Inner highlight on coil */}
            <circle
              cx={335 - i * 15}
              cy={40}
              r="2"
              fill="#f3f4f6"
              opacity="0.9"
            />
            {/* Coil shadow */}
            <circle
              cx={335 - i * 15}
              cy={46}
              r="1"
              fill="#1f2937"
              opacity="0.3"
            />
          </g>
        ))}

        {/* Hanging hook - premium curved design */}
        <g>
          {/* Outer bracket left */}
          <path
            d="M 155 24 Q 150 15, 155 8"
            fill="none"
            stroke="#6b7280"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Main hook arc - smooth curve */}
          <path
            d="M 155 8 Q 180 0, 205 8"
            fill="none"
            stroke="#374151"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Outer bracket right */}
          <path
            d="M 205 8 Q 210 15, 205 24"
            fill="none"
            stroke="#6b7280"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Hook highlight - metallic shine */}
          <path
            d="M 158 10 Q 180 3, 202 10"
            fill="none"
            stroke="#d1d5db"
            strokeWidth="1"
            opacity="0.6"
            strokeLinecap="round"
          />
          {/* Center loop detail */}
          <circle cx="180" cy="6" r="2.5" fill="#9ca3af" opacity="0.8" />
        </g>
      </svg>
    </div>
  )
}
