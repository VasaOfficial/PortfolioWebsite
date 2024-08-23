'use client'
import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import s from '~/styles/s.module.css'

export default function ModalSetLang() {
  const searchParams = useSearchParams()
  const query = Object.fromEntries(searchParams.entries())
  const modalRef = useRef<HTMLDivElement>(null)

  const [isShow, setIsShow] = useState(false)

  const toggleShow = () => setIsShow((prev) => !prev)

  const getLanguageCode = () => {
    return query.setLn ?? 'en'
  }

  // close modal on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsShow(false)
      }
    }

    if (isShow) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isShow])

  return (
    <div className={s.content}>
      <button
        onClick={toggleShow}
        className={`header__theme-btn header__lang-btn select_line ring-white ring-opacity-60 focus:outline-none focus:ring-2 ${isShow ? 'select_line-active' : ''}`}
      >
        {getLanguageCode()}
      </button>
      <div
        ref={modalRef}
        className={`${s.modal_window} ${isShow ? s.modal_visible : ''} modal_l03`}
        aria-hidden={!isShow}
      >
        <ul>
          <li>
            <Link href="/?setLn=en">English</Link>
          </li>
          <li>
            <Link href="/?setLn=fr">French - Français</Link>
          </li>
          <li>
            <Link href="/?setLn=pl">Polish - Polski</Link>
          </li>
          <li>
            <Link href="/?setLn=es">Spanish - Español</Link>
          </li>
          <li>
            <Link href="/?setLn=de">German - Deutsch</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
