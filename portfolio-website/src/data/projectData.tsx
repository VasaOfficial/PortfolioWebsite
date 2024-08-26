import { type StaticImageData } from 'next/image'
import MovieLibraryImage from '../../public/assets/projects/MovieLibrary.png'
import EarthSensorImage from '../../public/assets/projects/EarthSensor.png'
import InteriorPaintingImage from '../../public/assets/projects/moleraj.png'

type projects = {
  title: string
  stack: string[]
  description: string
  links: { href: string; label: string }[]
  image: { src: StaticImageData; alt: string }
}

export const projects: projects[] = [
  {
    title: 'EarthSensor',
    stack: ['TypeScript', 'React', 'Next.js'],
    description:
      'EarthSensor provides air pollution and weather information for cities around the world. The app fetches data from the Aqicn REST API and presents it in a user-friendly format using graphs.',
    links: [
      { href: 'https://earth-sensor.vercel.app/', label: 'Live Preview' },
      {
        href: 'https://github.com/VasaOfficial/EarthSensor',
        label: 'View Source',
      },
    ],
    image: {
      src: EarthSensorImage,
      alt: 'EarthSensor',
    },
  },
  {
    title: 'Interior Painting Business',
    stack: ['TypeScript', 'React', 'Next.js'],
    description:
      'An landing page for the interior painting business. Made with TypeScript and React.',
    links: [
      { href: 'https://moleraj-beograd.vercel.app/', label: 'Live Preview' },
      {
        href: 'https://github.com/VasaOfficial/MolerajSajt',
        label: 'View Source',
      },
    ],
    image: {
      src: InteriorPaintingImage,
      alt: 'Interior Painting Business',
    },
  },
  {
    title: 'MovieLibrary',
    stack: ['OpenAI', 'TypeScript', 'React', 'Next.js'],
    description:
      'An AI based tool for movie and tv shows searching and recommendations.',
    links: [
      {
        href: 'https://github.com/VasaOfficial/MovieLibrary',
        label: 'Live Preview',
      },
      {
        href: 'https://github.com/VasaOfficial/MovieLibrary',
        label: 'View Source',
      },
    ],
    image: {
      src: MovieLibraryImage,
      alt: 'MovieLibrary',
    },
  },
]
