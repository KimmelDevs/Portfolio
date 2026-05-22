'use client'
import Image from 'next/image'
import { useState, useRef, useEffect, useCallback } from 'react'
import { Smartphone, Globe, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

export default function Works() {
  const [lightbox, setLightbox] = useState(null) // { project, index }
  const sectionRef = useRef(null)
  const projectRefs = useRef([])

  const allProjects = [
    {
      id: 11,
      name: "RFID/DOOR – ESP-32 Servo Smart House",
      description: "IoT smart house model with RFID access control, servo-driven door & roof, MQTT, PayMongo payments, and a dino game easter egg.",
      tags: ["ESP-32", "Next.js", "MQTT", "PayMongo", "RFID"],
      type: "iot",
      icon: "🔌",
      details: "A physical smart house model controlled by an ESP-32 microcontroller. RFID cards unlock the servo-powered door and roof. The companion web app lets admins manage users, view live scan logs, control the door remotely, top up access points via PayMongo, and push card data to the ESP-32. Features a hidden Dino Game easter egg.",
      gallery: [
        "/projects/esp32house/image13.jpeg",
        "/projects/esp32house/image16.jpeg",
        "/projects/esp32house/image17.jpeg",
        "/projects/esp32house/image14.jpeg",
        "/projects/esp32house/image15.jpeg",
        "/projects/esp32house/image1.png",
        "/projects/esp32house/image3.png",
        "/projects/esp32house/image8.png",
        "/projects/esp32house/image4.png",
        "/projects/esp32house/image5.png",
        "/projects/esp32house/image6.png",
        "/projects/esp32house/image7.png",
        "/projects/esp32house/image9.png",
        "/projects/esp32house/image10.png",
      ],
      technologies: ["ESP-32", "MicroPython", "Next.js", "TypeScript", "MQTT", "Firebase", "PayMongo"],
      features: ["RFID card access control", "Servo-driven door & roof", "Live MQTT scan log", "Admin dashboard", "PayMongo point top-up", "Remote door control", "Dino Game easter egg"]
    },
    {
      id: 3,
      name: "FitTitan",
      description: "Online fitness platform with personalized workout routines and progress tracking.",
      tags: ["Android", "Jetpack Compose", "Firebase"],
      type: "android",
      icon: "💪",
      details: "FitTitan offers personalized workout plans based on user goals and fitness levels. Includes video demonstrations, progress tracking, and social features to connect with other users.",
      gallery: ["/projects/fititan/intro.png","/projects/fititan/1.png","/projects/fititan/2.png","/projects/fititan/3.png","/projects/fititan/4.png","/projects/fititan/5.png"],
      technologies: ["Jetpack Compose", "Firebase Storage", "ExoPlayer", "Hilt DI"],
      features: ["Personalized workouts", "Video demonstrations", "Progress tracking", "Social features"]
    },
    {
      id: 7,
      name: "FitFlex Fitness Studio",
      description: "Gym attendance and membership management app for gym owners and members.",
      tags: ["Android", "XML", "Firebase"],
      type: "android",
      icon: "🏋️",
      details: "FitFlex Fitness Studio helps gym owners manage memberships and attendance. Members can check class schedules, book sessions, and track their attendance history.",
      gallery: ["/projects/fitflex/fitflex.png", "/projects/fitflex/fitflexintro.png", "/projects/fitflex/fitflex1.png","/projects/fitflex/fitflex2.png", "/projects/fitflex/fitflex3.png", "/projects/fitflex/fitflex4.png"],
      technologies: ["XML", "Firebase Auth", "Cloud Firestore"],
      features: ["Membership management", "Class scheduling", "Attendance tracking", "Payment processing"]
    },
    {
      id: 4,
      name: "Lost and Found",
      description: "Campus-based web platform to report and recover lost items in a university setting.",
      tags: ["Next.js", "Tailwind", "Firebase"],
      type: "web",
      icon: "🔍",
      details: "Lost and Found is a community platform for university campuses where students can report lost items and help others recover their belongings with image uploads and real-time notifications.",
      gallery: ["/projects/lostfound/intro.png","/projects/lostfound/1.png","/projects/lostfound/2.png","/projects/lostfound/3.png","/projects/lostfound/4.png","/projects/lostfound/5.png","/projects/lostfound/6.png","/projects/lostfound/7.png","/projects/lostfound/8.png"],
      technologies: ["Next.js API Routes", "Firebase Storage", "Cloud Firestore"],
      features: ["Item reporting", "Image uploads", "Location tagging", "Real-time notifications"]
    },
    {
      id: 10,
      name: "ProtoChain – Barangay Document System",
      description: "Thesis: a blockchain-secured platform for requesting, issuing, and verifying barangay documents with AES encryption and QR codes.",
      tags: ["Next.js", "Blockchain", "AES Encryption", "Firebase"],
      type: "web",
      icon: "🔐",
      details: "ProtoChain digitizes barangay document issuance using blockchain technology and AES encryption to ensure tamper-proof, verifiable records. Residents request documents online, admins approve and issue them, and third-party verifiers authenticate via QR code.",
      gallery: [
        "/projects/protochain/image14.png",
        "/projects/protochain/image16.png",
        "/projects/protochain/image18.png",
        "/projects/protochain/image20.png",
        "/projects/protochain/image23.png",
        "/projects/protochain/image24.png",
        "/projects/protochain/image25.png",
        "/projects/protochain/image26.png",
        "/projects/protochain/image27.png",
        "/projects/protochain/image28.png",
      ],
      technologies: ["Next.js", "React", "Firebase Firestore", "AES Encryption", "ASH Framework", "QR Code"],
      features: ["Online document requests", "Blockchain-secured issuance", "QR code verification", "Admin approval workflow", "Resident, admin & verifier roles", "Tamper-proof records"]
    },
    {
      id: 6,
      name: "Bubble Tea",
      description: "Staff-based web application for managing orders and serving bubble tea customers.",
      tags: ["React", "Tailwind", "MySQL"],
      type: "web",
      icon: "🧋",
      details: "Bubble Tea is a staff management system for bubble tea shops, handling order management, inventory tracking, and customer loyalty programs, backed by a MySQL database.",
      gallery: ["/projects/bubbletea/intro.png","/projects/bubbletea/1.png","/projects/bubbletea/2.png","/projects/bubbletea/3.png","/projects/bubbletea/4.png","/projects/bubbletea/5.png","/projects/bubbletea/6.png","/projects/bubbletea/7.png"],
      technologies: ["React Context API", "Node.js", "MySQL", "XAMPP"],
      features: ["Order management", "Inventory tracking", "Loyalty programs", "Sales analytics"]
    },
  ]

  // Lightbox navigation
  const openLightbox = useCallback((project, index) => {
    setLightbox({ project, index })
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
    document.body.style.overflow = ''
  }, [])

  const goNext = useCallback(() => {
    if (!lightbox) return
    const total = lightbox.project.gallery.length
    setLightbox(prev => ({ ...prev, index: (prev.index + 1) % total }))
  }, [lightbox])

  const goPrev = useCallback(() => {
    if (!lightbox) return
    const total = lightbox.project.gallery.length
    setLightbox(prev => ({ ...prev, index: (prev.index - 1 + total) % total }))
  }, [lightbox])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (!lightbox) return
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, goNext, goPrev, closeLightbox])

  // Entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            sectionRef.current.style.opacity = '1'
            sectionRef.current.style.transform = 'translateY(0)'
          }
          projectRefs.current.forEach((el, i) => {
            if (el) setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, 100 * i)
          })
        }
      })
    }, { threshold: 0.05 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const typeColor = {
    android: 'bg-green-500/20 text-green-300 border-green-500/30',
    web: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    iot: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  }
  const typeLabel = { android: '📱 Android', web: '🌐 Web', iot: '🔌 IoT' }

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen"
      style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300"
          style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
          My Projects
        </h2>
        <p className="text-center text-white/50 mb-14 max-w-xl mx-auto text-sm">
          Click any screenshot to browse the full gallery with keyboard support
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {allProjects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-xl hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              style={{ opacity: 0, transform: 'translateY(30px)', transition: `opacity 0.5s ease-out ${0.1 * index}s, transform 0.5s ease-out ${0.1 * index}s` }}
            >
              {/* ── Main image + gallery strip ── */}
              <div className="relative">
                {/* Hero image */}
                <div
                  className="relative w-full h-56 cursor-zoom-in group"
                  onClick={() => openLightbox(project, 0)}
                >
                  <Image
                    src={project.gallery[0]}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Zoom hint */}
                  <div className="absolute top-3 right-3 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                  {/* Image count badge */}
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    {project.gallery.length} photos
                  </div>
                </div>

                {/* Thumbnail strip */}
                <div className="flex gap-1.5 p-2 bg-black/40 backdrop-blur-sm overflow-x-auto scrollbar-hide">
                  {project.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => openLightbox(project, idx)}
                      className="relative flex-shrink-0 w-14 h-10 rounded overflow-hidden border-2 border-transparent hover:border-blue-400 transition-all duration-200 hover:scale-105"
                    >
                      <Image src={img} alt={`${project.name} ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Card body ── */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{project.icon}</span>
                    <h3 className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
                      {project.name}
                    </h3>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border flex-shrink-0 ml-2 ${typeColor[project.type]}`}>
                    {typeLabel[project.type]}
                  </span>
                </div>

                <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/10">{tag}</span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Features</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {project.features.map(f => (
                      <span key={f} className="text-white/70 text-xs flex items-center gap-1.5">
                        <span className="text-blue-400">▹</span>{f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map(t => (
                      <span key={t} className="px-2 py-0.5 bg-blue-500/15 text-blue-200 text-xs rounded border border-blue-500/20">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 flex-shrink-0" onClick={e => e.stopPropagation()}>
            <div>
              <p className="text-white font-semibold text-sm">{lightbox.project.name}</p>
              <p className="text-white/40 text-xs">{lightbox.index + 1} / {lightbox.project.gallery.length}</p>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main image area */}
          <div className="flex-1 flex items-center justify-center relative min-h-0 px-16" onClick={e => e.stopPropagation()}>
            {/* Prev button */}
            <button
              onClick={goPrev}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                key={lightbox.index}
                src={lightbox.project.gallery[lightbox.index]}
                alt={`${lightbox.project.name} screenshot ${lightbox.index + 1}`}
                width={1400}
                height={900}
                className="object-contain max-h-full max-w-full rounded-lg shadow-2xl"
                style={{ maxHeight: 'calc(100vh - 220px)' }}
              />
            </div>

            {/* Next button */}
            <button
              onClick={goNext}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom filmstrip */}
          <div className="flex-shrink-0 px-6 py-4" onClick={e => e.stopPropagation()}>
            {/* Dot indicators */}
            <div className="flex justify-center gap-1.5 mb-3">
              {lightbox.project.gallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightbox(prev => ({ ...prev, index: idx }))}
                  className={`rounded-full transition-all duration-200 ${
                    idx === lightbox.index
                      ? 'w-6 h-2 bg-blue-400'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* Thumbnail filmstrip */}
            <div className="flex gap-2 justify-center overflow-x-auto scrollbar-hide pb-1">
              {lightbox.project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightbox(prev => ({ ...prev, index: idx }))}
                  className={`relative flex-shrink-0 w-16 h-11 rounded-md overflow-hidden transition-all duration-200 ${
                    idx === lightbox.index
                      ? 'border-2 border-blue-400 scale-110 shadow-lg shadow-blue-500/30'
                      : 'border-2 border-transparent opacity-50 hover:opacity-90 hover:scale-105'
                  }`}
                >
                  <Image src={img} alt={`thumb ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Keyboard hint */}
            <p className="text-center text-white/20 text-xs mt-3">
              ← → arrow keys to navigate · Esc to close
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
