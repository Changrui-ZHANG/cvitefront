import MagicBento from "@/components/reactBits/animations/magicBento/MagicBento";
import { ModeToggle } from "@/components/themeMode/mode-toggle";
import Aurora from "@/components/reactBits/backgrounds/aurora/Aurora";
import ModelViewer from "@/components/reactBits/animations/modelViewer/ModelViewer";
import modelTest from "/assets/3DModels/LOL/Chibi/x02m/annie_superfan_d'arcane_chibi_prestige.glb";
import { useTranslation } from "react-i18next";
import { LangToggle } from "@/components/i18n/lang-toggle";
import { Button } from "@/components/ui/button";

import GlassSurface from "@/components/reactBits/components/glassSurface/GlassSurface";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LaserFlow } from "@/components/reactBits/animations/laserFlow/LaserFlow";
import GradientText from "@/components/reactBits/textAnimations/gradientText/GradientText";
import StarBorder from "@/components/reactBits/animations/starBorder/StartBorder";
import InteractiveSkills from "@/components/reactBits/animations/interactivePlayground/InteractiveSkills";

const Kbd = ({ children }: { children: React.ReactNode }) => (
  <kbd className="px-2 py-1.5 text-xs font-semibold text-foreground bg-primary/20 border border-primary/40 rounded-lg">
    {children}
  </kbd>
);

//aurora component: theme change observer------------------------------
const Home: React.FC = () => {
  const { t } = useTranslation();
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(
      typeof window !== "undefined" &&
        /Mac|iPod|iPhone|iPad/.test(navigator.platform)
    );
  }, []);

  return (
    <div className="relative min-h-screen isolate text-foreground">
      <div className="container mx-auto px-6 md:px-1 relative z-10">
        <section className="grid md:grid-cols-2 gap-10 py-16 relative z-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("welcome")}
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed ">
              {t("usedTechs")}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("commandPalette.hint_pre")} <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd> +{" "}
              <Kbd>K</Kbd> {t("commandPalette.hint_post")}
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
                <Link to="/index">{t("homeObject.seeDemos")}</Link>
              </StarBorder>
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
          <h2 className="text-3xl font-bold text-center mb-8">
            {t("homeObject.interactiveSkillsTitle")}
          </h2>
          <InteractiveSkills />
        </section>

        <section className="relative z-10 py-12">
          <GlassSurface
            width={600}
            height={64}
            borderRadius={24}
            className="mx-auto flex items-center justify-center"
          >
            <span className="leading-relaxed">{t("homeObject.available")}</span>
          </GlassSurface>
        </section>
      </div>
    </div>
  );
};
export default Home;
