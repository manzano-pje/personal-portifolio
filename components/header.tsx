"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-context"
import { getTranslations } from "@/app/i18n"
import { Menu, X, Accessibility } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  const { language, setLanguage, accessibility, setAccessibility } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isA11yOpen, setIsA11yOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = getTranslations(language)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "certifications", label: t.nav.certifications },
    { id: "contact", label: t.nav.contact },
  ]

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Paulo Manzano
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ y: -2 }}
              onClick={() => handleScroll(item.id)}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex bg-muted rounded-lg p-1">
            {["pt", "en"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang as "pt" | "en")}
                className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                  language === lang ? "bg-background text-foreground" : "text-foreground/50 hover:text-foreground"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Accessibility Button */}
          <div className="relative">
            <button
              onClick={() => setIsA11yOpen(!isA11yOpen)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle accessibility options"
            >
              <Accessibility size={20} />
            </button>

            {isA11yOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 bg-card border border-border rounded-lg p-4 shadow-lg min-w-60"
              >
                <div className="space-y-4">
                  {/* Font Size */}
                  <div>
                    <label className="text-sm font-medium block mb-2">
                      {language === "pt" ? "Tamanho da Fonte" : "Font Size"}
                    </label>
                    <div className="flex gap-2">
                      {["normal", "large", "xlarge"].map((size) => (
                        <button
                          key={size}
                          onClick={() => setAccessibility({ fontSize: size as any })}
                          className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                            accessibility.fontSize === size
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted hover:bg-muted/80"
                          }`}
                        >
                          {size === "normal" ? "A" : size === "large" ? "A+" : "A++"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* High Contrast */}
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={accessibility.highContrast}
                      onChange={(e) => setAccessibility({ highContrast: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{language === "pt" ? "Alto Contraste" : "High Contrast"}</span>
                  </label>

                  {/* Reduce Motion */}
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={accessibility.reduceMotion}
                      onChange={(e) => setAccessibility({ reduceMotion: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{language === "pt" ? "Reduzir Animações" : "Reduce Motion"}</span>
                  </label>
                </div>
              </motion.div>
            )}
          </div>

          {/* Mobile Menu */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border-b border-border p-4"
        >
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}
