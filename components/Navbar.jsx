'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'
    }`}>
      <div className="container-custom px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center h-20">

          <Link href="/" className="text-2xl font-serif text-primary font-semibold hover:text-primary-600 transition-colors">
            Dr. Maya Reynolds
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/#services" className="text-neutral-800 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-neutral-800 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#office" className="text-neutral-800 hover:text-primary transition-colors">
              Office
            </Link>
            <Link href="/#faq" className="text-neutral-800 hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-600 transition-all hover:shadow-lg">
              Contact
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-fadeIn">
            <Link 
              href="/#services" 
              className="block text-neutral-800 hover:text-primary py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/#about" 
              className="block text-neutral-800 hover:text-primary py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/#office" 
              className="block text-neutral-800 hover:text-primary py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Office
            </Link>
            <Link 
              href="/#faq" 
              className="block text-neutral-800 hover:text-primary py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="block bg-primary text-white px-6 py-2 rounded-md text-center hover:bg-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}