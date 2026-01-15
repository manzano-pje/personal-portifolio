"use client"

import { useLanguage } from "@/components/language-context"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const { accessibility } = useLanguage()

  return (
    <div
      data-fontSize={accessibility.fontSize}
      data-high-contrast={accessibility.highContrast}
      data-reduce-motion={accessibility.reduceMotion}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
