import '~/styles/globals.css'

import { type Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import { ActiveSectionContextProvider } from '~/lib/context'

const NotoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Vasa Portfolio Website',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}
// !scroll-smooth
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${NotoSans.className}`}
    >
      <body>
        <ActiveSectionContextProvider>
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
