# CLAUDE.md - Flexperts Platform

This file is automatically read by Claude Code at the start of each conversation. [Official Anthropic feature]

## 🎯 Project Overview

**Project**: Flexperts Platform  
**Description**: A revolutionary no-code platform that empowers anyone to build applications through natural conversation and visual design - no technical knowledge required.  
**Status**: Development - MVP Phase  
**Vision**: "Disrupting the traditional software industry by removing barriers and creating a human-driven ecosystem for building ideas and businesses"

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, React 18
- **Styling**: Tailwind CSS + Custom Design System
- **Backend**: Supabase (Auth, Database, Storage, Realtime)
- **AI**: Anthropic Claude API
- **State**: React Context + Hooks
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Key Directories

```
src/
├── app/                # Next.js App Router pages
│   ├── (auth)/        # Authentication pages
│   ├── (dashboard)/   # Main app pages
│   ├── api/           # API routes
│   └── tools/         # Tool pages (design, features, etc.)
├── components/        
│   ├── ui/           # Base UI components (buttons, cards, etc.)
│   ├── tools/        # Tool-specific components
│   ├── layout/       # Layout components (nav, sidebar)
│   └── auth/         # Authentication components
├── lib/              
│   ├── supabase/     # Supabase client setup
│   ├── anthropic/    # AI integration
│   └── utils/        # Helper functions
├── hooks/            # Custom React hooks
├── types/            # TypeScript definitions
└── styles/           
    └── themes/       # Theme configurations

docs/
├── context/          # ⚠️ CHECK THESE for current work
├── design-system/    # Design documentation
├── requirements/     # Feature specs
└── api/             # API documentation
```

## 🎨 Design System

- **Colors**: Green primary (#22C55E light, #16C181 dark), WhatsApp-style clean UI
- **Typography**: Quicksand font family (300-700 weights)
- **Spacing**: Base unit 4px (0.25rem)
- **Breakpoints**: Mobile-first (768px tablet, 1024px desktop)
- **Themes**: Light and dark mode support

## 🚀 Essential Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm run lint         # Check code quality
npm run type-check   # TypeScript checking

# Database
npm run db:generate  # Generate types from Supabase
npm run db:migrate   # Run migrations

# Testing
npm run test         # Run tests
npm run test:e2e     # Run E2E tests
```

## 🔧 Development Workflow

1. **Start of session**: Check `/docs/context/CURRENT_TASK.md`
2. **Before coding**: Review design system and existing patterns
3. **Mobile-first**: Always start with mobile design
4. **AI Integration**: Use streaming responses for chat
5. **After changes**: Run type-check and lint
6. **Committing**: Only commit when explicitly asked

## 📝 Project-Specific Notes

### Core Features (MVP)
1. **AI Chat Interface**: WhatsApp-style, iterative conversations
2. **Visual Wireframe Builder**: Point-and-click, real-time preview
3. **Export System**: Clean build plans for any AI builder
4. **Project Management**: Save, share, collaborate

### Key User Flows
1. **Onboarding**: Land → Try without signup → See magic → Sign up
2. **Building**: Chat → See wireframes → Refine → Export
3. **Collaboration**: Invite flexpert → Work together → Deploy

### Design Principles
- **Simple**: Like WhatsApp - anyone can use it
- **Visual**: See your app come to life instantly
- **Human**: No technical jargon, just conversation
- **Empowering**: Users feel in control, not fighting the system

### API Patterns
- All AI calls use streaming for real-time feedback
- Wireframes auto-save every 30 seconds
- Export generates comprehensive markdown plans
- Collaboration uses Supabase realtime

## 🔗 Important Links

- Repository: [Current]
- Staging: [TBD]
- Production: [TBD]
- Supabase Dashboard: [TBD]
- Design System: `/docs/design-system/`

## ⚠️ Current Focus

Building the MVP: AI chat + wireframe generation + export system. Everything else can wait.

---

*This file uses the official CLAUDE.md feature. Claude Code automatically reads this file when starting a conversation in this directory.*