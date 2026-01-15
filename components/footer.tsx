"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-context"
import { getTranslations } from "@/app/i18n"

export default function Footer() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-blue-500/5 to-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-foreground/60"
        >
          {t.footer}
        </motion.p>
      </div>
    </footer>
  )
}
