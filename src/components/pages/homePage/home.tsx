import MagicBento from "@/components/reactBits/animations/magicBento/MagicBento";
import ModelViewer from "@/components/reactBits/animations/modelViewer/ModelViewer";
import modelTest from "/assets/3DModels/LOL/Chibi/x02m/annie_superfan_d'arcane_chibi_prestige.glb";
import { useTranslation } from "react-i18next";

import GlassSurface from "@/components/reactBits/components/glassSurface/GlassSurface";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarBorder from "@/components/reactBits/animations/starBorder/StartBorder";
import FallingIcon from "@/components/reactBits/animations/fallingIcon/FallingIcon";
import LogoLoop from "@/components/reactBits/animations/logoLoop/LogoLoop";
import { FaDocker } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";

import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import FallingText from "@/components/reactBits/textAnimations/fallinText/FallingText";
import FadeContent from "@/components/reactBits/animations/fadeContent/FadeContent";
import ShinyText from "@/components/reactBits/textAnimations/shinyText/ShinyText";
import CurvedLoop from "@/components/reactBits/textAnimations/curvedLoop/CurvedLoop";
import RotatingText from "@/components/reactBits/textAnimations/rotatingText/RatatingText";
import GradientText from "@/components/reactBits/textAnimations/gradientText/GradientText";
import { useRef } from "react";
import VariableProximity from "@/components/reactBits/textAnimations/variableProximity/VariableProximity";
import CountUp from "@/components/reactBits/textAnimations/countUp/CountUp";

const Kbd = ({ children }: { children: React.ReactNode }) => (
  <kbd className="px-2 py-1.5 text-xs font-semibold text-foreground bg-primary/20 border border-primary/40 rounded-lg">
    {children}
  </kbd>
);

//aurora component: theme change observer------------------------------
const Home: React.FC = () => {
  const { t } = useTranslation();
  const [isMac, setIsMac] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  //------------nombre de jours en dev----------------------------------------
  const startUtcMs = Date.UTC(2025, 7, 2); // mois = 0 → janvier, donc 7 = août
  const nowMs = Date.now();
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysSince = Math.floor((nowMs - startUtcMs) / msPerDay);

  useEffect(() => {
    setIsMac(
      typeof window !== "undefined" &&
        /Mac|iPod|iPhone|iPad/.test(navigator.platform)
    );
  }, []);
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
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
    {
      node: <FaDocker />,
      title: "Docker",
      href: "https://www.docker.com",
    },
    {
      node: <SiVite />,
      title: "Vite",
      href: "https://vitejs.dev",
    },
    {
      node: <SiShadcnui />,
      title: "Shadcn UI",
      href: "https://ui.shadcn.com",
    },
    {
      node: <FaGithub />,
      title: "GitHub",
      href: "https://github.com",
    },
    {
      node: <IoLogoJavascript />,
      title: "JavaScript",
      href: "https://www.javascript.com",
    },
    {
      node: <VscVscode />,
      title: "VS Code",
      href: "https://code.visualstudio.com",
    },
  ];

  return (
    <FadeContent
      blur={true}
      duration={500}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="relative min-h-screen isolate text-foreground">
        <div className="container mx-auto px-6 md:px-1 relative z-10">
          <section className="grid md:grid-cols-2 gap-10 py-16 relative z-10">
            <div className="flex flex-col justify-center">
              <GradientText
                colors={[
                  "var(--muted-foreground)",
                  "maroon",
                  "var(--muted-foreground)",
                  "var(--foreground)",
                  "var(--muted-foreground)",
                  "cyan",
                  "var(--muted-foreground)",
                ]}
                animationSpeed={10}
                showBorder={false}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                {t("welcome")}
              </GradientText>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight flex">
                {t("homeObject.rotatingHeadingPrefix")}
                <RotatingText
                  texts={Object.values(
                    t("homeObject.rotatingTexts", { returnObjects: true })
                  )}
                  mainClassName="bg-foreground text-background overflow-hidden justify-center rounded-lg px-1 mx-3"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </h2>
              <div className="mt-4 leading-relaxed font-extrabold">
                <ShinyText text={t("usedTechs")} disabled={false} speed={3} />
                <br />
                <span className="text-muted-foreground font-extrabold">
                  {t("initSince").toLowerCase() + " "}
                  <CountUp
                    from={0}
                    to={daysSince}
                    separator=","
                    direction="up"
                    duration={2}
                  />
                  {" " + t("days") + "."}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("commandPalette.hint_pre")} <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd>{" "}
                + <Kbd>K</Kbd> {t("commandPalette.hint_post")}
              </p>
              <div className="mt-6 flex gap-3">
                <StarBorder
                  as="button"
                  className="transition-transform duration-300 ease-in-out hover:scale-105"
                  thickness={3}
                  color="cyan"
                  speed="5s"
                >
                  <Link to="/cv">{t("homeObject.seeCv")}</Link>
                </StarBorder>
                <StarBorder
                  as="button"
                  className="transition-transform duration-300 ease-in-out hover:scale-105"
                  color="cyan"
                  speed="5s"
                >
                  <Link to="/beta">{t("homeObject.seeDemos")}</Link>
                </StarBorder>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="w-full max-w-[300px] md:max-w-[360px]">
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

          <section className="flex-col justify-center">
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
          </section>
          <section>
            <FallingText
              text={t("homeObject.fallingText")}
              highlightWords={Object.values(
                t("homeObject.fallingHighlights", {
                  returnObjects: true,
                })
              )}
              trigger="click"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1.5rem"
              mouseConstraintStiffness={0.9}
            />
            <div className="relative">
              <FallingIcon />
            </div>
            <div className="relative py-18">
              <LogoLoop
                logos={techLogos}
                speed={50}
                direction="left"
                logoHeight={48}
                gap={80}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="var(--background)"
                ariaLabel={t("homeObject.logoAria")}
              />
              <CurvedLoop
                marqueeText="React ✦ TypeScript ✦ Tailwind CSS ✦ Docker ✦ Vite ✦ Shadcn UI ✦ GitHub ✦ JavaScript ✦ VS Code
"
                speed={1}
                curveAmount={150}
                direction="left"
                interactive={true}
                className="text-4xl md:text-5xl font-bold"
              />
            </div>
            <div></div>
          </section>
        </div>

        <section className="z-10 py-5 sticky bottom-0">
          <GlassSurface
            width="100%"
            height={64}
            borderRadius={24}
            className="mx-auto flex items-center justify-center max-w-[600px] font-extrabold"
          >
            <div
              ref={containerRef}
              className="relative flex justify-around leading-tight items-center font-bold text-lg"
            >
              <VariableProximity
                label={t("homeObject.available")}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>
          </GlassSurface>
        </section>
      </div>
    </FadeContent>
  );
};
export default Home;
