'use client'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

export default function Footer() {
  return (
    <footer className="bg-neutral-100 pt-16 pb-8">
      <div className="container-custom px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <div>
              <h3 className="text-2xl font-serif text-primary mb-4">Dr. Maya Reynolds</h3>
              <p className="text-neutral-700 mb-4">
                1234 Ocean Avenue<br />
                Santa Monica, CA 90401
              </p>
              <p className="text-neutral-700">
                <a href="mailto:contact@mayareynolds.com" className="hover:text-primary transition-colors">
                  contact@mayareynolds.com
                </a>
                <br />
                <a href="tel:+13105551234" className="hover:text-primary transition-colors">
                  (310) 555-1234
                </a>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <div>
              <h3 className="text-xl font-serif text-primary mb-4">Hours</h3>
              <p className="text-neutral-700 leading-relaxed">
                Monday – Friday<br />
                9:00 AM – 6:00 PM<br />
                <span className="text-sm mt-2 block">
                  By appointment only
                </span>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={0.3}>
            <div>
              <h3 className="text-xl font-serif text-primary mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#services" className="text-neutral-700 hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-neutral-700 hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#office" className="text-neutral-700 hover:text-primary transition-colors">
                    Office
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-neutral-700 hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-neutral-700 hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-in" delay={0.4}>
          <div className="border-t border-neutral-300 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6 text-sm text-neutral-600">
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/disclaimer" className="hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </div>
              <p className="text-sm text-neutral-600">
                © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}