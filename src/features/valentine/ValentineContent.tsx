'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export const ValentineContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const noBtnRef = useRef<HTMLButtonElement>(null)

  const handleYesClick = () => {
    setIsModalOpen(true)
  }

  const repositionNoBtn = () => {
    const noBtn = noBtnRef.current
    if (!noBtn) return

    const container = noBtn.closest(
      '.valentine-container',
    ) as HTMLElement
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const btnWidth = noBtn.offsetWidth
    const btnHeight = noBtn.offsetHeight
    const maxX = containerRect.width - btnWidth
    const maxY = containerRect.height - btnHeight
    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    noBtn.style.position = 'absolute'
    noBtn.style.left = randomX + 'px'
    noBtn.style.top = randomY + 'px'
  }

  const handleNoHover = () => {
    repositionNoBtn()
  }

  const handleNoClick = () => {
    repositionNoBtn()
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const currentYear = new Date().getFullYear()

  return (
    <>
      <div className="valentine-container min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-cyan-400 via-white to-red-500 bg-fixed py-20 relative">
        <div className="max-w-4xl w-[90%] p-5 relative bg-black/20 rounded-lg text-white text-center">
          {/* Header */}
          <header>
            <h1 className="font-[var(--font-great-vibes)] text-6xl mb-5">
              Today, do you want to be my Valentine?
            </h1>
          </header>

          {/* Main Content */}
          <main>
            {/* Buttons */}
            <div className="my-5">
              <Button
                onClick={handleYesClick}
                className="w-48 text-2xl py-5 px-8 mx-2 bg-cyan-400 text-white focus:ring-cyan-300"
              >
                YES
              </Button>
              <Button
                ref={noBtnRef}
                onMouseOver={handleNoHover}
                onClick={handleNoClick}
                className="w-48 text-2xl py-5 px-8 mx-2 bg-red-500 text-white focus:ring-red-300"
              >
                NO
              </Button>
            </div>

            {/* Images */}
            <div className="flex flex-wrap justify-center gap-4 my-5">
              <Image
                src="/valentine/happy.jpg"
                alt="happy"
                width={192}
                height={192}
                className="w-48 h-48 border-4 border-white rounded-lg object-cover"
              />
              <Image
                src="/valentine/green.jpg"
                alt="green"
                width={192}
                height={192}
                className="w-48 h-48 border-4 border-white rounded-lg object-cover"
              />
              <Image
                src="/valentine/cinna.jpg"
                alt="cinna"
                width={192}
                height={192}
                className="w-48 h-48 border-4 border-white rounded-lg object-cover"
              />
              <Image
                src="/valentine/killer.jpg"
                alt="killer"
                width={192}
                height={192}
                className="w-48 h-48 border-4 border-white rounded-lg object-cover"
              />
              <Image
                src="/valentine/love.png"
                alt="love"
                width={192}
                height={192}
                className="w-48 h-48 border-4 border-white rounded-lg object-cover"
              />
              <Image
                src="/valentine/mikuo.jpg"
                alt="mikuo"
                width={192}
                height={192}
                className="w-48 h-48 border-4 border-white rounded-lg object-cover"
              />
              <Image
                src="/valentine/mask.jpg"
                alt="mask"
                width={192}
                height={192}
                className="w-48 h-48 border-4 border-white rounded-lg object-cover"
              />
              <Image
                src="/valentine/mail.png"
                alt="mail"
                width={192}
                height={192}
                className="w-48 h-48 border-4 border-white rounded-lg object-cover"
              />
            </div>
          </main>

          {/* Footer */}
          <footer>
            <p className="font-[var(--font-press-start)] mt-8 text-lg">
              Made by Pdro - <span>{currentYear}</span>
            </p>
          </footer>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] bg-black/50 flex items-center justify-center">
          <div className="bg-white m-auto p-5 border border-gray-400 w-[90%] max-w-96 rounded-lg text-black text-center relative text-2xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-400 text-3xl font-bold cursor-pointer hover:text-black"
            >
              &times;
            </button>
            <p>{`You'll forever be!!`}</p>
            <p>
              愛して、愛して~{' '}
              <span className="text-cyan-400 text-4xl">&hearts;</span>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
