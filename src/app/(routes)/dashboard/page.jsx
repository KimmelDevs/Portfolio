'use client'
import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import Image from 'next/image'
import { Mail, Phone, Github, MapPin } from 'lucide-react'

const About = lazy(() => import('./_components/about'))
const Services = lazy(() => import('./_components/services'))
const Projects = lazy(() => import('./_components/works'))
const Hero = lazy(() => import('./_components/heropage'))
const Contacts = lazy(() => import('./_components/contact'))

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
)

export default function DashboardPage() {
  const headerRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const scrollTimeoutId = useRef(null)
  const timeoutId = useRef(null)

  const scrollTo = (ref, section) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsHeaderVisible(true)
    setActiveSection(section)
  }

  useEffect(() => {
    let isMounted = true
    const handleScroll = () => {
      if (!isMounted) return
      if (scrollTimeoutId.current) return
      scrollTimeoutId.current = setTimeout(() => {
        const currentScrollY = window.scrollY
        const sections = [
          { ref: headerRef, id: 'home' },
          { ref: aboutRef, id: 'about' },
          { ref: servicesRef, id: 'services' },
          { ref: projectsRef, id: 'projects' },
          { ref: contactRef, id: 'contact' },
        ]
        for (const section of sections) {
          const el = section.ref.current
          if (el) {
            const { top, height } = el.getBoundingClientRect()
            if (top <= 100 && top + height > 100) { setActiveSection(section.id); break }
          }
        }
        if (currentScrollY < lastScrollY) setIsHeaderVisible(true)
        else if (currentScrollY > 100 && currentScrollY > lastScrollY) setIsHeaderVisible(false)
        setLastScrollY(currentScrollY)
        scrollTimeoutId.current = null
      }, 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      isMounted = false
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId.current)
      clearTimeout(scrollTimeoutId.current)
    }
  }, [lastScrollY])

  const navSections = [
    { id: 'home', ref: headerRef },
    { id: 'about', ref: aboutRef },
    { id: 'services', ref: servicesRef },
    { id: 'projects', ref: projectsRef },
    { id: 'contact', ref: contactRef },
  ]

  return (
    <div className="min-h-screen relative bg-white">
      {/* Fixed Header */}
      <header
        ref={headerRef}
        className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'} bg-white shadow-md border-b border-gray-100`}
        onMouseEnter={() => { setIsHovering(true); setIsHeaderVisible(true); clearTimeout(timeoutId.current) }}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
              <Image src="/kimmel1.jpg" alt="Kimmel" fill className="object-cover" />
            </div>
            <span className="font-bold text-gray-800 text-lg" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
              Kimmel<span className="text-blue-600">.dev</span>
            </span>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8 items-center">
              {navSections.map(({ id, ref }) => (
                <li key={id} className="relative">
                  <button
                    onClick={() => scrollTo(ref, id)}
                    className="text-gray-800 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium group"
                    style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                    <span className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <a href="mailto:kimmelaldrichdelector@gmail.com"
            className="hidden md:block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-medium transition-all">
            Hire Me
          </a>
        </div>
      </header>

      <main>
        <section ref={headerRef}>
          <Suspense fallback={<LoadingSpinner />}><Hero /></Suspense>
        </section>

        <section ref={aboutRef}>
          <Suspense fallback={<LoadingSpinner />}><About /></Suspense>
        </section>

        <section ref={servicesRef}>
          <Suspense fallback={<LoadingSpinner />}><Services /></Suspense>
        </section>

        <section ref={projectsRef}>
          <Suspense fallback={<LoadingSpinner />}><Projects /></Suspense>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="bg-gradient-to-br from-blue-900 to-purple-900 py-16">
          <Suspense fallback={<LoadingSpinner />}><Contacts /></Suspense>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
                <Image src="/kimmel1.jpg" alt="Kimmel" fill className="object-cover" />
              </div>
              <span className="font-bold text-lg">Kimmel<span className="text-blue-400">.dev</span></span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Full-stack developer & CS student building web, mobile, and AI-powered applications.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {navSections.map(({ id, ref }) => (
                <li key={id}>
                  <button onClick={() => scrollTo(ref, id)} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" /><span>kimmelaldrichdelector@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" /><span>+63 954 152 8701</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" /><span>Gandara, Samar, Philippines</span>
              </div>
              <a href="https://github.com/KimmelDevs" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <Github className="w-4 h-4" /><span>github.com/KimmelDevs</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Kimmel Aldrich Tan Delector. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
