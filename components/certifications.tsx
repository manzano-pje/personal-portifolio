"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-context"

const certifications = [
  "Vulnerabilidades em Contratos Inteligentes",
  "Engenharia de Prompt",
  "Fundamentos da Web3",
  "DEX - Exchange Descenralizada",
  "Solidity 101",
  "Foundry 101",
  "Imersão Dev e Front-End",
  "Desenvolvedor Java TQI",
  "Desenvolvedor Java Cognizant",
  "Desenvolvedor Spread Java",
  "Aprender para Liderar",
  "Bootcamp Stellar",
  "SQL SERVER - Criando suas primeiras consultas",
  "Criando uma API REST Documentada com Spring Web e Swagger",
  "Programação Orientada a Objetos",
  "Configurando Ambiente de Desenvolvimento Java no Linux",
  "Lógica Condicional e Controle de Fluxos em Java",
  "Introdução aos Conceitos de API e Clean Architecture",
  "Trabalhando com Banco de Dados utilizando JDBC e JPA",
  "Fundamentos de Arquitetura de Sistemas",
  "Introdução a sistemas de mensagerias com Java",
  "Estruturas de Dados em Java: Árvores",
  "Estruturas de Dados em Java: Listas",
  "Estruturas de Dados em Java: Pilhas e Filas",
  "Tratamento de Exceções em Java",
  "Desmistificando Microsserviços, BFF e DDD",
  "Introdução a Qualidade de Software",
  "Aprenda a aplicar testes com Java"
]

export default function Certifications() {
  const { language } = useLanguage()

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          {language === "pt" ? "Certificações" : "Certifications"}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-border rounded-lg p-4 text-center cursor-pointer hover:border-blue-500/50 transition-all"
            >
              <span className="text-2xl mb-2 block">🏆</span>
              <p className="text-sm font-medium text-foreground">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
