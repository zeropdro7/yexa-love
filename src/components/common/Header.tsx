'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { Container } from './Container'

function MobileNavItem({
  href,
  children,
  disabled = false,
}: {
  href: string
  children: React.ReactNode
  disabled?: boolean
}) {
  if (disabled) {
    return (
      <li>
        <span className="block py-2 text-base text-gray-400 cursor-not-allowed">
          {children}
        </span>
      </li>
    )
  }

  return (
    <li>
      <Link href={href} className="block py-2 text-base">
        {children}
      </Link>
    </li>
  )
}

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="pointer-events-auto md:hidden">
      <button
        type="button"
        className="group flex items-center rounded-full bg-kawaii-lavender/90 px-4 py-2 text-sm font-medium text-gray-800 shadow-lg ring-1 ring-turquoise-neutral/20 backdrop-blur-sm transition hover:bg-turquoise-light/80 hover:ring-turquoise-neutral/30"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
        <svg
          className="ml-3 h-auto w-2 stroke-pink-neutral group-hover:stroke-turquoise-dark"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            d="M1.75 1.75 5 5.25l3.25-3.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800/40 backdrop-blur-sm">
          <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-kawaii-lavender/95 p-8 ring-1 ring-turquoise-neutral/20 backdrop-blur-sm">
            <div className="flex flex-row-reverse items-center justify-between">
              <button
                type="button"
                className="-m-1 p-1 hover:bg-pink-light/20 rounded-full transition"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="h-6 w-6 text-pink-neutral hover:text-turquoise-dark transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-sm font-medium text-pink-neutral">
                💕 Navegación
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-turquoise-light/30 text-base text-gray-800">
                <MobileNavItem href="/">🌸 Fechas</MobileNavItem>
                <MobileNavItem href="/about" disabled>
                  💖 Nosotros (Próximamente)
                </MobileNavItem>
                <MobileNavItem href="/gallery" disabled>
                  📸 Galería (Próximamente)
                </MobileNavItem>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

function NavItem({
  href,
  children,
  disabled = false,
}: {
  href: string
  children: React.ReactNode
  disabled?: boolean
}) {
  const isActive = usePathname() === href

  if (disabled) {
    return (
      <li>
        <span className="relative block px-3 py-2 text-gray-400 cursor-not-allowed font-medium">
          {children}
        </span>
      </li>
    )
  }

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition font-medium',
          isActive
            ? 'text-turquoise-dark'
            : 'text-gray-700 hover:text-pink-neutral hover:bg-kawaii-lavender/20',
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-turquoise-light/0 via-turquoise-neutral/60 to-turquoise-light/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(
  props: React.ComponentPropsWithoutRef<'nav'>,
) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-kawaii-lavender/80 px-3 text-sm font-medium text-gray-800 shadow-lg ring-1 ring-turquoise-neutral/20 backdrop-blur-sm hover:bg-kawaii-lavender/90 transition">
        <NavItem href="/">🌸 Fechas</NavItem>
        <NavItem href="/about" disabled>💖 Nosotros</NavItem>
        <NavItem href="/gallery" disabled>📸 Galería</NavItem>
      </ul>
    </nav>
  )
}

export const Header = () => {
  return (
    <header className="pointer-events-none relative z-50 flex flex-none flex-col">
      <div className="top-0 z-10 h-16 pt-6">
        <Container className="w-full">
          <div className="relative flex gap-4">
            <div className="flex flex-1">
              <Link
                href="/"
                className="pointer-events-auto flex items-center text-2xl font-bold text-turquoise-dark hover:text-pink-neutral transition"
                style={{ fontFamily: 'var(--font-romantic)' }}
              >
                💕 YxaLov
              </Link>
            </div>
            <div className="flex flex-1 justify-end md:justify-center">
              <MobileNavigation />
              <DesktopNavigation className="pointer-events-auto hidden md:block" />
            </div>
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto">
                <span className="text-2xl animate-pulse">🌸</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}
