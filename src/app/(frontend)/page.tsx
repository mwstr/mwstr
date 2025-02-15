import { IconedLink } from '@/components/IconedLink'
import { LinkUl } from '@/components/LinkUs'
import Whisker from '@public/images/whisker.svg'
import type React from 'react'
import type { PropsWithChildren } from 'react'

export default async function HomePage() {
  return (
    <>
      <Whisker style={{ position: 'fixed', top: '40%', left: '-70px' }} />
      <Whisker
        style={{
          position: 'fixed',
          top: '40%',
          right: '-70px',
          transform: 'scale(-1,1)',
        }}
      />
      <div className="mx-auto pt-7 max-w-3xl flex flex-col gap-5">
        <h1 className="text-5xl font-bold">Meowster</h1>
        <Hp>Hey, I’m Andrew Semenystyi, a meow-tastic web developer.</Hp>
        <Hp>
          Working at{' '}
          <IconedLink href="https://www.kissmyapps.tech" image="/icons/kma.png">
            KissMyApps
          </IconedLink>
        </Hp>
        <Hp>
          Creator of{' '}
          <IconedLink href="https://jsr.io/@wsx" image="/icons/wsx.png">
            WSX
          </IconedLink>
        </Hp>
        <Hp>
          Backend infrastructure is my natural habitat. Making it scalable,
          observable and supportable is my passion.
        </Hp>
        <Hp>
          Check out my content: <LinkUl href="content">posts</LinkUl>,{' '}
          <LinkUl href="content">tutorials</LinkUl>,{' '}
          <LinkUl href="content">snippets</LinkUl>.
        </Hp>
        <Hp>
          I've explored many development paths, paradigms and frameworks and
          generally have well-formed opinions on modern{' '}
          <LinkUl href="stack">tech stack</LinkUl>.
        </Hp>
        <Hp>
          Let’s keep a finger on the pulse together: explore my collection of
          interesting content (<LinkUl href="hoard">hoard</LinkUl>) and feel
          free to{' '}
          <LinkUl href="mailto:meowningmaster+show@gmail.com">show me</LinkUl>{' '}
          something that makes your brain tingle.
        </Hp>
      </div>
    </>
  )
}

/**
 * Home page paragraph
 */
export function Hp({ children }: PropsWithChildren) {
  return <p className="text-lg">{children}</p>
}
