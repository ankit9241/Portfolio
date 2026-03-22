/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  important: true,
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Custom Dark Theme Colors
        'dark-base': '#111111',
        'surface-dark': '#1A1A1A',
        'elevated-surface': '#222222',
        'card-bg': '#1E1E1E',
        'text-primary': '#FFFFFF',
        'text-secondary': '#BDBDBD',
        'text-subtle': '#EAEAEA',
        'border-light': '#2A2A2A',
        'border-input': '#333333',
        'accent': '#3A86FF',
        'accent-hover': '#6DA8FF',
        'accent-glow': 'rgba(58, 134, 255, 0.4)',
        'gradient-blob': 'rgba(58, 134, 255, 0.15)',
        
        text: {
          light: 'hsl(var(--foreground))',
          dark: 'hsl(var(--foreground))',
        },
        border: {
          light: 'hsl(214.3 31.8% 91.4%)',
          dark: 'hsl(217.2 32.6% 17.5%)',
          DEFAULT: 'hsl(var(--border))'
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          light: 'hsl(0 0% 100%)',
          dark: 'hsl(222.2 84% 4.9%)',
          DEFAULT: 'hsl(var(--background))'
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}