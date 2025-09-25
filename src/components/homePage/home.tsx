import FallingText from "../reactBits/fallinText/FallingText";
import ClickSpark from "../reactBits/clickSpark/ClickSpark";
//import Noise from "../../components/reactBits/Noise/Noise";
import SplashCursor from "../reactBits/splashCursor/SplashCursor";
import MagicBento from "../reactBits/magicBento/MagicBento";
import LogoLoop from "../reactBits/logoLoop/LogoLoop";
import TargetCursor from "../reactBits/targetCursor/TargetCursor";
import { ModeToggle } from "../shadcn/themeMode/mode-toggle";
import "./home.css";
import Aurora from "../shadcn/background/aurora/Aurora";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { useEffect, useState } from "react";

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
];

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
  return (
    <>
      <Aurora colorStops={auroraStops} blend={1} amplitude={1.0} speed={1} />
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
