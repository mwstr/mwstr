import Link, { type LinkProps } from 'next/link'
import type { PropsWithChildren } from 'react'

/**
 * Typical link with underline
 */
export function LinkUl(props: PropsWithChildren<LinkProps>) {
  return (
    <Link
      className="border-b-2 border-b-foreground-mid hover:border-b-foreground"
      style={{ transition: 'border-color 0.3s ease' }}
      {...props}
    />
  )
}
