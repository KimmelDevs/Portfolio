'use client'
import { Mail, Phone, Github, Facebook, MapPin, MessageSquare } from 'lucide-react'

export default function Contacts() {
  const socialLinks = [
    { id: 1, name: "Email", icon: <Mail className="w-6 h-6 text-red-400" />, url: "mailto:kimmelaldrichdelector@gmail.com", handle: "kimmelaldrichdelector@gmail.com" },
    { id: 2, name: "Phone", icon: <Phone className="w-6 h-6 text-green-400" />, url: "tel:+639541528701", handle: "+63 954 152 8701" },
    { id: 3, name: "GitHub", icon: <Github className="w-6 h-6 text-gray-300" />, url: "https://github.com/KimmelDevs", handle: "github.com/KimmelDevs" },
    { id: 4, name: "Facebook", icon: <Facebook className="w-6 h-6 text-blue-400" />, url: "https://facebook.com", handle: "Kimmel Delector" },
    { id: 5, name: "Location", icon: <MapPin className="w-6 h-6 text-yellow-400" />, url: "#", handle: "Brgy Dumalo-ong, Gandara, Samar" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl shadow-lg border border-white/30 bg-white/20 backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-300" /> Send me a message
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Your Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                <input type="email" placeholder="name@example.com" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea rows={5} placeholder="Your message here..." className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"></textarea>
              </div>
              <a
                href="mailto:kimmelaldrichdelector@gmail.com"
                className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-center transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="p-8 rounded-2xl shadow-lg border border-white/30 bg-white/20 backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 text-white">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a key={link.id} href={link.url} target={link.url !== '#' ? '_blank' : undefined} rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="p-2 rounded-full bg-white/10">{link.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-white">{link.name}</p>
                    <p className="text-xs text-white/70">{link.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
