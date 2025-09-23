import FallingText from "../../components/reactBits/FallinText/FallingText";
import ClickSpark from "../../components/reactBits/ClickSpark/ClickSpark";
//import Noise from "../../components/reactBits/Noise/Noise";
import SplashCursor from "../../components/reactBits/SplashCursor/SplashCursor";
import MagicBento from "../../components/reactBits/MagicBento/MagicBento";
import LogoLoop from "../../components/reactBits/LogoLoop/LogoLoop";
import TargetCursor from "../../components/reactBits/TargetCursor/TargetCursor";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

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

const Home: React.FC = () => {
  return (
    <>
      <div>
        <div>
          <TargetCursor spinDuration={5} hideDefaultCursor={false} />
          <h1>Hover over the elements below</h1>
          <button className="cursor-target">Click me!</button>
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
