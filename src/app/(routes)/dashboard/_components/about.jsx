'use client'
import { useEffect, useRef } from 'react'
import { Card } from './ui/card'

export default function About() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardRefs = useRef([])

  const skills = [
    { title: "Full-Stack Development", description: "Building end-to-end web and mobile applications using React, Next.js, Kotlin, TypeScript, and Node.js with real-world deployment experience.", icon: "💻" },
    { title: "AI & Machine Learning", description: "Developing TensorFlow computer vision models for face detection and object identification, and integrating AI-driven workflows into development pipelines.", icon: "🤖" },
    { title: "Database Architecture", description: "Designing and managing databases using MySQL, Firebase Firestore, and SQLite. Experienced in data integrity, security, and optimized query design.", icon: "🗄️" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (sectionRef.current) { sectionRef.current.style.opacity = '1'; sectionRef.current.style.transform = 'scale(1)' }
          if (headingRef.current) { headingRef.current.style.opacity = '1'; headingRef.current.style.transform = 'translateY(0)' }
          cardRefs.current.forEach((card, i) => {
            if (card) setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateX(0)' }, 200 * i)
          })
          observer.disconnect()
        }
      })
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen"
      style={{ opacity: 0, transform: 'scale(0.95)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
    >
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-800 to-purple-400">
        <div ref={headingRef} className="text-center mb-12" style={{ opacity: 0, transform: 'translateY(-20px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            I&apos;m a Computer Science student at Northwest Samar State University (CGPA: 1.37) with hands-on experience 
            in full-stack development, mobile apps, AI, and IoT. Civil Service passer with an 83% score. 
            Currently freelancing while finishing my degree, delivering custom software solutions for clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {skills.map((skill, index) => (
            <Card
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="p-6 rounded-2xl shadow-lg border border-white/30 bg-white/20 backdrop-blur-md text-center hover:shadow-lg transition-all"
              style={{ opacity: 0, transform: 'translateX(-30px)', transition: `opacity 0.5s ease-out ${index * 0.2}s, transform 0.5s ease-out ${index * 0.2}s` }}
            >
              <span className="text-4xl block mb-4">{skill.icon}</span>
              <h2 className="text-xl font-semibold text-white mb-2">{skill.title}</h2>
              <p className="text-white/90 text-sm">{skill.description}</p>
            </Card>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "1.37", label: "CGPA" },
            { value: "83%", label: "Civil Service Score" },
            { value: "8+", label: "Projects Built" },
            { value: "3", label: "Years Experience" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-xl bg-white/10 border border-white/20">
              <p className="text-3xl font-bold text-blue-200">{stat.value}</p>
              <p className="text-white/80 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
