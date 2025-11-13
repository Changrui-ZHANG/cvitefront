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
import { useTranslation, Trans } from "react-i18next";
import GradualBlur from "@/components/reactBits/animations/gradualBlur/gradualBlur";
export default function Cv() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const { t } = useTranslation();
  interface CvTranslation {
    educationsStr: string;
    skillsStr: string;
    interestsStr: string;
    profileStr: string;
    experiencesStr: string;
    experiences: Experience[];
    profile: Profile;
    educations: Education[];
    skills: Skill[];
    interests: string[];
  }
  interface Profile {
    name: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    aboutMe: string;
  }

  interface Experience {
    role: string;
    company: string;
    period: string;
    location: string;
    achievements: string[];
    techs: string[];
  }

  interface Education {
    degree: string;
    field: string;
    school: string;
    period: string;
    location: string;
  }

  interface Skill {
    category: string;
    skills: string[];
  }

  const cv: CvTranslation = t("cv", { returnObjects: true }) as CvTranslation;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 md:p-8 flex justify-center">
      <GradualBlur
        target="parent"
        position="bottom"
        height="4rem"
        strength={2}
        divCount={1}
        curve="linear"
        exponential={true}
        opacity={1}
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-[1200px] bg-white rounded-2xl shadow-2xl p-8 md:p-12"
      >
        {/* Header */}
        <div className="grid md:grid-cols-[auto_1fr] gap-8 mb-8 pb-8 border-b border-gray-200">
          <motion.div variants={itemVariants}>
            <Avatar className="h-32 w-32 ring-4 ring-cv-decoration/20">
              <AvatarImage
                src="/public/assets/Photos/Changrui2.jpg"
                alt="Profile"
                className="object-cover h-full w-full"
              />
              <AvatarFallback>CZ</AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="flex flex-col justify-center leading-tight">
            <motion.h1
              variants={itemVariants}
              className="text-[42px] leading-tight mb-2 text-cv-text-primary font-bold"
            >
              {cv.profile.name}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-[20px] text-cv-decoration mb-4"
            >
              {cv.profile.role}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[14px] text-cv-text-tertiary"
              leading-tight
            >
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{cv.profile.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{cv.profile.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{cv.profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <a
                  href="https://www.linkedin.com/in/changrui-zhang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cv-decoration transition-colors"
                >
                  {cv.profile.linkedin}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <a
                  href="https://github.com/Changrui-ZHANG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cv-decoration transition-colors"
                >
                  {cv.profile.github}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content - 2 Columns */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-8">
          {/* Left Column */}
          <div className="space-y-6  leading-tight">
            {/* About */}
            <motion.div variants={itemVariants}>
              <h2 className="text-[18px] flex items-center gap-2 mb-3 text-cv-text-primary">
                <Award className="h-5 w-5 text-cv-decoration" />
                {cv.profileStr}
              </h2>
              <div className="text-[14px] text-cv-text-secondary leading-relaxed indent-8">
                <p>{cv.profile.aboutMe}</p>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants}>
              <h2 className="text-[18px] flex items-center gap-2 mb-3 text-cv-text-primary">
                <Briefcase className="h-5 w-5 text-cv-decoration" />
                {cv.experiencesStr}
              </h2>
              <div className="space-y-4">
                {cv.experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="border-l-2 border-cv-decoration pl-4"
                  >
                    <div className="flex justify-between items-start">
                      <h2 className="text-[15px] text-black">{exp.role}</h2>
                      <span className="text-[12px] text-cv-text-tertiary whitespace-nowrap ml-2">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex justify-between items-start italic pb-2 pt-1">
                      <p className="text-[13px] text-cv-text-tertiary">
                        {exp.company}
                      </p>
                      <span className="text-[12px] text-cv-text-tertiary ml-2">
                        {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-[12px]  flex items-start">
                          <span className="text-cv-decoration">•</span>
                          <span className="pl-1 text-cv-text-secondary">
                            {achievement}
                          </span>
                        </li>
                      ))}
                      <li className="text-[12px]  flex items-start">
                        <span className="text-cv-decoration">•</span>
                        <span className="pl-1 space-x-1 flex flex-wrap">
                          <span className="text-cv-text-secondary">techs:</span>
                          {exp.techs.map((tech) => (
                            <motion.div
                              key={tech}
                              whileHover={{ scale: 1.05, y: -2 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              }}
                            >
                              <Badge
                                key={tech}
                                className="px-1.5 py-px h-fit bg-transparent border border-b-cv-decoration border-r-cv-decoration text-cv-text-secondary"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h2 className="text-[18px] flex items-center gap-2 mb-3 text-cv-text-primary">
                <GraduationCap className="h-5 w-5 text-cv-decoration" />
                {cv.educationsStr}
              </h2>
              <div className="space-y-3">
                {cv.educations.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="border-l-2 border-cv-decoration pl-4"
                  >
                    <h3 className="text-[15px] text-cv-text-primary">
                      {edu.degree}
                      {edu.field && (
                        <span className="text-[13px] text-cv-text-secondary">
                          : {edu.field}
                        </span>
                      )}
                    </h3>

                    <div className="flex justify-between items-center italic text-cv-text-tertiary">
                      <p className="text-[12px] ">{edu.school}</p>
                      <span className="text-[12px] ">{edu.period}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 border-l border-gray-200 pl-6">
            {/* Skills */}
            <motion.div variants={itemVariants}>
              <h2 className="text-[18px] flex items-center gap-2 mb-3 text-cv-text-primary">
                <Code className="h-5 w-5 text-cv-decoration" />
                {cv.skillsStr}
              </h2>
              <div className="space-y-4">
                {cv.skills.map((category, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <h3 className="text-[14px] mb-4 mt-4 text-cv-text-primary">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1, y: -2 }}
                          transition={{
                            type: "spring",
                            stiffness: 4000,
                            damping: 10,
                          }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-cv-text-secondary bg-cv-badge border-cv-decoration"
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
              <h2 className="text-[18px] flex items-center gap-2 mb-3 text-cv-text-primary">
                <Github className="h-5 w-5 text-cv-decoration" />
                {cv.interestsStr}
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {cv.interests.map((interest, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}
                  >
                    <Badge
                      variant="outline"
                      className="text-cv-text-secondary border-cv-decoration"
                    >
                      {interest}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-6 border-t border-cv-badge-bg text-center text-[11px] text-cv-text-tertiary"
        >
          Last updated: November 2025
        </motion.div>
      </motion.div>
    </div>
  );
}
