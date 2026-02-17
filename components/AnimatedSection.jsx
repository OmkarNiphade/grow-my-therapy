'use client'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AnimatedSection({ 
  children, 
  animation = 'fade-in-up',
  className = '',
  delay = 0,
  once = true 
}) {
  const [ref, isVisible] = useScrollAnimation({ once, threshold: 0.1 })

  return (
    <div 
      ref={ref}
      className={`${animation} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
