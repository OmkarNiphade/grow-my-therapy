'use client'
import AnimatedSection from './AnimatedSection'

export default function OfficeSection() {

const officeImages = [
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80',
  '/images/office1.jpg',
  'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=600&q=80',
]

  return (
    <section id="office" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-4">
              A Calm Space in Santa Monica
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              My office is designed to be a safe, private, and comfortable environment where you can feel at ease. Located in the heart of Santa Monica, the space offers a warm atmosphere with natural lighting and calming decor.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
        {officeImages.map((image, index) => (
            <AnimatedSection
            key={index}
            animation="scale-in"
            delay={0.1 * (index + 1)}
            >
            <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                src={image}
                alt={`Office interior ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            </AnimatedSection>
        ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8 bg-neutral-50 p-8 rounded-xl">
            <div>
              <h3 className="text-2xl font-serif text-primary mb-4">In-Person Sessions</h3>
              <p className="text-neutral-700 leading-relaxed">
                I offer in-person therapy sessions at my private practice in Santa Monica. The office provides a peaceful retreat from daily stressors, with comfortable seating, soft lighting, and a calming atmosphere designed to help you feel grounded and present.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-primary mb-4">Telehealth Available</h3>
              <p className="text-neutral-700 leading-relaxed">
                Can't make it to the office? I also offer secure telehealth sessions for clients throughout California. This option provides the same quality care from the comfort and privacy of your own space.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}