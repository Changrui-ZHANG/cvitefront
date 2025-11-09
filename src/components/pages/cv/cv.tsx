import { motion, type Variants } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Briefcase,
  GraduationCap,
  Code,
  Award,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Cv() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-[1200px] bg-white rounded-2xl shadow-2xl p-8 md:p-12"
      >
        {/* Header */}
        <div className="grid md:grid-cols-[auto_1fr] gap-8 mb-8 pb-8 border-b border-gray-200">
          <motion.div variants={itemVariants}>
            <Avatar className="h-32 w-32 ring-4 ring-blue-500/20">
              <AvatarImage
                src="/public/assets/Photos/Changrui2.jpg"
                alt="Profile"
                className="object-cover h-full w-full"
              />
              <AvatarFallback>CZ</AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.h1
              variants={itemVariants}
              className="text-[42px] leading-tight mb-2 text-gray-900 font-bold"
            >
              Changrui ZHANG
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-[20px] text-blue-600 mb-4"
            >
              Full Stack Developer
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[14px] text-gray-600"
            >
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>m.zhang.changrui@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </div>

              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <a
                  href="https://www.linkedin.com/in/changrui-zhang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  linkedin.com/in/changrui-zhang
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <a
                  href="https://github.com/Changrui-ZHANG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  github.com/Changrui-ZHANG
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+33 6 52 94 63 09</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content - 2 Columns */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* About */}
            <motion.div variants={itemVariants}>
              <h2 className="text-[18px] flex items-center gap-2 mb-3 text-gray-900">
                <Award className="h-5 w-5 text-blue-600" />
                Profile
              </h2>
              <p className="text-[14px] text-gray-700 leading-relaxed indent-8">
                Développeur back-end diplômé en Master Informatique (Sorbonne
                Université), expérimenté sur Spring Boot et ReactJS. Rigoureux,
                autonome et passionné par les défis techniques, je recherche un
                poste dans le développement back-end/fullstack.{" "}
              </p>
              <p className="text-[14px] text-gray-700 leading-relaxed indent-8">
                Je possède une carte de résident me permettant de travailler
                librement en France.
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants}>
              <h2 className="text-[18px] flex items-center gap-2 mb-3 text-gray-900">
                <Briefcase className="h-5 w-5 text-blue-600" />
                Professional Experience
              </h2>
              <div className="space-y-4">
                {[
                  {
                    role: "Espace personnel",
                    company: "Full stack, Projet personnel",
                    period: "En cours",
                    achievements: [
                      "Développer en autonomie un site web full-stack type espace personnel.",
                      "Intégrer le système d’authentification, le mode Dark/Light et le multilingue.",
                      "Enchantement des composants dynamique avec ReactBit.",
                      "Conteneuriser le projet avec Docker.",
                      "Techs: Java, Spring Boot, ReactJs, JavaScript, TypeScript, Vite, ReactBit, Tailwinds, JWT, Copilot, Git, Docker, Jira, Postgresql, API REST.",
                    ],
                    location: "Paris, France",
                  },
                  {
                    role: "Développeur Fullstack (Stage) ",
                    company: "Rakuten France, Catalogue",
                    period: "02/2024 - 09/2024",
                    achievements: [
                      "Migrer et optimiser le composant de filtrage (250M exports/jour) : temps de configuration réduit de 2 min à <30 s.",
                      "Développer en autonomie deux nouveaux supports d’import (XML + JSON) des fiches produits sur la plateforme, facilitant l’intégration de 250+ partenaires.",
                      "Intégrer l’IA dans le traitement des données.",
                      "Migrer de ReactJS 15+ vers 20+ et de JavaScript vers TypeScript.",
                      "Développer en autonomie un outil de migration automatisée (3 semaines), garantissant l’intégrité de milliers de données clients et réduisant les erreurs manuelles.",
                      "Développer en autonomie un programme de synchronisation des coupons de réduction, garantissant la fiabilité des promotions visibles par des millions d’utilisateurs.",
                      "Réaliser des tests unitaires et automatisés pour garantir la fiabilité du code.",
                      "Suivre les cahiers des charges et la roadmap produit afin de garantir la conformité des livrables et le respect des délais.",
                      "Organiser des réunions de reporting et des meetings quotidiens en méthodologie Agile.",
                      "Techs: Java, Spring Boot, ReactJS, JavaScript, TypeScript, SQL, Docker, Git, Jenkins, Elasticsearch, Hibernate, Redis, MariaDB, Liquibase, Jira, Velocity, Prometheus, Grafana, CI/CD, IntelliJ, API REST",
                    ],
                    location: "Paris, France",
                  },
                ].map((exp, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="border-l-2 border-blue-500 pl-4"
                  >
                    <div className="flex justify-between items-start mb-1 pb-2">
                      <h3 className="text-[15px] text-black">{exp.role}</h3>
                      <span className="text-[12px] text-gray-500 whitespace-nowrap ml-2">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-[13px] text-gray-600 mb-2">
                        {exp.company}
                      </p>
                      <span className="text-[12px] text-gray-500 ml-2">
                        {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-[12px] text-gray-600 flex items-start "
                        >
                          <span className="text-blue-500">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h2 className="text-[18px] flex items-center gap-2 mb-3 text-gray-900">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                Education
              </h2>
              <div className="space-y-3">
                {[
                  {
                    degree: "Master of Science",
                    field: "Computer Science",
                    school: "Stanford University",
                    period: "2017 - 2019",
                  },
                  {
                    degree: "Bachelor of Science",
                    field: "Software Engineering",
                    school: "University of California, Berkeley",
                    period: "2013 - 2017",
                  },
                ].map((edu, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="border-l-2 border-blue-500 pl-4"
                  >
                    <h3 className="text-[15px]">{edu.degree}</h3>
                    {edu.field && (
                      <p className="text-[13px] text-gray-600">{edu.field}</p>
                    )}
                    <div className="flex justify-between items-center">
                      <p className="text-[12px] text-gray-500">{edu.school}</p>
                      <span className="text-[12px] text-gray-500">
                        {edu.period}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Skills */}
            <motion.div variants={itemVariants}>
              <h2 className="text-[18px] flex items-center gap-2 mb-3 text-gray-900">
                <Code className="h-5 w-5 text-blue-600" />
                Skills
              </h2>
              <div className="space-y-4">
                {[
                  {
                    category: "Frontend",
                    skills: [
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "Vue.js",
                    ],
                  },
                  {
                    category: "Backend",
                    skills: [
                      "Node.js",
                      "Express",
                      "NestJS",
                      "GraphQL",
                      "REST API",
                    ],
                  },
                  {
                    category: "Database",
                    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
                  },
                  {
                    category: "DevOps",
                    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"],
                  },
                  {
                    category: "Languages",
                    skills: [
                      "Chinese (Native)",
                      "English (Fluent)",
                      "French (bilingual)",
                    ],
                  },
                ].map((category, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <h3 className="text-[14px] mb-2">{category.category}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-gray-900 bg-gray-200"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants}>
              <h2 className="text-[18px] flex items-center gap-2 mb-3 text-gray-900">
                <Github className="h-5 w-5 text-blue-600" />
                Interests
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {["Open Source", "AI/ML", "Hackathons", "Photography"].map(
                  (interest, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Badge variant="outline">{interest}</Badge>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-6 border-t border-gray-200 text-center text-[11px] text-gray-500"
        >
          Last updated: November 2025
        </motion.div>
      </motion.div>
    </div>
  );
}
