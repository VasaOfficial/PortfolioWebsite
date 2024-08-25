'use client'
import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react'
import type { SectionName } from '~/lib/types'

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: Dispatch<SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: Dispatch<SetStateAction<number>>
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
)

export const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext)
  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider',
    )
  }
  return context
}
