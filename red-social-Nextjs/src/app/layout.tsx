import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import { Lexend } from 'next/font/google'

import './globals.css'
import Link from 'next/link'

const mulish = Mulish({ 
  subsets: ['latin'],
  variable: '--font-mulish'
})
const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend'
})


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${mulish.variable} ${lexend.variable}`}>
        <header>
          <nav>
            <div>
              <Link href='/explore'>LOGO</Link>
            </div>          
          </nav>
        </header>

        {children}
      </body>

    </html>
  )
}
