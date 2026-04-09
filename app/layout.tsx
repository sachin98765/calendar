import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Premium Wall Calendar",
  description: "A pixel-perfect wall calendar UI with interactive features",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" #ededed min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
