'use client'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { devExperiencesData } from '~/lib/data'
import React from 'react'
import { useSectionInView } from '~/utils/hooks'
import { useThemeContext } from '~/lib/themeContext'

export default function ExperienceSection() {
  const { ref, inView } = useSectionInView('Timeline', 0.1)
  const { theme } = useThemeContext()

  return (
    <div ref={ref} className="relative mb-28 scroll-mt-28 sm:mb-40">
      <div>
        <div>
          <VerticalTimeline animate lineColor="#186D6B">
            {devExperiencesData.map((item, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  visible={inView}
                  contentStyle={{
                    background:
                      theme === 'light' ? '#f3f4f6' : 'rgba(255,255,255, 0.05)',
                    boxShadow: 'none',
                    border: '1px solid rgba(0,0,0, 0.5)',
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                  }}
                  contentArrowStyle={{
                    borderRight:
                      theme === 'light'
                        ? '.4rem solid  #186D6B'
                        : '.4rem solid #186D6B',
                  }}
                  date={item.date}
                  iconStyle={{
                    background: theme === 'light' ? 'white' : '#186D6B',
                    fontSize: '1.5rem',
                  }}
                >
                  <h3 className="font-semibold capitalize">{item.title}</h3>
                  {item.courses && (
                    <ul className="my-4 flex list-disc flex-col gap-1 text-sm font-normal italic">
                      {item.courses.length > 0 &&
                        item.courses.map((course, index) => (
                          <li key={index} className="!mt-0">
                            {course}
                          </li>
                        ))}
                    </ul>
                  )}
                  <p className="!dark:text-white/50 !mt-1 !font-normal !text-gray-700">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}
