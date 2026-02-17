'use client'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AnimatedSection animation="fade-in-up" delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight">
                Anxiety & Trauma Therapist in Santa Monica, CA
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={0.2}>
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                You deserve a space where you can breathe, process, and heal. Whether you're navigating anxiety, recovering from trauma, or feeling the weight of perfectionism, therapy can help you find clarity and peace. I'm here to walk alongside you with compassion and evidence-based care.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={0.3}>
              <Link href="/contact" className="btn-primary">
                Schedule a Free 15-Min Consultation
              </Link>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in" delay={0.2}>
            <div className="relative h-96 md:h-128 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
                    alt="Dr. Maya Reynolds - Therapist in Santa Monica"
                    className="w-full h-full object-cover"
                />
              <div className="w-full h-full bg-secondary/30 flex items-center justify-center text-neutral-600">
                [Therapist Professional Photo]
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}