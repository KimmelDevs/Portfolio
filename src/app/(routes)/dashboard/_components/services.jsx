'use client'
import { Code, Smartphone, Database, Brain, Cpu, Globe } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { useEffect, useRef } from 'react'

export default function Services() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardRefs = useRef([])

  const services = [
    { id: 1, name: "Web Development", description: "Full-stack web applications using React, Next.js, and Node.js with responsive design and robust functionality.", icon: <Code className="w-10 h-10 text-white" />, tags: ["React", "Next.js", "Node.js"], color: "from-blue-500 to-teal-600" },
    { id: 2, name: "Android Development", description: "Native Android apps in Kotlin+XML or Jetpack Compose with Firebase integration and clean architecture.", icon: <Smartphone className="w-10 h-10 text-white" />, tags: ["Kotlin", "XML", "Firebase"], color: "from-green-500 to-emerald-600" },
    { id: 3, name: "Database Architecture", description: "Efficient database design and management using SQL and NoSQL solutions with a focus on data integrity and security.", icon: <Database className="w-10 h-10 text-white" />, tags: ["MySQL", "Firebase", "SQLite"], color: "from-yellow-500 to-amber-600" },
    { id: 4, name: "AI & Computer Vision", description: "Building and deploying TensorFlow models for face detection, object identification, and AI-powered mobile/web features.", icon: <Brain className="w-10 h-10 text-white" />, tags: ["TensorFlow", "Python", "Vision AI"], color: "from-purple-500 to-violet-600" },
    { id: 5, name: "IoT & ESP-32", description: "Integrating ESP-32 microcontrollers with web and mobile apps using MicroPython, including payment gateway connections.", icon: <Cpu className="w-10 h-10 text-white" />, tags: ["ESP-32", "MicroPython", "PayMongo"], color: "from-pink-500 to-rose-600" },
    { id: 6, name: "API Integration", description: "Connecting third-party APIs, payment gateways, and external services into seamless full-stack workflows.", icon: <Globe className="w-10 h-10 text-white" />, tags: ["REST API", "PayMongo", "Webhooks"], color: "from-indigo-500 to-purple-600" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (sectionRef.current) { sectionRef.current.style.opacity = '1'; sectionRef.current.style.transform = 'translateY(0)' }
          if (headingRef.current) { headingRef.current.style.opacity = '1'; headingRef.current.style.transform = 'translateY(0)' }
          cardRefs.current.forEach((card, i) => {
            if (card) setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)' }, 100 * i)
          })
          observer.disconnect()
        }
      })
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-14"
          style={{ opacity: 0, transform: 'translateY(-20px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>What I Do</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Services and skills I offer as a full-stack developer and software engineer</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} ref={el => cardRefs.current[index] = el}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s` }}>
              <div className={`p-6 bg-gradient-to-br ${service.color}`}>
                <div className="mb-3">{service.icon}</div>
                <CardTitle className="text-white text-xl mb-1">{service.name}</CardTitle>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
