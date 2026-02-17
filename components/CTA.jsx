'use client'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

export default function CTA() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container-custom text-center">
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            Ready to Begin Therapy in Santa Monica?
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Taking the first step can feel overwhelming, but you don't have to do it alone. I'm here to provide a safe, supportive space for your healing journey.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <Link href="/contact" className="bg-white text-primary px-10 py-4 rounded-md font-semibold text-lg hover:bg-neutral-100 transition-colors inline-block">
            Schedule Your Free Consultation
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}