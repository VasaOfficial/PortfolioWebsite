'use client'
import Image from 'next/image'
import { useSectionInView } from '~/lib/hooks'
import Link from 'next/link'
import { projects } from '~/data/projectData'

export default function Projects() {
  const { ref } = useSectionInView('Projects')

  return (
    <div ref={ref} className="content_wrapper z-50 m-auto mb-20 mt-7 flex flex-col gap-20 space-y-10 w-full max-w-[55%]">
      {projects.map((project, index) => (
        <div key={index} className="flex justify-between max-h-[205px] h-full">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <div className="projects__stack text-black">
              {project.stack.map((tech, i) => (
                <span key={i} aria-label={tech}>{tech}</span>
              ))}
            </div>
            <p className="project__desc max-w-[600px]">{project.description}</p>
            <div className="project__links">
              {project.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className="grho"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Image
            className="rounded h-auto"
            src={project.image.src}
            alt={project.image.alt}
            width={350}
            height={205}
          />
        </div>
      ))}
    </div>
  )
}
