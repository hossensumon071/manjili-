import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Official Manzili palette (brand kit): Blue #069AD7 · Grey #373535 · Orange #F28E21 · Light Grey #EFEFEF
        // "dark"/"deep" shades are for text and surfaces that must meet WCAG AA 4.5:1.
        brand: {
          DEFAULT: "#069AD7", // decoration, icons, large type (3.2:1 on white)
          dark: "#0474A1", // links, small blue text, primary buttons (5.2:1 with white)
          deep: "#045A86", // dark blue surfaces, hover (7.5:1 with white)
          light: "#E6F5FB", // blue tint fills
          sky: "#3DB2E3",
          footer: "#0477AB", // footer surface — brand hue, 5.0:1 with white
        },
        accent: {
          DEFAULT: "#F28E21", // decoration only (2.4:1 on white)
          hover: "#D9761A",
          soft: "#F6A54D",
          dark: "#9D5C15", // small orange text (5.3:1 on white)
        },
        ink: "#373535",
        body: "#555353",
        muted: "#6B6969",
        page: "#F7F7F7",
        mist: "#EFEFEF",
        line: "#E4E3E3",
        night: "#2A2828",
        status: "#0474A1",
      },
      fontFamily: {
        sans: ["var(--font-cairo)", "system-ui", "sans-serif"],
        display: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.375rem, 5vw, 4.5rem)", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.75rem, 3.2vw, 2.875rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        h3: ["clamp(1.25rem, 1.8vw, 1.625rem)", { lineHeight: "1.3", letterSpacing: "-0.5px" }],
        h4: ["clamp(1.0625rem, 1.3vw, 1.25rem)", { lineHeight: "1.35" }],
        lead: ["clamp(1rem, 1.4vw, 1.3125rem)", { lineHeight: "1.5" }],
        eyebrow: ["clamp(0.75rem, 0.9vw, 0.8125rem)", { lineHeight: "1.2", letterSpacing: "0.05em" }],
      },
      borderRadius: {
        card: "20px",
        stage: "28px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(55,53,53,0.05), 0 18px 40px -22px rgba(55,53,53,0.2)",
        float: "0 30px 60px -25px rgba(4,60,90,0.45)",
        "glow-orange": "0 10px 30px -10px rgba(242,142,33,0.5)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        ripple: {
          "0%": { transform: "scale(0.85)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "scale(1.25)", opacity: "0" },
        },
        sheen: {
          "0%": { transform: "translateX(-120%) skewX(-18deg)" },
          "100%": { transform: "translateX(220%) skewX(-18deg)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 1.8s cubic-bezier(0.2,0.6,0.3,1) infinite",
        ripple: "ripple 3.6s ease-out infinite",
        sheen: "sheen 1.1s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
