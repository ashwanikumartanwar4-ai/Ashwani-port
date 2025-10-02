import React, { useCallback, useMemo } from 'react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional callback when particles are loaded
  }, []);

  const particlesConfig = useMemo(() => ({
    autoPlay: true,
    background: {
      color: {
        value: "#000"
      },
      image: "",
      position: "",
      repeat: "",
      size: "",
      opacity: 1
    },
    backgroundMask: {
      composite: "destination-out",
      cover: {
        opacity: 1,
        color: {
          value: ""
        }
      },
      enable: false
    },
    clear: true,
    defaultThemes: {},
    delay: 0,
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window" as const,
      events: {
        onClick: {
          enable: false,
          mode: []
        },
        onDiv: {
          selectors: [],
          enable: false,
          mode: [],
          type: "circle" as const
        },
        onHover: {
          enable: true,
          mode: "trail" as const,
          parallax: {
            enable: false,
            force: 2,
            smooth: 10
          }
        },
        resize: {
          delay: 0.5,
          enable: true
        }
      },
      modes: {
        trail: {
          delay: 0.01,
          pauseOnStop: true,
          quantity: 3,
          particles: {
            color: {
              value: "#64ffda", // Changed to cyber green
              animation: {
                enable: false
              }
            },
            collisions: {
              enable: false
            },
            links: {
              enable: false
            },
            move: {
              outModes: {
                default: "destroy" as const
              },
              speed: 2
            },
            size: {
              value: {
                min: 1,
                max: 5
              },
              animation: {
                enable: true,
                speed: 5,
                sync: true,
                startValue: "min" as const,
                destroy: "max" as const
              }
            }
          }
        },
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad" as const,
          factor: 1,
          maxSpeed: 50,
          speed: 1
        },
        bounce: {
          distance: 200
        },
        bubble: {
          distance: 200,
          duration: 0.4,
          mix: false,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: []
          }
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          },
          radius: 60
        },
        grab: {
          distance: 100,
          links: {
            blink: false,
            consent: false,
            opacity: 1
          }
        },
        push: {
          default: true,
          groups: [],
          quantity: 4
        },
        remove: {
          quantity: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad" as const,
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad" as const,
            selectors: []
          }
        },
        slow: {
          factor: 3,
          radius: 200
        }
      }
    },
    manualParticles: [],
    particles: {
      bounce: {
        horizontal: {
          value: 1
        },
        vertical: {
          value: 1
        }
      },
      collisions: {
        absorb: {
          speed: 2
        },
        bounce: {
          horizontal: {
            value: 1
          },
          vertical: {
            value: 1
          }
        },
        enable: false,
        maxSpeed: 50,
        mode: "bounce" as const,
        overlap: {
          enable: true,
          retries: 0
        }
      },
      color: {
        value: ["#64ffda", "#38bdf8", "#a855f7"], // Cyber theme colors
        animation: {
          h: {
            count: 0,
            enable: false,
            speed: 20,
            decay: 0,
            delay: 0,
            sync: false,
            offset: 0
          },
          s: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0
          },
          l: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0
          }
        }
      },
      effect: {
        close: true,
        fill: true,
        options: {},
        type: []
      },
      groups: {},
      move: {
        angle: {
          offset: 0,
          value: 90
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 3000,
            y: 3000
          }
        },
        center: {
          x: 50,
          y: 50,
          mode: "percent" as const,
          radius: 0
        },
        decay: 0,
        distance: {},
        direction: "none" as const,
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50
        },
        path: {
          clamp: true,
          delay: {
            value: 0
          },
          enable: false,
          options: {}
        },
        outModes: {
          default: "out" as const,
          bottom: "out" as const,
          left: "out" as const,
          right: "out" as const,
          top: "out" as const
        },
        random: false,
        size: false,
        speed: 1, // Slower movement
        spin: {
          acceleration: 0,
          enable: false
        },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fill: {}
        },
        vibrate: false,
        warp: false
      },
      number: {
        density: {
          enable: true,
          width: 1920,
          height: 1080
        },
        limit: {
          mode: "delete" as const,
          value: 0
        },
        value: 50 // Further reduced particle count for better performance
      },
      opacity: {
        value: {
          min: 0.2,
          max: 0.8
        },
        animation: {
          count: 0,
          enable: false,
          speed: 0.3,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto" as const,
          startValue: "random" as const,
          destroy: "none" as const
        }
      },
      reduceDuplicates: false,
      shadow: {
        blur: 0,
        color: {
          value: "#000"
        },
        enable: false,
        offset: {
          x: 0,
          y: 0
        }
      },
      shape: {
        close: true,
        fill: true,
        options: {},
        type: "circle" as const
      },
      size: {
        value: {
          min: 1,
          max: 3
        },
        animation: {
          count: 0,
          enable: true,
          speed: 2,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto" as const,
          startValue: "random" as const,
          destroy: "none" as const
        }
      },
      stroke: {
        width: 0
      },
      zIndex: {
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1
      },
      destroy: {
        bounds: {},
        mode: "none" as const,
        split: {
          count: 1,
          factor: {
            value: 3
          },
          rate: {
            value: {
              min: 4,
              max: 9
            }
          },
          sizeOffset: true,
          particles: {}
        }
      },
      roll: {
        darken: {
          enable: false,
          value: 0
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0
        },
        mode: "vertical" as const,
        speed: 25
      },
      tilt: {
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false
        },
        direction: "clockwise" as const,
        enable: false
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1
        }
      },
      wobble: {
        distance: 5,
        enable: false,
        speed: {
          angle: 50,
          move: 10
        }
      },
      life: {
        count: 0,
        delay: {
          value: 0,
          sync: false
        },
        duration: {
          value: 0,
          sync: false
        }
      },
      rotate: {
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false
        },
        direction: "clockwise" as const,
        path: false
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false
        },
        enable: false,
        opacity: 1,
        rotation: {
          value: 45
        },
        width: 1
      },
      links: {
        blink: false,
        color: {
          value: "#64ffda" // Cyber green links
        },
        consent: false,
        distance: 120,
        enable: true,
        frequency: 1,
        opacity: 0.4,
        shadow: {
          blur: 5,
          color: {
            value: "#000"
          },
          enable: false
        },
        triangles: {
          enable: false,
          frequency: 1
        },
        width: 1,
        warp: false
      },
      repulse: {
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1
      }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    emitters: [],
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true
      }
    }
  }), []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
      className="absolute inset-0 w-full h-full"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  );
};

export default ParticlesBackground;