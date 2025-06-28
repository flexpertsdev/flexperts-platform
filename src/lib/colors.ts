// Color palette utilities for the Flexperts platform

export const colors = {
  // Primary colors
  primary: {
    DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
    hover: 'rgb(var(--color-primary-hover) / <alpha-value>)',
    light: 'rgb(var(--color-primary-light) / <alpha-value>)',
    dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
  },
  
  // Semantic colors
  success: 'rgb(var(--color-success) / <alpha-value>)',
  error: 'rgb(var(--color-error) / <alpha-value>)',
  warning: 'rgb(var(--color-warning) / <alpha-value>)',
  info: 'rgb(var(--color-info) / <alpha-value>)',
  
  // Background colors
  background: 'rgb(var(--color-background) / <alpha-value>)',
  surface: {
    DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
    2: 'rgb(var(--color-surface-2) / <alpha-value>)',
    3: 'rgb(var(--color-surface-3) / <alpha-value>)',
  },
  canvas: 'rgb(var(--color-canvas) / <alpha-value>)',
  
  // Text colors
  text: {
    DEFAULT: 'rgb(var(--color-text) / <alpha-value>)',
    secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
    tertiary: 'rgb(var(--color-text-tertiary) / <alpha-value>)',
    muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
  },
  
  // Border colors
  border: {
    DEFAULT: 'rgb(var(--color-border) / <alpha-value>)',
    secondary: 'rgb(var(--color-border-secondary) / <alpha-value>)',
  },
} as const

// Color utility functions
export function getColorValue(cssVar: string): string {
  if (typeof window === 'undefined') return ''
  
  const root = document.documentElement
  const value = getComputedStyle(root).getPropertyValue(cssVar).trim()
  return value
}

export function getRgbColor(cssVar: string): [number, number, number] {
  const value = getColorValue(cssVar)
  const [r, g, b] = value.split(' ').map(Number)
  return [r || 0, g || 0, b || 0]
}

export function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [0, 0, 0]
}

export function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
}

export function setColorVariable(cssVar: string, value: string): void {
  if (typeof window === 'undefined') return
  
  const root = document.documentElement
  root.style.setProperty(cssVar, value)
}

// Theme utilities
export function applyTheme(theme: 'light' | 'dark'): void {
  if (typeof window === 'undefined') return
  
  const root = document.documentElement
  if (theme === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
  
  // Store preference
  localStorage.setItem('theme', theme)
}

export function getTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') {
    return stored
  }
  
  // Check system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  
  return 'light'
}

export function toggleTheme(): void {
  const current = getTheme()
  const next = current === 'light' ? 'dark' : 'light'
  applyTheme(next)
}

// Color manipulation utilities
export function lighten(rgb: [number, number, number], amount: number): [number, number, number] {
  return rgb.map(val => Math.min(255, val + (255 - val) * amount)) as [number, number, number]
}

export function darken(rgb: [number, number, number], amount: number): [number, number, number] {
  return rgb.map(val => Math.max(0, val * (1 - amount))) as [number, number, number]
}

export function alpha(rgb: [number, number, number], opacity: number): string {
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`
}

// Predefined color shades
export const shades = {
  50: 0.95,
  100: 0.9,
  200: 0.8,
  300: 0.6,
  400: 0.4,
  500: 0,
  600: 0.2,
  700: 0.4,
  800: 0.6,
  900: 0.8,
} as const

export function generateColorShades(baseRgb: [number, number, number]) {
  return {
    50: lighten(baseRgb, shades[50]),
    100: lighten(baseRgb, shades[100]),
    200: lighten(baseRgb, shades[200]),
    300: lighten(baseRgb, shades[300]),
    400: lighten(baseRgb, shades[400]),
    500: baseRgb,
    600: darken(baseRgb, shades[600]),
    700: darken(baseRgb, shades[700]),
    800: darken(baseRgb, shades[800]),
    900: darken(baseRgb, shades[900]),
  }
}