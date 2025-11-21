import MagicBento from "@/components/reactBits/animations/magicBento/MagicBento";
import LogoLoop from "@/components/reactBits/animations/logoLoop/LogoLoop";
import { ModeToggle } from "@/components/themeMode/mode-toggle";
import Aurora from "@/components/reactBits/backgrounds/aurora/Aurora";
import ModelViewer from "@/components/reactBits/animations/modelViewer/ModelViewer";
import modelTest from "/assets/3DModels/LOL/Chibi/x02m/annie_superfan_d'arcane_chibi_prestige.glb";
import { useTranslation } from "react-i18next";
import { LangToggle } from "@/components/i18n/lang-toggle";
import { Button } from "@/components/ui/button";

import GlassSurface from "@/components/reactBits/components/glassSurface/GlassSurface";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LaserFlow } from "@/components/reactBits/animations/laserFlow/LaserFlow";
import GradientText from "@/components/reactBits/textAnimations/gradientText/GradientText";
/*logo loop component*/
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Alternative with image sources
/*
const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];*/

//aurora component: theme change observer------------------------------
const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen isolate bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-1 relative z-10">
        <section className="grid md:grid-cols-2 gap-10 py-16 relative z-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("welcome")}
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed ">
              {t("usedTechs")}
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <Link to="/cv">Voir mon CV</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/index">Voir les démos</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="w-full max-w-[360px]">
              <ModelViewer
                url={modelTest}
                width={360}
                height={360}
                enableManualRotation={true}
                showScreenshotButton={false}
                autoRotate={true}
              />
            </div>
          </div>
        </section>

        <div className="flex-col justify-center">
          <MagicBento
            textAutoHide
            enableStars
            enableSpotlight
            enableBorderGlow
            enableTilt
            enableMagnetism
            clickEffect
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>

        <section className="relative z-10 py-8">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="var(--background)"
            ariaLabel="Technology partners"
          />
        </section>

        <section className="relative z-10 py-12">
          <GlassSurface
            width={600}
            height={64}
            borderRadius={24}
            className="mx-auto flex items-center justify-center"
          >
            <span className="leading-relaxed">
              Disponible pour opportunités — Contactez-moi
            </span>
          </GlassSurface>
        </section>
      </div>
    </div>
  );
};
export default Home;
