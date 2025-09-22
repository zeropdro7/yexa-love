import type { ButtonHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { clsx } from 'clsx'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          // Estilos base
          'border-none rounded-md cursor-pointer transition-transform duration-200',
          'hover:scale-110 active:scale-95',
          'font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
          // Clases personalizables (tamaño, colores, etc.)
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
