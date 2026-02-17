'use client'
import AnimatedSection from './AnimatedSection'

export default function Services() {
  const services = [
    {
      title: "Anxiety Therapy in Santa Monica",
      description: "Learn to manage overwhelming worry, panic, and stress through proven techniques that help you regain control and find calm in your daily life."
    },
    {
      title: "Trauma Therapy in Santa Monica",
      description: "Heal from past experiences with EMDR and trauma-focused approaches designed to help you process pain and move forward with resilience."
    },
    {
      title: "Burnout Counseling in Santa Monica",
      description: "Reconnect with yourself and restore balance when exhaustion and overwhelm have taken over your work, relationships, and well-being."
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-4">
              Services
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Compassionate, evidence-based therapy tailored to your unique needs
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index}
              animation="fade-in-up" 
              delay={0.1 * (index + 1)}
            >
              <div className="bg-neutral-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-neutral-200 h-full">
                <h3 className="text-2xl font-serif text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}