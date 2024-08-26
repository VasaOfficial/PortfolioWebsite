import About from '~/Sections/About'
import Projects from '~/Sections/Project'
import Skills from '~/Sections/Skills'
import Timeline from '~/Sections/Timeline'
import Header from '~/components/Navbar'
import { LampDemo } from '~/components/ui/lamp'

export default function HomePage() {
  return (
    <main className="flex h-auto min-h-screen w-full flex-col bg-slate-950">
      <Header />
      <section id="home">
        <LampDemo />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </main>
  )
}
