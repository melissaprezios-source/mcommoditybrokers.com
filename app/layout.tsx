import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "MP Commodity Brokers - Energy Commodity Deal Facilitation",
  description: "Serious energy buyers. Credible sellers. Protected introductions. MP Commodity Brokers helps qualified parties structure legitimate petroleum and energy commodity conversations.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
