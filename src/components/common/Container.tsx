import { clsx } from 'clsx'

interface ContainerProps {
  className?: string
  children: React.ReactNode
}

export const ContainerOuter = ({
  className,
  children,
  ...props
}: ContainerProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        {children}
      </div>
    </div>
  )
}

export const ContainerInner = ({
  className,
  children,
  ...props
}: ContainerProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export const Container = ({
  children,
  ...props
}: ContainerProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <ContainerOuter {...props}>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  )
}
