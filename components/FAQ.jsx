'use client'
import { useState } from 'react'
import AnimatedSection from './AnimatedSection'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Do you offer telehealth sessions?",
      answer: "Yes! I offer secure, HIPAA-compliant telehealth sessions for clients throughout California. Telehealth provides the same quality of care as in-person sessions and can be a convenient option if you prefer meeting from home or have scheduling constraints."
    },
    {
      question: "What therapy approaches do you use?",
      answer: "I use evidence-based approaches including Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based techniques, and body-based therapy. I tailor my approach to fit your unique needs and goals, creating a personalized treatment plan together."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Standard therapy sessions are 50 minutes long. I also offer a free 15-minute consultation call to answer questions and determine if we're a good fit before committing to a full session."
    },
    {
      question: "Who do you work with?",
      answer: "I specialize in working with adults who are navigating anxiety, trauma, burnout, and perfectionism. Whether you're dealing with overwhelming stress, healing from past experiences, or seeking to build healthier patterns, I'm here to support you with compassion and expertise."
    }
  ]

  return (
    <section id="faq" className="section-padding bg-neutral-50">
      <div className="container-custom max-w-4xl">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-700">
              Have questions? I'm here to help.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection 
              key={index}
              animation="fade-in-up" 
              delay={0.1 * (index + 1)}
            >
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-neutral-200">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-primary pr-4">
                    {faq.question}
                  </h3>
                  <svg 
                    className={`w-6 h-6 text-primary transition-transform flex-shrink-0 ${openIndex === index ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5 animate-fadeIn">
                    <p className="text-neutral-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}