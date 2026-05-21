'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentModalProject, setCurrentModalProject] = useState(null)

  const openModal = (project) => { setCurrentModalProject(project); setModalOpen(true) }
  const closeModal = () => setModalOpen(false)

  const projects = [
    {
      id: 1,
      name: "Blockchain-Based Barangay Document Issuance",
      description: "Thesis project — a secure platform for issuing barangay documents using AES encryption and the ASH framework.",
      image: "/kimmel.jpg",
      tags: ["Blockchain", "AES Encryption", "Next.js", "ASH Framework"],
      details: "This thesis project digitizes the barangay document issuance process, applying AES encryption and a custom blockchain framework (ASH) to ensure tamper-proof, secure records. Residents can request and receive official documents without physically visiting the barangay hall.",
      technologies: ["Next.js", "React", "AES Encryption", "ASH Framework", "Firebase"],
      features: ["Secure document issuance", "AES-encrypted records", "Blockchain verification", "Admin approval workflow"]
    },
    {
      id: 2,
      name: "Lost and Found Web Application",
      description: "A Next.js/React web app for managing lost and found items on a university campus.",
      image: "/kimmel1.jpg",
      tags: ["Next.js", "React", "Web App"],
      details: "This web application helps students and staff report and claim lost items within the university. It features item listings with images, a claim workflow, and admin moderation — all built with Next.js and React.",
      technologies: ["Next.js", "React", "Firebase Firestore", "Tailwind CSS"],
      features: ["Lost item reporting", "Photo uploads", "Claim requests", "Admin moderation panel"]
    },
    {
      id: 3,
      name: "Gym Workout & Attendance App",
      description: "A mobile app for gym management — attendance, BMI tracking, workout timer, and member data.",
      image: "/kimmel.jpg",
      tags: ["Android", "Kotlin", "Firebase", "XML"],
      details: "FitFlex is a full-featured gym management app that handles member attendance, BMI/health data tracking, workout timers, and services promotion. Gym owners can manage members while users monitor their fitness progress.",
      technologies: ["Kotlin", "XML", "Firebase Auth", "Cloud Firestore"],
      features: ["Attendance tracking", "BMI & health data", "Workout timer", "Member management"]
    },
    {
      id: 4,
      name: "Chat Mobile Application",
      description: "A mobile chat system with a large-scale database for Study Groups, Clubs, peer-to-peer, and Work chats.",
      image: "/kimmel1.jpg",
      tags: ["Android", "Kotlin", "Firebase", "Real-time DB"],
      details: "A feature-rich chat app that supports multiple conversation types: Study Groups, Clubs, peer-to-peer, and professional workspaces. Built with Kotlin and powered by Firebase for real-time messaging and large-database management.",
      technologies: ["Kotlin", "Firebase Realtime DB", "Firebase Auth", "XML"],
      features: ["Real-time messaging", "Study groups & clubs", "Peer-to-peer chat", "File sharing"]
    },
    {
      id: 5,
      name: "Maze Generation Game",
      description: "A grid-based Android game using the Hunt and Kill algorithm built in Kotlin + XML.",
      image: "/kimmel.jpg",
      tags: ["Android", "Kotlin", "Game Dev", "Algorithm"],
      details: "An Android puzzle game that procedurally generates mazes using the Hunt and Kill algorithm. Players navigate through randomly generated labyrinths, with difficulty scaling as levels progress.",
      technologies: ["Kotlin", "XML", "Android Studio", "Custom Algorithms"],
      features: ["Procedural maze generation", "Hunt & Kill algorithm", "Level progression", "Touch controls"]
    },
    {
      id: 6,
      name: "TensorFlow Computer Vision",
      description: "Face detection and object identification deployed on web and mobile using TensorFlow models.",
      image: "/kimmel1.jpg",
      tags: ["TensorFlow", "Python", "AI", "Computer Vision"],
      details: "Custom-trained and deployed TensorFlow models for real-time face detection and object identification. Integrated into both web interfaces and Android mobile apps for client use cases.",
      technologies: ["TensorFlow", "Python", "React", "Android"],
      features: ["Real-time face detection", "Object identification", "Web & mobile deployment", "Custom model training"]
    },
    {
      id: 7,
      name: "ESP-32 IoT Projects",
      description: "IoT applications combining ESP-32 microcontrollers with web/mobile apps and payment gateways.",
      image: "/kimmel.jpg",
      tags: ["ESP-32", "MicroPython", "IoT", "PayMongo"],
      details: "A series of IoT projects integrating ESP-32 microcontrollers with MicroPython into web and mobile applications. Includes PayMongo payment gateway integration for hardware-triggered transactions.",
      technologies: ["ESP-32", "MicroPython", "PayMongo", "React", "Firebase"],
      features: ["Hardware-software integration", "Payment gateway", "Sensor data collection", "Remote control via web/mobile"]
    },
    {
      id: 8,
      name: "Godot Game Engine Projects",
      description: "2D/3D games with pixel art, inventory systems, character movement, and NPC interactions in Godot.",
      image: "/kimmel1.jpg",
      tags: ["Godot", "GDScript", "Game Dev", "Pixel Art"],
      details: "Side projects exploring game development in Godot Engine. Created custom pixel art and character sprites, and implemented game mechanics including inventory systems, basic character movement, and NPC interactions in both 2D and 3D environments.",
      technologies: ["Godot Engine", "GDScript", "Pixel Art", "2D & 3D"],
      features: ["Pixel art & sprites", "Inventory systems", "Character movement", "NPC interactions"]
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>Projects</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A collection of real-world projects I&apos;ve built — from thesis systems to mobile apps and AI models</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 bg-white flex flex-col">
              <div className="relative h-48 bg-gradient-to-br from-blue-800 to-purple-600 flex items-center justify-center">
                <span className="text-white text-4xl">
                  {project.id === 1 ? '🔐' : project.id === 2 ? '🔍' : project.id === 3 ? '💪' : project.id === 4 ? '💬' : project.id === 5 ? '🌀' : project.id === 6 ? '👁️' : project.id === 7 ? '🔌' : '🎮'}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <button
                  onClick={() => openModal(project)}
                  className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && currentModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">{currentModalProject.name}</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
            </div>
            <p className="text-gray-600 text-sm mb-4">{currentModalProject.details}</p>
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {currentModalProject.technologies.map(t => (
                  <span key={t} className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features</h4>
              <ul className="list-disc list-inside space-y-1">
                {currentModalProject.features.map(f => (
                  <li key={f} className="text-gray-600 text-sm">{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
