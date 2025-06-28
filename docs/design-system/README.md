# Flexperts Design System

## 🎨 Overview

The Flexperts design system is built on principles of simplicity, accessibility, and delight. Inspired by WhatsApp's intuitive interface, we prioritize clarity and ease of use over complexity.

## 🎯 Design Principles

### 1. **Human-First**
- No technical jargon
- Conversational interfaces
- Forgiving interactions
- Clear feedback

### 2. **Mobile-First**
- Touch-friendly targets (min 44x44px)
- Thumb-reachable navigation
- Responsive by default
- Performance optimized

### 3. **Accessible**
- WCAG 2.1 AA compliant
- High contrast ratios
- Keyboard navigable
- Screen reader friendly

### 4. **Delightful**
- Smooth animations
- Micro-interactions
- Celebration moments
- Personality in copy

## 🎨 Visual Language

### Color Palette

#### Light Theme
```css
--color-primary: #22C55E;        /* Green - Success, CTAs */
--color-primary-hover: #16A34A;  /* Darker green for hover */
--color-primary-light: #DCFCE7;  /* Light green backgrounds */

--color-background: #FFFFFF;     /* Main background */
--color-surface: #F9FAFB;        /* Cards, elevated surfaces */
--color-surface-2: #F3F4F6;      /* Secondary surfaces */
--color-border: #E5E7EB;         /* Borders, dividers */

--color-text: #111827;           /* Primary text */
--color-text-secondary: #4B5563; /* Secondary text */
--color-text-muted: #9CA3AF;     /* Muted text */
```

#### Dark Theme
```css
--color-primary: #16C181;        /* Adjusted for dark mode */
--color-primary-hover: #10A574;  
--color-primary-light: #0F7860;  

--color-background: #14191C;     /* Main background */
--color-surface: #1F2428;        /* Cards, elevated surfaces */
--color-surface-2: #2D3339;      /* Secondary surfaces */
--color-border: #3A4046;         /* Borders, dividers */

--color-text: #F7F9FA;           /* Primary text */
--color-text-secondary: #D1D9E0; /* Secondary text */
--color-text-muted: #8B949E;     /* Muted text */
```

### Typography

```css
--font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Type Scale */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing

```css
/* Base unit: 4px (0.25rem) */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

### Breakpoints

```css
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktops */
--breakpoint-xl: 1280px;  /* Large screens */
--breakpoint-2xl: 1536px; /* Extra large */
```

## 🧩 Components

### Base Components
- **Button**: Primary, Secondary, Ghost variants
- **Input**: Text, Email, Password, Textarea
- **Card**: Container with optional hover states
- **Badge**: Status indicators
- **Avatar**: User profile pictures
- **Icon**: Lucide React icons

### Composite Components
- **ChatMessage**: WhatsApp-style message bubbles
- **WireframeCard**: Visual preview cards
- **FeatureCard**: Feature display cards
- **ToolCard**: Tool selection cards

### Layout Components
- **Container**: Max-width responsive container
- **Grid**: Responsive grid system
- **Stack**: Vertical/horizontal spacing
- **Sidebar**: Desktop navigation
- **BottomNav**: Mobile navigation

## 📱 Mobile Patterns

### Navigation
- Bottom tab bar for primary navigation
- Floating action button for primary actions
- Swipe gestures for navigation
- Pull-to-refresh for updates

### Input
- Large touch targets (min 44x44px)
- Auto-growing textareas
- Floating labels
- Inline validation

### Feedback
- Toast notifications
- Loading skeletons
- Progress indicators
- Haptic feedback (where supported)

## ✨ Animations

### Timing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### Durations
```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
```

### Common Animations
- Fade in/out
- Slide up/down
- Scale on press
- Skeleton loading
- Progress bars

## 🎯 Best Practices

### Do's
- ✅ Use semantic HTML
- ✅ Include focus states
- ✅ Test on real devices
- ✅ Optimize for performance
- ✅ Write descriptive alt text

### Don'ts
- ❌ Use color alone for meaning
- ❌ Disable user scaling
- ❌ Hide focus indicators
- ❌ Use tiny touch targets
- ❌ Autoplay media with sound

## 📚 Resources

- [Component Examples](/docs/design-system/components/)
- [Color Playground](/docs/design-system/colors/)
- [Typography Guide](/docs/design-system/typography/)
- [Icons Reference](/docs/design-system/icons/)
- [Accessibility Checklist](/docs/design-system/accessibility/)

---

*The Flexperts design system evolves with user needs. Contributions welcome!*