import Link from 'next/link'
import { ContainerInner, ContainerOuter } from './Container'

function NavLink({
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
      <span className="text-gray-400 cursor-not-allowed px-2 py-1 rounded-md">
        {children}
      </span>
    )
  }

  return (
    <Link
      href={href}
      className="transition hover:text-turquoise-neutral hover:bg-kawaii-lavender/20 px-2 py-1 rounded-md"
    >
      {children}
    </Link>
  )
}

export const Footer = () => {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-turquoise-light/30 pt-10 pb-16 bg-gradient-to-t from-kawaii-lavender/10 to-transparent">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-gray-700">
                <NavLink href="/">🌸 Fechas</NavLink>
                <NavLink href="/about" disabled>💖 Nosotros</NavLink>
                <NavLink href="/gallery" disabled>📸 Galería</NavLink>
              </div>
              <p className="text-sm text-pink-neutral text-center">
                💕 Hecho con amor infinito por Pdro -{' '}
                {new Date().getFullYear()}
                <br />
                <span
                  className="text-xs text-turquoise-dark italic"
                  style={{ fontFamily: 'var(--font-gaming)' }}
                >
                  すべての愛を込めて (Con todo mi amor)
                </span>
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
