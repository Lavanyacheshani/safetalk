import type React from "react"
export default function WellnessCoachingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">{children}</div>
}
