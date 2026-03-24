import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


function HeroParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={{
        fullScreen: { enable: false },

        particles: {
          number: { value: 80 },

          color: { value: "#d4af37" },

          size: { value: { min: 1, max: 3 } },

          opacity: { value: 0.7 },

          move: {
            enable: true,
            speed: 1,
          },

          links: {
            enable: true,
            color: "#d4af37",
            opacity: 0.2,
            distance: 120,
          },
        },

        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
        },
      }}
    />
  );
}

export default HeroParticles;