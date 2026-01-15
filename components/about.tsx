"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-context"
import { getTranslations } from "@/app/i18n"

const hardSkills = [
  { label: "Solidity", icon: "⚙️" },
  { label: "Ethereum", icon: "◆" },
  { label: "Java", icon: "☕" },
  { label: "Spring Boot", icon: "🍂" },
  { label: "Docker", icon: "🐳" },
  { label: "MySQL", icon: "🗄️" },
  { label: "REST APIs", icon: "📡" },
  { label: "Foundry", icon: "🔨" },
  { label: "DeFi", icon: "💰" },
  { label: "NFT", icon: "🎨" },
]

const softSkills = [
  "Trabalho em equipe",
  "Comunicação eficaz",
  "Pensamento crítico",
  "Adaptabilidade",
  "Proatividade",
  "Resiliência",
  "Liderança",
  "Gestão do tempo",
  "Aprendizado rápido",
]

export default function About() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const softSkillsEN = [
    "Teamwork",
    "Effective Communication",
    "Critical Thinking",
    "Adaptability",
    "Proactivity",
    "Resilience",
    "Leadership",
    "Time Management",
    "Quick Learning",
  ]

  const displaySoftSkills = language === "pt" ? softSkills : softSkillsEN

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          {t.about.title}
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {t.about.bio.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-foreground/70 leading-relaxed text-justify">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                10+
              </div>
              <p className="text-foreground/60 text-sm mt-2">
                {language === "pt" ? "Projetos Técnicos" : "Technical Projects"}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                5+
              </div>
              <p className="text-foreground/60 text-sm mt-2">
                {language === "pt" ? "Anos de Experiência" : "Years of Experience"}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hard Skills */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">{t.about.hardSkills}</h3>
            <div className="grid grid-cols-2 gap-3">
              {hardSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-border rounded-lg p-4 text-center cursor-pointer hover:border-blue-500/50 transition-all"
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <p className="text-sm font-medium">{skill.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">{t.about.softSkills}</h3>
            <div className="space-y-2 flex flex-wrap gap-2">
              {displaySoftSkills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-foreground/80 px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:border-blue-500/60 transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
