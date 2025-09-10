import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        neon: '#24f3ff',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "0.9375rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#0b1a20"
            },
            content1: {
              DEFAULT: "rgba(0,20,30,0.60)",
              foreground: "#e9fdff"
            },
            content2: {
              DEFAULT: "rgba(0,16,24,0.55)",
              foreground: "#e9fdff"
            },
            content3: {
              DEFAULT: "rgba(0,12,18,0.50)",
              foreground: "#e9fdff"
            },
            content4: {
              DEFAULT: "rgba(0,8,12,0.45)",
              foreground: "#e9fdff"
            },
            divider: {
              DEFAULT: "rgba(36,243,255,0.3)"
            },
            focus: {
              DEFAULT: "#24f3ff"
            },
            foreground: {
              DEFAULT: "#e9fdff"
            },
            primary: {
              50: "#e6fbff",
              100: "#ccf7ff",
              200: "#99efff",
              300: "#66e7ff",
              400: "#33dfff",
              500: "#24f3ff",
              600: "#00c2cc",
              700: "#009199",
              800: "#006166",
              900: "#003033",
              DEFAULT: "#24f3ff",
              foreground: "#000000"
            }
          }
        },
        dark: {
          colors: {
            background: {
              DEFAULT: "#0b1a20"
            },
            content1: {
              DEFAULT: "rgba(0,20,30,0.60)",
              foreground: "#e9fdff"
            },
            content2: {
              DEFAULT: "rgba(0,16,24,0.55)",
              foreground: "#e9fdff"
            },
            content3: {
              DEFAULT: "rgba(0,12,18,0.50)",
              foreground: "#e9fdff"
            },
            content4: {
              DEFAULT: "rgba(0,8,12,0.45)",
              foreground: "#e9fdff"
            },
            divider: {
              DEFAULT: "rgba(36,243,255,0.3)"
            },
            focus: {
              DEFAULT: "#24f3ff"
            },
            foreground: {
              DEFAULT: "#e9fdff"
            },
            primary: {
              50: "#e6fbff",
              100: "#ccf7ff",
              200: "#99efff",
              300: "#66e7ff",
              400: "#33dfff",
              500: "#24f3ff",
              600: "#00c2cc",
              700: "#009199",
              800: "#006166",
              900: "#003033",
              DEFAULT: "#24f3ff",
              foreground: "#000000"
            }
          }
        }
      }
    })
  ]
}
