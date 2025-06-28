# Tailwind CSS v4 Setup for Flexperts Platform

## Current Status ✅

We're using Tailwind CSS v4 (stable release) with the following configuration:

### PostCSS Config
```js
// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

### CSS Import
```css
/* src/styles/globals.css */
@import "tailwindcss";
```

### Key Features We're Using

1. **Built-in Container Queries** (no plugin needed!)
   ```jsx
   <div className="@container">
     <div className="@sm:grid-cols-2 @lg:grid-cols-4">
       {/* Responds to container size, not viewport */}
     </div>
   </div>
   ```

2. **CSS Variables for Theming**
   - All theme colors defined as CSS variables
   - Light/dark mode support
   - Can be accessed in components

3. **Dynamic Values**
   - Any spacing/grid value works without configuration
   - Example: `grid-cols-17`, `mt-23`, etc.

## Known Issues & Solutions

### tailwind-merge Compatibility
Currently using v3.3.1 which works for most cases. If you encounter merge issues:
- The `cn()` utility still works for basic class merging
- For v4-specific features, you might need to use `clsx` directly

### ESLint Configuration
Make sure `eslint-config-next` is installed for Next.js projects.

## Benefits of v4
- **3.78x faster** full builds
- **8.8x faster** incremental builds
- Built-in container queries
- Modern CSS features (oklch colors, 3D transforms)
- No configuration needed for most features

## Migration Notes
If you're coming from v3:
- Replace `@tailwind` directives with `@import "tailwindcss"`
- Remove `@tailwindcss/container-queries` plugin (built-in now)
- Update PostCSS to use `@tailwindcss/postcss`