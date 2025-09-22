'use client'

import { useEffect, useState } from 'react'
import '@/styles/animations.css'

interface Heart {
  id: number
  left: number
  delay: number
  size: number
}

interface HeartAnimationProps {
  isActive: boolean
  onComplete?: () => void
}

export const HeartAnimation = ({
  isActive,
  onComplete,
}: HeartAnimationProps) => {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    if (isActive) {
      const newHearts = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 92 + 5, // 5% to 97% from left
        delay: Math.random() * 0.8, // 0 to 0.8s delay
        size: Math.random() * 1.5 + 0.8, // 0.8 to 2.3 size multiplier
      }))

      setHearts(newHearts)

      // Clear hearts after animation completes
      const timer = setTimeout(() => {
        setHearts([])
        onComplete?.()
      }, 2500)

      return () => clearTimeout(timer)
    }
  }, [isActive, onComplete])

  if (!isActive && hearts.length === 0) return null

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute bottom-20 text-yellow-400 heart-animation"
            style={
              {
                left: `${heart.left}%`,
                '--delay': `${heart.delay}s`,
                '--size': heart.size,
                fontSize: `${heart.size * 2}rem`,
              } as React.CSSProperties &
                Record<string, string | number>
            }
          >
            💛
          </div>
        ))}
      </div>
    </>
  )
}
