import IconGithub from '@public/icons/github.svg'
import Link from 'next/link'

export function Header() {
  return (
    <header className="px-8 py-6 flex justify-end items-center gap-5">
      <Link href="/" className="underline">
        ~
      </Link>
      <Link href="/content">Content</Link>
      <Link href="/stack">Stack</Link>
      <Link href="/hoard">Hoard</Link>
      <Link href="https://github.com/mwstr" target="_blank">
        <IconGithub className="h-8" />
      </Link>
    </header>
  )
}
