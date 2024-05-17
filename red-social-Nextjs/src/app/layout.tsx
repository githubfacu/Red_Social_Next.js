import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import { Lexend } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/layout/Navbar'
import { cookies } from 'next/headers'

const mulish = Mulish({ 
  subsets: ['latin'],
  variable: '--font-mulish'
})
const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend'
})


export const metadata: Metadata = {
  title: 'The Red Social',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const loggedUsername = cookies().get('SocialUsername')

  return (
    <html lang="en">

      <body className={`${mulish.variable} ${lexend.variable}`}>
        <Navbar loggedUsername={loggedUsername?.value}/>
        {children}
      </body>

    </html>
  )
}
