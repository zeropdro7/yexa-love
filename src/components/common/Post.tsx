'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from './Container'
import { Button } from '@/components/ui/Button'
import { HeartAnimation } from '@/components/animations/HeartAnimation'
import type { PostContent } from '@/types/Post'

interface PostProps {
  content: PostContent
}

export const Post = ({ content }: PostProps) => {
  const [showHeartAnimation, setShowHeartAnimation] = useState(false)

  const handleShareLove = () => {
    setShowHeartAnimation(true)
  }

  return (
    <>
      <HeartAnimation 
        isActive={showHeartAnimation} 
        onComplete={() => setShowHeartAnimation(false)}
      />
    <Container className="py-16">
      <article className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/"
            className="text-green-dark hover:text-pink-neutral transition text-sm flex items-center gap-2"
          >
            ← Volver a Fechas Especiales
          </Link>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="mb-4">
            <span
              className={`inline-block ${content.category.bgColor} ${content.category.textColor} px-3 py-1 rounded-full text-sm font-medium`}
            >
              {content.category.label}
            </span>
          </div>
          <h1
            className={`text-5xl md:text-6xl ${content.colors.primary} mb-6 drop-shadow-sm`}
            style={{ fontFamily: 'var(--font-romantic)' }}
          >
            {content.title}
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            {content.subtitle}
          </p>
          <div
            className={`${content.japaneseText.textColor} text-sm`}
            style={{ fontFamily: content.japaneseText.fontFamily }}
          >
            {content.japaneseText.text}
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative mb-12 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={content.heroImage.src}
            alt={content.heroImage.alt}
            width={content.heroImage.width || 800}
            height={content.heroImage.height || 450}
            className="w-full h-[450px] object-cover"
            priority
          />
          {content.heroImage.overlayClass && (
            <div
              className={`absolute inset-0 ${content.heroImage.overlayClass}`}
            />
          )}
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <h2
              className={`text-3xl font-bold ${content.mainContent.titleColor} mb-4`}
            >
              {content.mainContent.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {content.mainContent.intro}
            </p>

            <blockquote
              className={`${content.mainContent.quote.bgClass} p-4 my-6 rounded-r-lg`}
            >
              <p
                className={`${content.mainContent.quote.textColor} italic`}
              >
                {content.mainContent.quote.text}
              </p>
            </blockquote>
          </div>

          {/* Sections Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {content.mainContent.sections.map((section, index) => (
              <div key={index}>
                <h3
                  className={`text-2xl font-semibold ${section.titleColor} mb-4`}
                >
                  {section.title}
                </h3>
                <p className="text-gray-700">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Gallery Preview */}
          <div className="my-12">
            <h3
              className={`text-2xl font-semibold ${content.gallery.titleColor} mb-6 text-center`}
            >
              {content.gallery.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {content.gallery.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width || 200}
                    height={image.height || 200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Final Message */}
          <div
            className={`text-center my-12 p-8 ${content.finalMessage.bgClass} rounded-2xl`}
          >
            <h3
              className={`text-2xl font-semibold ${content.finalMessage.titleColor} mb-4`}
            >
              {content.finalMessage.title}
            </h3>
            <p className="text-gray-700 text-lg">
              {content.finalMessage.content}
            </p>
            <div
              className={`${content.finalMessage.japaneseText.textColor} mt-4 text-sm`}
              style={{
                fontFamily:
                  content.finalMessage.japaneseText.fontFamily,
              }}
            >
              {content.finalMessage.japaneseText.text}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <footer className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button
              className={content.navigation.backButton.className}
            >
              <Link
                href={content.navigation.backButton.href || '#'}
                className="flex items-center gap-2"
              >
                {content.navigation.backButton.text}
              </Link>
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">
                ¿Te gustó esta fecha especial?
              </p>
              <Button
                className={content.navigation.shareButton.className}
                onClick={handleShareLove}
              >
                {content.navigation.shareButton.text}
              </Button>
            </div>

            <Button
              className={content.navigation.nextButton.className}
            >
              <Link
                href={content.navigation.nextButton.href || '#'}
                className="flex items-center gap-2"
              >
                {content.navigation.nextButton.text}
              </Link>
            </Button>
          </div>
        </footer>
      </article>
    </Container>
    </>
  )
}
