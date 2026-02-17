'use client'
import AnimatedSection from './AnimatedSection'

export default function ContactHero() {
  return (
    <section className="relative bg-neutral-100 section-padding min-h-[70vh] flex items-center">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AnimatedSection animation="fade-in-up" delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary leading-tight">
                Let's Connect
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={0.2}>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Starting therapy is courageous.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={0.3}>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Get in touch for questions, or to book a free 15-minute consultation.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={0.4}>
              <div className="flex gap-4 mt-8">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-secondary/20 flex items-center justify-center text-xs text-neutral-600">
                    [Flower 1]
                  </div>
                </div>
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-secondary/30 flex items-center justify-center text-xs text-neutral-600">
                    [Flower 2]
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <div className="bg-primary text-white p-8 rounded-xl shadow-xl">
              <p className="text-lg leading-relaxed">
                <strong className="text-accent text-xl">PLEASE NOTE:</strong> For secure communication, 
                I use a HIPAA-compliant contact form and client portal. Email is provided for general 
                inquiries only. For confidential matters or to schedule your consultation, please use 
                the contact form below or call directly at{' '}
                <a href="tel:+13105551234" className="underline hover:text-accent transition-colors">
                  (310) 555-1234
                </a>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}