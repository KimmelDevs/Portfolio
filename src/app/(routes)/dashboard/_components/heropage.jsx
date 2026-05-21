'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    if (heroRef.current && textRef.current && imageRef.current && bgRef.current) {
      bgRef.current.style.opacity = '1'
      textRef.current.style.opacity = '1'
      textRef.current.style.transform = 'translateX(0)'
      imageRef.current.style.opacity = '1'
      imageRef.current.style.transform = 'translateX(0)'
      heroRef.current.style.opacity = '1'
      heroRef.current.style.transform = 'scale(1)'
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative py-12 px-4 sm:px-6 lg:px-8 h-screen min-h-[600px] overflow-hidden"
      style={{
        opacity: 0,
        transform: 'scale(1.1)',
        transition: 'opacity 1s ease-out, transform 1.2s ease-out',
      }}
    >
      <div
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0, transition: 'opacity 1.5s ease-out' }}
      >
        <Image src="/background7.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <div
            ref={textRef}
            className="md:pl-10 md:w-2/3 text-center md:text-left"
            style={{
              opacity: 0,
              transform: 'translateX(-50px)',
              transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
            }}
          >
            <p className="text-blue-200 mb-2 text-lg" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
              Hello, I&apos;m
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
              <span className="text-blue-300">Kimmel</span> Delector
            </h1>
            <h2 className="text-2xl md:text-3xl text-white mb-4" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
              Full-Stack Developer & CS Student
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-xl mb-6">
              Building Android, web, and AI-powered applications. Civil Service passer. CGPA 1.37.
            </p>
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a
                href="https://github.com/KimmelDevs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                View GitHub
              </a>
              <a
                href="mailto:kimmelaldrichdelector@gmail.com"
                className="px-6 py-3 border border-white/40 hover:bg-white/10 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div
            ref={imageRef}
            className="md:w-1/3 mt-8 md:mt-0 flex justify-center md:justify-end"
            style={{
              opacity: 0,
              transform: 'translateX(50px)',
              transition: 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s',
            }}
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
              <Image src="/kimmel1.jpg" alt="Kimmel Delector" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
