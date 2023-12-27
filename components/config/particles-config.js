const particlesConfig = {
  autoPlay: true,
  background: {
    color: {
      value: "#000000"
    },
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opacity: 1
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff"
      },
      opacity: 1
    },
    enable: false
  },
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: false,
        mode: "push"
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: "circle"
      },
      onHover: {
        enable: true,
        mode: "grab"  // Change mode to "grab."
      },
      resize: {
        delay: 0.5,
        enable: true
      }
    },
    modes: {
      grab: {  // Define the "grab" mode for hovering.
        distance: 200,  // Increase the distance to create a larger radius.
        line_linked: {
          opacity: 1  // Ensure the line is fully visible.
        }
      }
    }
  },
  particles: {
    number: {
      density: {
        enable: true,
        value_area: 1000
      },
      value: 50,
    },
    size: {
      random: true,
      value: 10
    },
    opacity: {
      random: true,
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true
    }
  }
};

export default particlesConfig;
