import Home from '~/Sections/Home'
import Skills from '~/Sections/Skills'
import Header from '~/components/Navbar'
import NavButtons from '~/components/ui/NavButtons'
import { LampDemo } from '~/components/ui/lamp'

export default function HomePage() {
  return (
    <main className="flex h-auto min-h-screen flex-col bg-slate-950">
      <div className="flex w-full items-start justify-between p-4">
        <Header />
        <NavButtons />
      </div>
      <LampDemo />
      <Home />
      <Skills />
    </main>
  )
}
