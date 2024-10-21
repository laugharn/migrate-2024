import NextLink, { type LinkProps } from 'next/link'
import { type ReactNode } from 'react'

function Link({ children, className, ...props }: LinkProps & { children: ReactNode; className?: string }) {
  return (
    <NextLink className={className ?? 'text-[rgb(0,87,255)] hover:text-[blue]'} {...props}>
      {children}
    </NextLink>
  )
}

export default Link
