import { Config } from "tailwindcss";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border, 0, 0, 0))", // Added default value
        input: "hsl(var(--input, 0, 0, 0))", // Added default value
        ring: "hsl(var(--ring, 0, 0, 0))", // Added default value
        background: "hsl(var(--background, 0, 0, 0))", // Added default value
        foreground: "hsl(var(--foreground, 0, 0, 0))", // Added default value
        primary: {
          DEFAULT: "hsl(var(--primary, 0, 0, 0))", // Added default value
          foreground: "hsl(var(--primary-foreground, 0, 0, 0))", // Added default value
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 0, 0, 0))", // Added default value
          foreground: "hsl(var(--secondary-foreground, 0, 0, 0))", // Added default value
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive, 0, 0, 0))", // Added default value
          foreground: "hsl(var(--destructive-foreground, 0, 0, 0))", // Added default value
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 0, 0, 0))", // Added default value
          foreground: "hsl(var(--muted-foreground, 0, 0, 0))", // Added default value
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 0, 0, 0))", // Added default value
          foreground: "hsl(var(--accent-foreground, 0, 0, 0))", // Added default value
        },
        popover: {
          DEFAULT: "hsl(var(--popover, 0, 0, 0))", // Added default value
          foreground: "hsl(var(--popover-foreground, 0, 0, 0))", // Added default value
        },
        card: {
          DEFAULT: "hsl(var(--card, 0, 0, 0))", // Added default value
          foreground: "hsl(var(--card-foreground, 0, 0, 0))", // Added default value
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        orbit: {
          "0%": {
              transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
              transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        aurora: "aurora 60s linear infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }: { addBase: (arg0: Record<string, Record<string, string>>) => void, theme: (arg0: string) => Record<string, string> }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  ) as Record<string, string>;

  addBase({
    ":root": newVars,
  });
}

export default config;
