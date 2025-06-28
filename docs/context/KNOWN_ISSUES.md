# Known Issues & Bug Tracker - Flexperts Platform

Document all known bugs, issues, and their solutions. This helps prevent duplicate debugging and provides quick references for common problems.

## Active Issues 🔴

### Build & Deployment Issues

## Tailwind CSS v4 with tailwind-merge
- **Severity**: Low
- **Category**: Build/Dependencies
- **Discovered**: 2024-12-28
- **Status**: Open (Working)
- **Affected Version**: v0.1.0

### Description
tailwind-merge v3.3.1 may not fully support all Tailwind CSS v4 features. Currently functional but may have edge cases.

### Workaround
The `cn()` utility still works for basic class merging. For v4-specific features, use `clsx` directly if needed.

### Proposed Solution
Monitor tailwind-merge for v4 support updates or create custom merge utility.

### Related
- Files: `src/lib/utils.ts`
- Discussion: Tailwind v4 is stable but ecosystem catching up

---

## Fixed Issues ✅

### TypeScript Type Errors in Typography Component
- **Severity**: High
- **Category**: TypeScript/Build
- **Discovered**: 2024-12-28
- **Status**: Fixed
- **Affected Version**: v0.1.0

### Description
TypeScript error with ref types when using polymorphic components (as prop).

### Solution Applied
Added `ref as any` cast in Typography component. Proper solution would be a more complex type system.

### Related
- Files: `src/components/ui/Typography.tsx`
- Commit: Configure Tailwind CSS v4

---

## Common Issues & Solutions 🔧

### Development Environment

#### Issue: ESLint being too strict
**Solution**: 
Already configured less strict rules in `.eslintrc.json`:
- `no-explicit-any`: off
- `no-unused-vars`: warn only
- `no-unescaped-entities`: off

#### Issue: Supabase auth not working
**Solution**:
1. Ensure `.env.local` has valid credentials
2. Check Supabase project is active (not paused)
3. Verify redirect URLs in Supabase dashboard

### Build Issues

#### Issue: Vercel build fails with Tailwind v4
**Solution**:
Ensure PostCSS config uses `@tailwindcss/postcss`:
```js
// postcss.config.mjs
{
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### Runtime Issues

#### Issue: Auth redirect not working locally
**Solution**: 
- Ensure `NEXT_PUBLIC_APP_URL=http://localhost:3000` in `.env.local`
- Check `/app/auth/callback/route.ts` exists

---

## Performance Considerations 📊

### Identified Optimizations
- [ ] Implement container queries for better responsive design
  - Status: Available with Tailwind v4
  - Plan: Use `@container` classes

- [ ] Reduce initial bundle size
  - Current: TBD
  - Target: < 200KB
  - Plan: Dynamic imports for tools

---

## Browser-Specific Issues 🌐

### Mobile Safari
- [ ] Test touch targets (44px minimum)
- [ ] Verify safe area handling

### Chrome/Edge
- [ ] No known issues

---

## Deployment Notes 🚀

### Vercel
- Build command: `npm run build`
- Output directory: `.next`
- Environment variables set in Vercel dashboard

### Required Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
ANTHROPIC_API_KEY
NEXT_PUBLIC_APP_URL
```

---

## How to Use This Document

1. **When discovering a bug**: Add it immediately with all details
2. **When fixing a bug**: Move to Fixed section with solution
3. **During debugging**: Check here first to avoid duplicate work
4. **For deployment**: Review deployment notes section

Keep this document up-to-date. It's invaluable for maintaining development velocity.

---

*Last updated: 2024-12-28*