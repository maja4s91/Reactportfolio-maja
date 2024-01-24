import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

const AnimatedBackground = () => {
  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 1, max: 8 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
  };
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};
export default AnimatedBackground;
