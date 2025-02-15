import IconGithub from '@/static/icons/github.svg'

export function Header() {
  return (
    <header className="px-8 py-6 flex justify-end items-center gap-5">
      <h1 className="underline">~</h1>
      <h1>Content</h1>
      <h1>Stack</h1>
      <h1>Hoard</h1>
      <IconGithub className="h-8" />
    </header>
  )
}
