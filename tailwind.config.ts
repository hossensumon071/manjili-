import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0066FF",
          dark: "#0050C8",
          deep: "#0A55C8",
          light: "#EBF3FF",
          sky: "#2E8BF0",
          footer: "#2378DE",
        },
        accent: {
          DEFAULT: "#FF7A00",
          hover: "#E86B00",
          soft: "#FF9B3D",
        },
        ink: "#0B132B",
        body: "#475569",
        muted: "#94A3B8",
        page: "#F3F8FD",
        line: "#E2E8F0",
        night: "#080C16",
        status: "#10B981",
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
        eyebrow: ["clamp(0.6875rem, 0.9vw, 0.8125rem)", { lineHeight: "1", letterSpacing: "0.05em" }],
      },
      borderRadius: {
        card: "20px",
        stage: "28px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,19,43,0.04), 0 18px 40px -22px rgba(11,19,43,0.18)",
        float: "0 30px 60px -25px rgba(10,40,90,0.45)",
        "glow-orange": "0 10px 30px -10px rgba(255,122,0,0.55)",
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
