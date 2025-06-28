import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "rgb(var(--color-border) / <alpha-value>)",
        "border-secondary": "rgb(var(--color-border-secondary) / <alpha-value>)",
        input: "rgb(var(--color-border) / <alpha-value>)",
        ring: "rgb(var(--color-primary) / <alpha-value>)",
        background: {
          DEFAULT: "rgb(var(--color-background) / <alpha-value>)",
        },
        foreground: "rgb(var(--color-text) / <alpha-value>)",
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          hover: "rgb(var(--color-primary-hover) / <alpha-value>)",
          light: "rgb(var(--color-primary-light) / <alpha-value>)",
          dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
          foreground: "rgb(255 255 255 / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--color-surface-2) / <alpha-value>)",
          foreground: "rgb(var(--color-text) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--color-error) / <alpha-value>)",
          foreground: "rgb(255 255 255 / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--color-surface-2) / <alpha-value>)",
          foreground: "rgb(var(--color-text-muted) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-surface-2) / <alpha-value>)",
          foreground: "rgb(var(--color-text) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "rgb(var(--color-surface) / <alpha-value>)",
          2: "rgb(var(--color-surface-2) / <alpha-value>)",
          3: "rgb(var(--color-surface-3) / <alpha-value>)",
        },
        text: {
          DEFAULT: "rgb(var(--color-text) / <alpha-value>)",
          secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--color-text-tertiary) / <alpha-value>)",
          muted: "rgb(var(--color-text-muted) / <alpha-value>)",
        },
        success: "rgb(var(--color-success) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      fontSize: {
        xs: ["var(--text-xs)", { lineHeight: "1rem" }],
        sm: ["var(--text-sm)", { lineHeight: "1.25rem" }],
        base: ["var(--text-base)", { lineHeight: "1.5rem" }],
        lg: ["var(--text-lg)", { lineHeight: "1.75rem" }],
        xl: ["var(--text-xl)", { lineHeight: "1.75rem" }],
        "2xl": ["var(--text-2xl)", { lineHeight: "2rem" }],
        "3xl": ["var(--text-3xl)", { lineHeight: "2.25rem" }],
        "4xl": ["var(--text-4xl)", { lineHeight: "2.5rem" }],
        "5xl": ["var(--text-5xl)", { lineHeight: "1" }],
        "6xl": ["var(--text-6xl)", { lineHeight: "1" }],
        "7xl": ["var(--text-7xl)", { lineHeight: "1" }],
      },
      fontWeight: {
        light: "var(--font-light)",
        normal: "var(--font-normal)",
        medium: "var(--font-medium)",
        semibold: "var(--font-semibold)",
        bold: "var(--font-bold)",
      },
      spacing: {
        0: "var(--space-0)",
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        7: "var(--space-7)",
        8: "var(--space-8)",
        9: "var(--space-9)",
        10: "var(--space-10)",
        12: "var(--space-12)",
        14: "var(--space-14)",
        16: "var(--space-16)",
        20: "var(--space-20)",
        24: "var(--space-24)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        DEFAULT: "var(--duration-normal)",
        slow: "var(--duration-slow)",
      },
      transitionTimingFunction: {
        "ease-in": "var(--ease-in)",
        "ease-out": "var(--ease-out)",
        "ease-in-out": "var(--ease-in-out)",
        "ease-spring": "var(--ease-spring)",
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
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-out": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in var(--duration-normal) var(--ease-out)",
        "fade-out": "fade-out var(--duration-normal) var(--ease-in)",
        "slide-in": "slide-in var(--duration-normal) var(--ease-out)",
        "slide-out": "slide-out var(--duration-normal) var(--ease-in)",
      },
    },
  },
  plugins: [],
};

export default config;