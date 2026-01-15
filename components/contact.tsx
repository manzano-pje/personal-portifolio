"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-context"
import { getTranslations } from "@/app/i18n"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export default function Contact() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: t.contact.email,
      href: `mailto:${t.contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: t.contact.phone,
      href: `tel:${t.contact.phone}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/manzano-pje",
      href: "https://github.com/manzano-pje",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "paulo-manzano",
      href: "https://linkedin.com/in/paulo-manzano",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          {t.contact.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((contact, i) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={i}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-border rounded-lg p-6 hover:border-blue-500/50 transition-all group"
              >
                <Icon className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-foreground/60 mb-1">{contact.label}</p>
                <p className="font-semibold text-foreground group-hover:text-blue-400 transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
