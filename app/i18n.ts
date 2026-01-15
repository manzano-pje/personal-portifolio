const translations = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      certifications: "Certificações",
      contact: "Contato",
    },
    hero: {
      title: "Paulo Manzano",
      subtitle: "Desenvolvedor Blockchain",
      description: "Construindo o futuro da Web3 com código, propósito e inovação.",
      cta: "Ver Projetos",
    },
    about: {
      title: "Sobre",
      bio: "Sou um desenvolvedor em transição para a área de Blockchain, com foco em Ethereum, Web3, DeFi e tokenização de ativos. Tenho experiência prática na criação de contratos inteligentes em Solidity, dApps e tokens ERC-20 e NFT, com implantações realizadas na testnet Sepolia e uso da plataforma Foundry para testes e automação.\n\nMinha base foi construída em Java e Spring Boot, com o desenvolvimento de mais de 10 projetos técnicos envolvendo APIs REST, microsserviços, Docker, MySQL e boas práticas de arquitetura MVC e padrões SOLID. Busco integrar constantemente o ecossistema Web2 ao Web3, unindo escalabilidade, segurança e inovação.\n\nAtuo com metodologias ágeis como Scrum e Kanban, valorizando a colaboração e a entrega contínua de valor. Sou um profissional comunicativo, analítico e resiliente, com facilidade em liderar equipes, resolver problemas complexos e aprender rapidamente novas tecnologias.\n\nMeu objetivo é contribuir para o avanço de soluções descentralizadas, criando aplicações que sejam inovação, propósito e impacto real.",
      hardSkills: "Hard Skills",
      softSkills: "Soft Skills",
    },
    experience: {
      title: "Experiência",
    },
    projects: {
      title: "Projetos",
      viewOnGithub: "Ver no GitHub",
    },
    certifications: {
      title: "Certificações",
    },
    contact: {
      title: "Contato",
      email: "manzano.pje@gmail.com",
      phone: "+55 11 98305-0657",
    },
    footer: "Criado com ❤️ e curiosidade por Paulo Manzano — 2025",
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      title: "Paulo Manzano",
      subtitle: "Blockchain Developer",
      description: "Building the future of Web3 with code, purpose, and innovation.",
      cta: "View Projects",
    },
    about: {
      title: "About",
      bio: "I am a developer transitioning to the Blockchain area, with a focus on Ethereum, Web3, DeFi and asset tokenization. I have practical experience creating smart contracts in Solidity, dApps, and ERC-20 and NFT tokens, with deployments on Sepolia testnet and using the Foundry platform for testing and automation.\n\nMy foundation was built on Java and Spring Boot, with the development of over 10 technical projects involving REST APIs, microservices, Docker, MySQL and best practices in MVC architecture and SOLID patterns. I constantly seek to integrate the Web2 ecosystem with Web3, combining scalability, security and innovation.\n\nI work with agile methodologies like Scrum and Kanban, valuing collaboration and continuous value delivery. I am a communicative, analytical and resilient professional, with an ability to lead teams, solve complex problems and quickly learn new technologies.\n\nMy goal is to contribute to the advancement of decentralized solutions, creating applications that are innovation, purpose and real impact.",
      hardSkills: "Hard Skills",
      softSkills: "Soft Skills",
    },
    experience: {
      title: "Experience",
    },
    projects: {
      title: "Projects",
      viewOnGithub: "View on GitHub",
    },
    certifications: {
      title: "Certifications",
    },
    contact: {
      title: "Contact",
      email: "manzano.pje@gmail.com",
      phone: "+55 11 98305-0657",
    },
    footer: "Built with ❤️ and curiosity by Paulo Manzano — 2025",
  },
}

export function getTranslations(lang: "pt" | "en") {
  return translations[lang]
}
