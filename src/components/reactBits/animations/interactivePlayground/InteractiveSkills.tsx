import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiVite,
} from "react-icons/si";

const techLogos = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiVite, name: "Vite" },
];

const InteractiveSkills: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Matter.Engine.create());
  const [bodies, setBodies] = useState<Matter.Body[]>([]);

  useEffect(() => {
    const engine = engineRef.current;
    const world = engine.world;
    // Disable gravity initially
    engine.gravity.y = 0;

    const renderElement = sceneRef.current;
    if (!renderElement) return;

    const { clientWidth: width, clientHeight: height } = renderElement;

    const ground = Matter.Bodies.rectangle(width / 2, height + 25, width, 50, {
      isStatic: true,
    });
    const ceiling = Matter.Bodies.rectangle(width / 2, -25, width, 50, {
      isStatic: true,
    });
    const leftWall = Matter.Bodies.rectangle(-25, height / 2, 50, height, {
      isStatic: true,
    });
    const rightWall = Matter.Bodies.rectangle(
      width + 25,
      height / 2,
      50,
      height,
      { isStatic: true }
    );

    const initialBodies = techLogos.map((tech, i) => {
      const size = Math.min(width, height) / 7;
      return Matter.Bodies.rectangle(
        size + Math.random() * (width - size * 2),
        size + Math.random() * (height - size * 2),
        size,
        size,
        {
          restitution: 0.6,
          friction: 0.1,
          render: {
            // We will use React to render, not the canvas renderer
          },
        }
      );
    });
    setBodies(initialBodies);

    Matter.Composite.add(world, [
      ground,
      ceiling,
      leftWall,
      rightWall,
      ...initialBodies,
    ]);

    // Mouse control
    const mouse = Matter.Mouse.create(renderElement);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    Matter.Composite.add(world, mouseConstraint);

    // Run the simulation
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Start gravity after a delay to let things settle
    const gravityTimeout = setTimeout(() => {
      engine.gravity.y = 0.4;
    }, 1000);

    // Update loop to sync React state with Matter.js
    const update = () => {
      setBodies([...initialBodies]); // Trigger re-render
      requestAnimationFrame(update);
    };
    update();

    return () => {
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      Matter.Composite.clear(world, false);
      clearTimeout(gravityTimeout);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="relative w-full h-[400px] border rounded-lg overflow-hidden"
    >
      {bodies.map((body, i) => {
        const { x, y } = body.position;
        const angle = body.angle;
        const Icon = techLogos[i].icon;
        const size =
          Math.min(
            sceneRef.current?.clientWidth || 0,
            sceneRef.current?.clientHeight || 0
          ) / 7;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x - size / 2,
              top: y - size / 2,
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotate(${angle}rad)`,
            }}
            className="flex items-center justify-center bg-card/50 backdrop-blur-sm border rounded-md shadow-lg"
          >
            <Icon className="w-1/2 h-1/2 text-foreground" />
          </div>
        );
      })}
    </div>
  );
};

export default InteractiveSkills;
