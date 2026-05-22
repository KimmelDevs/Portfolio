'use client'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { Smartphone, Globe } from 'lucide-react'

export default function Works() {
  const [expandedProject, setExpandedProject] = useState(null)
  const [selectedImages, setSelectedImages] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const [currentModalImage, setCurrentModalImage] = useState('')
  const [currentModalProject, setCurrentModalProject] = useState(null)
  const sectionRef = useRef(null)
  const projectRefs = useRef([])

  const allProjects = [
    {
      id: 3,
      name: "FitTitan",
      description: "Online fitness platform with personalized workout routines and progress tracking.",
      tags: ["Android", "Jetpack Compose", "Firebase"],
      type: "android",
      icon: <Smartphone className="w-5 h-5 text-white" />,
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
      icon: <Smartphone className="w-5 h-5 text-white" />,
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
      icon: <Globe className="w-5 h-5 text-white" />,
      details: "Lost and Found is a community platform for university campuses where students can report lost items and help others recover their belongings with image uploads and real-time notifications.",
      gallery: ["/projects/lostfound/intro.png","/projects/lostfound/1.png","/projects/lostfound/2.png","/projects/lostfound/3.png","/projects/lostfound/4.png","/projects/lostfound/5.png","/projects/lostfound/6.png","/projects/lostfound/7.png","/projects/lostfound/8.png"],
      technologies: ["Next.js API Routes", "Firebase Storage", "Cloud Firestore"],
      features: ["Item reporting", "Image uploads", "Location tagging", "Real-time notifications"]
    },
    {
      id: 6,
      name: "Bubble Tea",
      description: "Staff-based web application for managing orders and serving bubble tea customers.",
      tags: ["React", "Tailwind", "MySQL"],
      type: "web",
      icon: <Globe className="w-5 h-5 text-white" />,
      details: "Bubble Tea is a staff management system for bubble tea shops, handling order management, inventory tracking, and customer loyalty programs, backed by a MySQL database.",
      gallery: ["/projects/bubbletea/intro.png","/projects/bubbletea/1.png","/projects/bubbletea/2.png","/projects/bubbletea/3.png","/projects/bubbletea/4.png","/projects/bubbletea/5.png","/projects/bubbletea/6.png","/projects/bubbletea/7.png"],
      technologies: ["React Context API", "Node.js", "MySQL", "XAMPP"],
      features: ["Order management", "Inventory tracking", "Loyalty programs", "Sales analytics"]
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            sectionRef.current.style.opacity = '1'
            sectionRef.current.style.transform = 'translateY(0)'
          }
          projectRefs.current.forEach((project, index) => {
            if (project) {
              setTimeout(() => {
                project.style.opacity = '1'
                project.style.transform = 'translateY(0)'
              }, 150 * index)
            }
          })
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const toggleExpand = (id) => setExpandedProject(expandedProject === id ? null : id)
  const selectImage = (projectId, imageIndex) => setSelectedImages(prev => ({ ...prev, [projectId]: imageIndex }))
  const openModal = (project, imageIndex = 0) => {
    setCurrentModalProject(project)
    setCurrentModalImage(project.gallery ? project.gallery[imageIndex] : '')
    setModalOpen(true)
  }
  const closeModal = () => setModalOpen(false)

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen"
      style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300"
          style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
          My Projects
        </h2>
        <p className="text-center text-white/60 mb-12 max-w-xl mx-auto">A selection of real apps I&apos;ve built — click any project to see more details and screenshots.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className={`relative group transition-all duration-500 ${expandedProject === project.id ? 'md:col-span-2' : 'hover:scale-[1.02] cursor-pointer'}`}
              style={{ opacity: 0, transform: 'translateY(30px)', transition: `opacity 0.6s ease-out ${0.2 + index * 0.1}s, transform 0.6s ease-out ${0.2 + index * 0.1}s` }}
            >
              <div
                className={`h-full p-6 rounded-2xl shadow-lg border border-white/30 bg-white/10 backdrop-blur-md overflow-hidden ${expandedProject === project.id ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50' : ''}`}
                onClick={() => toggleExpand(project.id)}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-white/10 mr-3">{project.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>{project.name}</h3>
                    <span className="text-xs text-blue-300">{project.type === 'android' ? '📱 Android' : '🌐 Web'}</span>
                  </div>
                </div>

                <div className={`flex flex-col ${expandedProject === project.id ? 'md:flex-row' : ''} gap-6`}>
                  <div className={`relative ${expandedProject === project.id ? 'md:w-2/5' : 'w-full'} h-64 md:h-80 rounded-lg overflow-hidden`}>
                    <Image
                      src={project.gallery ? project.gallery[selectedImages[project.id] || 0] : '/kimmel.jpg'}
                      alt={project.name}
                      fill
                      className="object-cover cursor-pointer"
                      onClick={(e) => { e.stopPropagation(); openModal(project, selectedImages[project.id] || 0) }}
                    />
                    {expandedProject === project.id && project.gallery && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 flex justify-center gap-2 flex-wrap">
                        {project.gallery.map((img, idx) => (
                          <button key={idx}
                            className={`w-8 h-8 rounded-full border-2 ${selectedImages[project.id] === idx ? 'border-blue-400 scale-110' : 'border-transparent hover:border-white/50'} transition-all duration-200`}
                            onClick={(e) => { e.stopPropagation(); selectImage(project.id, idx) }}
                          >
                            <div className="relative w-full h-full">
                              <Image src={img} alt={`Thumb ${idx + 1}`} fill className="object-cover rounded-full" />
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={expandedProject === project.id ? 'md:w-3/5' : ''}>
                    <p className="text-white/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full border border-white/20">{tag}</span>
                      ))}
                    </div>

                    {expandedProject === project.id && (
                      <div className="mt-4">
                        <p className="text-white mb-4">{project.details}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-lg font-bold text-white mb-2">Features</h5>
                            <ul className="text-white/80 space-y-1">
                              {project.features?.map((f, idx) => <li key={idx} className="flex items-start"><span className="text-blue-300 mr-2">▹</span>{f}</li>)}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-lg font-bold text-white mb-2">Technologies</h5>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies?.map((t, idx) => (
                                <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-full border border-blue-400/30">{t}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {expandedProject !== project.id && (
                      <button className="text-white hover:text-blue-300 font-medium transition-colors flex items-center"
                        onClick={(e) => { e.stopPropagation(); toggleExpand(project.id) }}>
                        View Details <span className="ml-1">→</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-2 bg-white rounded-xl blur-md" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && currentModalProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={closeModal}>
          <div className="relative my-8" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-10 right-0 text-white text-3xl z-10 hover:text-blue-300" onClick={closeModal}>×</button>
            <Image
              src={currentModalImage}
              alt={currentModalProject.name}
              width={1200}
              height={800}
              className="object-contain max-h-[80vh] w-auto rounded-lg"
            />
            {currentModalProject.gallery && currentModalProject.gallery.length > 1 && (
              <div className="flex justify-center gap-2 mt-4 flex-wrap">
                {currentModalProject.gallery.map((img, idx) => (
                  <button key={idx}
                    className={`w-10 h-10 rounded-full border-2 ${currentModalImage === img ? 'border-blue-400 scale-110' : 'border-transparent hover:border-white/50'} transition-all`}
                    onClick={(e) => { e.stopPropagation(); setCurrentModalImage(img) }}
                  >
                    <div className="relative w-full h-full">
                      <Image src={img} alt={`Thumb ${idx + 1}`} fill className="object-cover rounded-full" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
