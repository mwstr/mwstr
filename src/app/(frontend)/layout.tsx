import { clsx } from 'clsx'
import './global.css'

import type { Metadata } from 'next'
import { Merriweather_Sans } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import { Header } from './header'

const merriweatherSans = Merriweather_Sans({
  subsets: ['latin'],
  variable: '--font-merriweather-sans',
  display: 'swap',
})

export const metadata = {
  description: 'Personal site',
  title: 'Meowster',
} satisfies Metadata

export default async function RootLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <html lang="en" className={clsx(merriweatherSans.variable)}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-col grow">{children}</main>
      </body>
    </html>
  )
}
