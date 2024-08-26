export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Timeline',
    hash: '#timeline',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
] as const

type devExperience = {
  title: string
  courses?: string[]
  stack?: string[]
  description: string
  date: string
}
export const devExperiencesData: readonly devExperience[] = [
  {
    title: 'Completed several Udemy online courses',
    description:
      'Even though my goal was to focus on more modern web development technologies, I decided to start with the basics. I completed several online courses to get a solid foundation in web development.',
    date: 'August 2023 - October 2023',
  },
  {
    title: 'Built my first solo project (Static website)',
    stack: ['HTML', 'SCSS', 'JavaScript'],
    description:
      'My first project was a static website for a small local handcraft business.',
    date: 'November 2023 - December 2023',
  },
  {
    title: "Completed Jonas Schmedtmann's The Ultimate React Course",
    description:
      "After finishing my first project I continued with focusing on React, so I completed Jonas Schmedtmann's React course and started planning my next solo project.",
    date: 'January 2024',
  },
  {
    title: 'Built my first SPA project with React',
    stack: ['React', 'Tailwind CSS', 'Supabase'],
    description:
      'I decided to build an app for myself, as I never really liked native browser bookmarks. So I built a simple CRUD application for saving and categorizing bookmarks for my favourite resources for learning web development.',
    date: 'February 2024 - March 2024',
  },
  {
    title: 'Started learning Next.js',
    description:
      'After going through projects and courses with plain JavaScript, and then React, I decided to focus all of my time on learning and mastering Next.js, so I completed several courses and code-alongs to get as much code through my fingers as possible.',
    date: 'March 2024 - indefinitely',
  },
  {
    title: 'Completed corporate blog website',
    stack: ['Next.js', 'Tailwind CSS'],
    description:
      'After diving into multiple full-stack projects with Next.js, I decided to take a small turn back to the front-end and build a corporate blog website focusing on clean design and high performance.',
    date: 'June 2024',
  },
] as const
