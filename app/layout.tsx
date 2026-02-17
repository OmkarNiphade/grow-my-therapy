import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica, CA',
  description: 'Compassionate therapy for anxiety, trauma, burnout, and perfectionism in Santa Monica. Dr. Maya Reynolds offers CBT, EMDR, and mindfulness-based therapy.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-neutral-50 text-neutral-800">
        {children}
      </body>
    </html>
  )
}
