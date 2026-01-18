"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-context"
import { getTranslations } from "@/app/i18n"
import { ExternalLink } from "lucide-react"

const projects = [
    
  {
    title: "Proof Chain - Emissão e Autenticação de Certicados via Blockchain (em desenvolvimento)",
    stack: ["Java", "Spring Boot", "Spring Security", "REST", "PostgreSql", "MVC", "Docker", 
            "Arquitetura de Camadas", "Solidity", "ERC721", "Ethereum", "Foundry", "Sepolia", 
            "Oracle Cloud", "Vue", "HTML5", "CSS3", "Bootstrap", "Java Script"],
    github: "https://proofchain-alpha.vercel.app/",
  },

  {
    title: "Gestão de Restaurante API",
    stack: ["Java", "Spring Boot", "MySQL", "Docker", "MVC", "Docker", 
            "Arquitetura de Camadas","RabbitQ", "REST"],
    github: "https://github.com/manzano-pje/Restaurante",
  },
  // {
  //   title: "Sistema Agora - Gestão de Associações",
  //   stack: ["Java", "Spring Boot", "MySQL", "REST"],
  //   github: "https://github.com/manzano-pje/Associacao-Quatinga",
  // },
  
  {
    title: "Gestão de Estoque API",
    stack: ["Java", "Spring Boot", "MySQL", "Docker", "MVC", "Docker", 
            "Arquitetura de Camadas", "REST"],
    github: "https://github.com/manzano-pje/estoque",
  },

    
  {
    title: "Simulação de Banco Virtual",
    stack: ["Java", "Spring Boot", "Spring Security", "MySql", 
            "MVC", "Docker", "Arquitetura de Camadas"],
    github: "https://github.com/manzano-pje/banco-virtual",
  },

  // {
  //   title: "Sistema Web3 Login",
  //   stack: ["Solidity", "Ethereum", "Foundry", "Sepolia"],
  //   github: "https://github.com/manzano-pje",
  // },
  // {
  //   title: "Tokenização de Ativos",
  //   stack: ["Solidity", "ERC-20", "Foundry", "Web3"],
  //   github: "https://github.com/manzano-pje/AxeToken",
  // },
  {
    title: "Sistema de Votação Descentralizado",
    stack: ["Solidity", "ERC-721", "Foundry", "IPFS", "Web3", "DApp", "Smart Contracts"],
    github: "https://vox-lab-flow.vercel.app/",
  },
  {
    title: "Agência de Locação Descentralizada",
    stack: ["Solidity", "Smart Contracts", "Web3", "Foundry", "DApp"],
    github: "https://decar-locacao-de-veiculos-n2z4.vercel.app/",
  },
  {
    title: "Lista de Tarefas Web3",
    stack: ["Solidity", "Remix", "Ethereum", "DApp", "Smart Contracts"],
    github: "https://task-manager-4gux.vercel.app/",
  }

]

export default function Projects() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          {t.projects.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-border rounded-lg p-6 hover:border-blue-500/50 transition-all group cursor-pointer"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-blue-400 group-hover:gap-3 transition-all">
                  <span className="text-sm font-medium">{t.projects.viewOnGithub}</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
