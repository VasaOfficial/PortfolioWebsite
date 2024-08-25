'use client'
import Image from 'next/image'
import Portfolio from '../../public/assets/wp1892227.jpg'
import { useSectionInView } from '~/lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView('Projects')

  return (
    <div
      ref={ref}
      className="content_wrapper z-50 m-auto mb-20 mt-7 flex w-full max-w-[55%] justify-between"
    >
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">Odyssey Travel</h1>
        <div className="projects__stack text-black">
          <span aria-label="Kubernetes">Kubernetes</span>
          <span aria-label="Docker">Docker</span>
          <span aria-label="AWS">AWS</span>
        </div>
        <p className="project__desc max-w-[600px]">
          An Instagram extension that allows users to disable Reels, Stories,
          recommendations, vanity metrics, and customize themes, fonts, and
          more. Has ~3400 active users across all platforms.
        </p>
        <div className="project__links">
          <a
            href="https://weblxapplications.com/igp/"
            target="_blank"
            rel="noopener"
            className="grho"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
            Live Preview
          </a>
          <a
            href="https://github.com/gerwld/igplus-extension/"
            target="_blank"
            rel="noopener"
            className="grho"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
            View Source
          </a>
        </div>
      </div>
      <Image
        className="rounded"
        src={Portfolio}
        alt="Linux"
        width={350}
        height={185}
      />
    </div>
  )
}
