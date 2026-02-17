'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const instagramImages = [
    '/images/image.jpg',
    'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600&q=80',
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&q=80'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for reaching out! I\'ll get back to you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const scrollToContactForm = (e) => {
    e.preventDefault()
    const formSection = document.getElementById('contact-form')
    if (formSection) {
      formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })

      setTimeout(() => {
        const nameInput = document.getElementById('name')
        if (nameInput) nameInput.focus()
      }, 800)
    }
  }

  return (
    <>
      <Navbar />
      
      <section className="relative bg-neutral-100 pt-32 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <AnimatedSection animation="fade-in-up" delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary mb-6">
                  Let's Connect
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up" delay={0.2}>
                <p className="text-xl text-neutral-700 mb-4">
                  Starting therapy is courageous.
                </p>
                <p className="text-lg text-neutral-700">
                  Get in touch for questions, or to book a free 15-minute consultation.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={0.3}>
                <div className="mt-12 flex gap-4">
                  <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80"
                      alt="Lilac flowers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mt-8">
                    <img 
                      src="/images/flower.jpg"
                      alt="White flowers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="slide-in-right" delay={0.2}>
              <div className="bg-primary text-white p-8 rounded-lg shadow-xl">
                <p className="text-lg leading-relaxed">
                  <strong className="block mb-2">PLEASE NOTE:</strong> 
                  If you opt to use a "Form Block" on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="contact-form" className="section-padding bg-white scroll-mt-20">
        <div className="container-custom max-w-4xl">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-neutral-700">
                Fill out the form below and I'll respond within 24 hours
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="(555) 555-5555"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me a bit about what brings you to therapy..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              Book an appointment.
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <p className="text-lg text-neutral-700 mb-8 max-w-3xl mx-auto">
              Ready to take the first step? I offer free 15-minute consultations to answer your questions and see if we're a good fit. You can reach out via the contact form above, or call/email directly to schedule.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <div className="bg-white p-12 rounded-lg shadow-lg max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif text-primary mb-4">Schedule Your Session</h3>
                  <p className="text-neutral-700 mb-6">
                    Contact me to book your free 15-minute consultation or first therapy session.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 text-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+13105551234" className="text-primary hover:text-primary-600 transition-colors font-medium">
                      (310) 555-1234
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-3 text-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contact@mayareynolds.com" className="text-primary hover:text-primary-600 transition-colors font-medium">
                      contact@mayareynolds.com
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600">
                    Available Monday – Friday, 9:00 AM – 6:00 PM PST<br />
                    Response time: Within 24 hours
                  </p>
                </div>

                <button 
                  onClick={scrollToContactForm}
                  className="btn-primary inline-block cursor-pointer"
                >
                  Fill Out Contact Form
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-serif mb-6">
                  My Office
                </h2>
                <p className="text-xl mb-4">
                  1234 Ocean Avenue<br />
                  Santa Monica, CA 90401
                </p>
                <div className="mt-8">
                  <h3 className="text-2xl font-serif mb-4">Hours</h3>
                  <p className="text-lg">
                    Monday – Friday<br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={0.2}>
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d364448.3711099173!2d-118.66920268077688!3d33.98593445187525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4c505d6e4d3%3A0xa956840b38546da8!2s1234%20Ocean%20Ave%2C%20Santa%20Monica%2C%20CA%2090401%2C%20USA!5e1!3m2!1sen!2sin!4v1771216505099!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-12 text-center">
              Find me on social.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramImages.map((image, index) => (
              <AnimatedSection 
                key={index}
                animation="scale-in" 
                delay={0.1 * index}
              >
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <img 
                    src={image}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-in-up" delay={0.4}>
            <div className="text-center mt-8">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-600 transition-colors text-lg font-medium"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow @drmayareynolds
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  )
}