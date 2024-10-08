'use client'
import Link from 'next/link'
import { MotionDiv, MotionLi, MotionSpan } from '~/utils/framer'
import { links } from '~/lib/data'
import { useActiveSectionContext } from '~/lib/context'

import clsx from 'clsx'

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()

  return (
    <header className="relative z-[999] ">
      <MotionDiv
        initial={{ y: -200, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:border-black/40 dark:bg-customGreen1 dark:bg-opacity-75"
      ></MotionDiv>

      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-customGreen2 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <MotionLi
              className="relative flex h-3/4 items-center justify-center"
              key={link.hash}
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
                className={clsx(
                  'flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-200 dark:hover:text-gray-400',
                  {
                    'text-slate-950 dark:text-slate-950':
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
              >
                {link.name}
                {link.name === activeSection && (
                  <MotionSpan
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-customGreen2"
                  >
                    {' '}
                  </MotionSpan>
                )}
              </Link>
            </MotionLi>
          ))}
        </ul>
      </nav>
    </header>
  )
}
