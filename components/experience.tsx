"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-context"

const experiences = [
  {
    pt: {
      company: "Energia Amiga",
      role: "Gerente de Operações e Comercial",
      period: "2023–Atual",
      description: "Gestão de processos, liderança e homologação de projetos de energia solar.",
    },
    en: {
      company: "Energia Amida",
      role: "Operations and Commercial Manager",
      period: "2023–Present",
      description: "Process management, leadership and solar energy project homologation.",
    },
  },
  {
    pt: {
      company: "Simbiose Ventures",
      role: "Desenvolvedor Back-end Java",
      period: "2023",
      description: "APIs REST, Spring Boot, cloud e metodologias ágeis.",
    },
    en: {
      company: "Simbiose Ventures",
      role: "Java Back-end Developer",
      period: "2023",
      description: "REST APIs, Spring Boot, cloud and agile methodologies.",
    },
  },
  {
    pt: {
      company: "DevsFree",
      role: "Desenvolvedor Back-end (Voluntário)",
      period: "2022–2023",
      description: "Gestão de projetos e integração de dados.",
    },
    en: {
      company: "DevsFree",
      role: "Back-end Developer (Volunteer)",
      period: "2022–2023",
      description: "Project management and data integration.",
    },
  },
]

export default function Experience() {
  const { language } = useLanguage()

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          {language === "pt" ? "Experiência" : "Experience"}
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => {
            const data = language === "pt" ? exp.pt : exp.en
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-border rounded-lg p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{data.company}</h3>
                    <p className="text-blue-400 font-semibold">{data.role}</p>
                  </div>
                  <span className="text-foreground/60 text-sm whitespace-nowrap">{data.period}</span>
                </div>
                <p className="text-foreground/70">{data.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
