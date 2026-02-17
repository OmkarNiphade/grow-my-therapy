'use client'
import AnimatedSection from './AnimatedSection'

export default function About() {
  return (
    <section id="about" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-in-left">
            <div className="relative h-88 md:h-128 rounded-2xl overflow-hidden shadow-xl">
                <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Therapy office in Santa Monica"
                className="w-full h-full object-cover"
            />
              <div className="w-full h-full bg-secondary/20 flex items-center justify-center text-neutral-600">
                [About/Office Photo]
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection animation="fade-in-up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary">
                About Dr. Maya Reynolds
              </h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={0.2}>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  I believe therapy is most effective when you feel truly seen and understood. My approach is warm, collaborative, and grounded in evidence-based methods including Cognitive Behavioral Therapy (CBT), EMDR, mindfulness practices, and body-based therapy.
                </p>
                
                <p>
                  I specialize in working with adults navigating anxiety, trauma, burnout, and perfectionism. Whether you're dealing with overwhelming stress, healing from past experiences, or seeking to break free from patterns that no longer serve you, I'm here to support your journey.
                </p>
                
                <p>
                  Based in Santa Monica, I offer both in-person sessions at my private office and telehealth appointments throughout California. My goal is to create a calm, safe space where you can explore, heal, and grow at your own pace.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={0.3}>
              <div className="pt-4">
                <h3 className="text-xl font-serif text-primary mb-3">Credentials & Approach</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Licensed Clinical Psychologist (PsyD)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>EMDR Certified Therapist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Trauma-Informed Care Specialist</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}