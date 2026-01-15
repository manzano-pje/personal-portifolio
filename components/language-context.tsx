"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface AccessibilitySettings {
  fontSize: "normal" | "large" | "xlarge"
  highContrast: boolean
  reduceMotion: boolean
}

interface LanguageContextType {
  language: "pt" | "en"
  setLanguage: (lang: "pt" | "en") => void
  accessibility: AccessibilitySettings
  setAccessibility: (settings: Partial<AccessibilitySettings>) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"pt" | "en">("pt")
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>({
    fontSize: "normal",
    highContrast: false,
    reduceMotion: false,
  })

  const updateAccessibility = (settings: Partial<AccessibilitySettings>) => {
    setAccessibility((prev) => ({ ...prev, ...settings }))
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        accessibility,
        setAccessibility: updateAccessibility,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
