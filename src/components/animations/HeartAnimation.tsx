'use client'

import { useEffect, useState } from 'react'

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

export const HeartAnimation = ({ isActive, onComplete }: HeartAnimationProps) => {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    if (isActive) {
      const newHearts = Array.from({ length: 15 }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 90 + 5, // 5% to 95% from left
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
            style={{
              left: `${heart.left}%`,
              '--delay': `${heart.delay}s`,
              '--size': heart.size,
              fontSize: `${heart.size * 2}rem`,
            } as React.CSSProperties & { [key: string]: any }}
          >
            💛
          </div>
        ))}
      </div>
      
      <style jsx global>{`
        @keyframes heart-bounce {
          0% {
            transform: translateY(0) scale(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            transform: translateY(-80px) scale(calc(var(--size) * 0.9)) rotate(5deg);
            opacity: 1;
          }
          30% {
            transform: translateY(-160px) scale(var(--size)) rotate(-3deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-240px) scale(calc(var(--size) * 1.1)) rotate(2deg);
            opacity: 0.9;
          }
          70% {
            transform: translateY(-320px) scale(calc(var(--size) * 0.8)) rotate(-1deg);
            opacity: 0.6;
          }
          90% {
            transform: translateY(-400px) scale(calc(var(--size) * 0.6)) rotate(1deg);
            opacity: 0.3;
          }
          100% {
            transform: translateY(-480px) scale(calc(var(--size) * 0.4)) rotate(0deg);
            opacity: 0;
          }
        }
        
        .heart-animation {
          animation: heart-bounce 2s ease-out forwards;
          animation-delay: var(--delay);
          will-change: transform, opacity;
        }
      `}</style>
    </>
  )
}