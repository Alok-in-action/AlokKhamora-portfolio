"use client"

import * as React from "react"
import { useRef, useState } from "react"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion"

interface HoverLinkPreviewProps {
  href: string
  previewImage: string
  imageAlt?: string
  children: React.ReactNode
}

const HoverLinkPreview: React.FC<HoverLinkPreviewProps> = ({
  href,
  previewImage,
  imageAlt = "Link preview",
  children,
}) => {
  const [showPreview, setShowPreview] = useState(false)
  const prevX = useRef<number | null>(null)

  const motionTop = useMotionValue(0)
  const motionLeft = useMotionValue(0)
  const motionRotate = useMotionValue(0)

  const springTop = useSpring(motionTop, {
    stiffness: 300,
    damping: 30,
  })

  const springLeft = useSpring(motionLeft, {
    stiffness: 300,
    damping: 30,
  })

  const springRotate = useSpring(motionRotate, {
    stiffness: 300,
    damping: 20,
  })

  const handleMouseEnter = () => {
    setShowPreview(true)
    prevX.current = null
  }

  const handleMouseLeave = () => {
    setShowPreview(false)
    prevX.current = null
    motionRotate.set(0)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const PREVIEW_WIDTH = 192
    const PREVIEW_HEIGHT = 112
    const OFFSET_Y = 40

    motionTop.set(e.clientY - PREVIEW_HEIGHT - OFFSET_Y)
    motionLeft.set(e.clientX - PREVIEW_WIDTH / 2)

    if (prevX.current !== null) {
      const deltaX = e.clientX - prevX.current
      const newRotate = Math.max(-15, Math.min(15, deltaX * 1.2))
      motionRotate.set(newRotate)
    }

    prevX.current = e.clientX
  }

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block cursor-pointer text-[#D7E2EA] underline decoration-[#D7E2EA]/40 underline-offset-4 transition-colors hover:text-white"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {children}
      </a>

      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10, rotate: 0 }}
            style={{
              position: "fixed",
              top: springTop,
              left: springLeft,
              rotate: springRotate,
              zIndex: 50,
              pointerEvents: "none",
            }}
            className="hidden lg:block" /* Desktop only as requested */
          >
            <div className="rounded-2xl border border-[#D7E2EA]/25 bg-[#0C0C0C] p-2 shadow-lg">
              {previewImage === 'iframe' ? (
                 <iframe 
                   src={href} 
                   className="h-28 w-48 rounded-md bg-white pointer-events-none" 
                   scrolling="no" 
                   tabIndex={-1}
                   title={imageAlt}
                 />
              ) : (
                <img
                  src={previewImage}
                  alt={imageAlt}
                  draggable={false}
                  className="h-28 w-48 rounded-md object-cover bg-white"
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export { HoverLinkPreview }
