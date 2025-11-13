import FallingText from "@/components/reactBits/textAnimations/fallinText/FallingText";
import ClickSpark from "@/components/reactBits/animations/clickSpark/ClickSpark";
//import Noise from "../../components/reactBits/Noise/Noise";
import SplashCursor from "@/components/reactBits/animations/splashCursor/SplashCursor";
import MagicBento from "@/components/reactBits/animations/magicBento/MagicBento";
import LogoLoop from "@/components/reactBits/animations/logoLoop/LogoLoop";
import TargetCursor from "@/components/reactBits/animations/targetCursor/TargetCursor";
import { ModeToggle } from "@/components/themeMode/mode-toggle";
import Aurora from "@/components/reactBits/backgrounds/aurora/Aurora";
//import Threads from "../reactBits/backgrounds/threads/Threads";
import Orb from "@/components/reactBits/backgrounds/orb/Orb";
import ModelViewer from "@/components/reactBits/animations/modelViewer/ModelViewer";
//import ModelViewerLightswind from "../reactBits/animations/modelViewer/ModelViewerLightswind";
//import Skarner from "../../assets/3DModels/LOL/sk.glb";
//import Zed from "../../assets/3DModels/LOL/zed.glb";
import modelTest from "/assets/3DModels/LOL/Chibi/x02m/annie_superfan_d'arcane_chibi_prestige.glb";
import ProfileCard from "@/components/reactBits/components/profileCard/ProfileCard";
import { useTranslation, Trans } from "react-i18next";
import { LangToggle } from "@/components/i18n/lang-toggle";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { useEffect, useState } from "react";
//import PillNav from "../reactBits/components/pillNav/PillNav";
import GooeyNav from "@/components/reactBits/components/gooeyNav/GooeyNav";
import { Outlet, useLocation } from "react-router-dom";
import AnimatedContent from "@/components/reactBits/animations/animatedContent/animatedContent";
import GlassSurface from "@/components/reactBits/components/glassSurface/GlassSurface";
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
  /*get aurora syle from css "index.css"*/
  const [auroraStops, setAuroraStops] = useState<string[]>();
  useEffect(() => {
    const updateAuroraColors = () => {
      const auroraVar = getComputedStyle(document.documentElement)
        .getPropertyValue("--aurora")
        .trim();
      if (auroraVar) setAuroraStops(auroraVar.split(","));
      console.log("Updated aurora colors:", auroraVar);
    };

    // appel initial
    updateAuroraColors();

    // observer la classe "dark" sur <html>
    const observer = new MutationObserver(updateAuroraColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  //-------------------------------------------------------------
  //nav bar position reader-----------------------------------------------------
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#" },
  ];
  function GooeyNavWrapper(items: { label: string; href: string }[]) {
    const location = useLocation();
    //const navigate = useNavigate();

    // Trouver index selon l’URL
    const activeIndex = items.findIndex(
      (item) => item.href === location.pathname
    );

    return (
      <GooeyNav
        items={items}
        initialActiveIndex={activeIndex >= 0 ? activeIndex : 0}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    );
  }
  const { t } = useTranslation();

  return (
    <>
      <GlassSurface
        width={100}
        height={50}
        borderRadius={24}
        className="pill-label"
      >
        hello
      </GlassSurface>
      <LangToggle />
      {t("welcome")}
      <Outlet />
      <Aurora colorStops={auroraStops} blend={1} amplitude={1.0} speed={1} />
      <ModelViewer
        url={modelTest}
        width={200}
        height={200}
        showScreenshotButton={false}
        autoRotate={true}
      />
      <ProfileCard
        name="Javi A. Torres"
        title="Software Engineer"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/assets/Photos/Changrui.jpg"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log("Contact clicked")}
      />
      <div
        style={{
          position: "relative",
        }}
      >
        {GooeyNavWrapper(items)}
      </div>
      <div
        style={{
          width: "100%",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          pointerEvents: "none",
        }}
      >
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <ModeToggle />
      <TargetCursor spinDuration={5} hideDefaultCursor={false} />
      <div>
        <div>
          <h1>Hover over the elements below</h1>
          <button>Click me!</button>
          <div className="cursor-target">Hover target</div>
        </div>
        <SplashCursor />
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          {/*
      <Noise
        patternSize={250}
        patternScaleX={10}
        patternScaleY={10}
        patternRefreshInterval={5}
        patternAlpha={100}
      />*/}
          <FallingText
            text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
            highlightWords={[
              "React",
              "Bits",
              "animated",
              "components",
              "simplify",
            ]}
            highlightClass="highlighted"
            trigger="click"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="2em"
            mouseConstraintStiffness={0.9}
          />
        </ClickSpark>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0}
        >
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </AnimatedContent>
      </div>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </>
  );
};
export default Home;
