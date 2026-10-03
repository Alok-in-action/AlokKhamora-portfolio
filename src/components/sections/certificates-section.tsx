"use client"

import * as React from "react"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { WorksWheel } from "@/components/ui/works-wheel"
import { certificates } from "@/data/certificates"

export const CertificatesSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const [progress, setProgress] = React.useState(0)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest)
  })
  return (
    <div
      ref={containerRef}
      id="certificates"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] pb-14 sm:pb-20 md:pb-28"
      style={{ height: `${(certificates.length + 4) * 50}vh` }}
    >
      <div className="sticky top-0 w-full h-[100vh] overflow-hidden">
        <WorksWheel
          items={certificates}
          label="CERTIFICATES"
          action="Open"
          progress={progress}
          className="w-full h-full border-none bg-transparent"
        />
      </div>
    </div>
  )
}
