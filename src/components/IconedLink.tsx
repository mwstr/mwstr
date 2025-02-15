import { getCssImage } from '@/utils/get-css-image'
import { Fira_Sans_Condensed } from 'next/font/google'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'

const firaSansCondensed = Fira_Sans_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export function IconedLink({
  href,
  children,
  image,
}: PropsWithChildren & { href: string; image: string }) {
  const backgroundImage = getCssImage({
    src: image,
    width: 24,
    height: 24,
  })

  return (
    <Link
      href={href}
      target="_blank"
      style={{ borderBottom: 'none', transition: 'background-color 0.3s ease' }}
      className={`inline-flex items-baseline bg-foreground-pale hover:bg-foreground-mid px-1.5 py-0.5 rounded-md gap-0.5 ${firaSansCondensed.className}`}
    >
      <span
        style={{
          backgroundImage,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="w-6 h-6 inline-block self-center"
      />
      {children}
    </Link>
  )
}
