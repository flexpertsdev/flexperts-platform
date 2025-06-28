# Flexperts Platform Setup Guide

## Current Status

✅ **Completed:**
- Next.js project initialized with TypeScript
- Design system implemented with CSS variables
- Base UI components created (Button, Card, Input, etc.)
- Authentication pages and flows created
- ESLint configured
- Vercel build errors fixed

🚧 **Needs Configuration:**
- Supabase credentials (for authentication to work)
- Anthropic API key (for AI chat features)

## Quick Setup

1. **Clone and Install:**
   ```bash
   git clone https://github.com/flexpertsdev/flexperts-platform.git
   cd flexperts-platform
   npm install
   ```

2. **Environment Variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` with your credentials:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon/public key
   - `ANTHROPIC_API_KEY`: Your Anthropic API key

3. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

## Setting Up Supabase

See [docs/SUPABASE_SETUP.md](docs/SUPABASE_SETUP.md) for detailed instructions on:
- Creating a Supabase project
- Getting your API keys
- Configuring OAuth providers
- Testing authentication

## What's Working

- 🎨 **Design System**: Light/dark themes, responsive components
- 🔐 **Auth UI**: Login/signup pages ready (needs Supabase credentials)
- 📱 **Mobile-First**: Responsive design with WhatsApp-style simplicity
- 🚀 **Vercel Ready**: Deploys successfully to Vercel

## Next Steps

Once you have Supabase configured:
1. Test authentication flow
2. Build the AI chat interface
3. Create the wireframe builder
4. Implement export functionality

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Check code quality
npm run type-check # TypeScript checking
```

## Need Help?

- Check the [CLAUDE.md](CLAUDE.md) for project context
- Review [docs/](docs/) for detailed documentation
- Current task tracking in [docs/context/CURRENT_TASK.md](docs/context/CURRENT_TASK.md)