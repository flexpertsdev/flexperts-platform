# CLAUDE_RULES.md - Behavioral Instructions for Flexperts Platform

**IMPORTANT**: These are automation rules for Claude. Please read and follow these instructions in every interaction.

## 🎯 Project Context

You are helping build Flexperts - a platform that democratizes software development by allowing anyone to build apps through conversation. The goal is to remove ALL technical barriers.

## 📋 Behavioral Rules

### 1. User Experience First
- **NEVER** show code unless explicitly asked
- **ALWAYS** explain in human terms, not technical jargon
- **FOCUS** on what the user can see and do, not how it works
- **REMEMBER** our users are non-technical - they shouldn't need to know what npm, console.log, or git are

### 2. Mobile-First Development
- **START** every component with mobile design
- **TEST** on 375px viewport first
- **ENSURE** touch targets are minimum 44x44px
- **USE** bottom navigation for mobile, sidebar for desktop

### 3. Design System Compliance
- **USE** only colors from our palette (see CLAUDE.md)
- **APPLY** Quicksand font consistently
- **FOLLOW** spacing scale (4px base unit)
- **IMPLEMENT** both light and dark themes

### 4. WhatsApp-Style Simplicity
- **KEEP** interfaces clean and minimal
- **USE** familiar patterns (chat bubbles, floating buttons)
- **AVOID** complex forms - use conversational flows
- **SHOW** progress visually, not with technical terms

### 5. AI Integration Patterns
- **STREAM** responses for immediate feedback
- **SHOW** typing indicators during processing
- **HANDLE** errors gracefully with human-friendly messages
- **SAVE** conversations automatically

### 6. Component Patterns
```typescript
// ALWAYS use this structure for new components
import { cn } from '@/lib/utils'

interface ComponentProps {
  className?: string
  // other props
}

export function Component({ className, ...props }: ComponentProps) {
  return (
    <div className={cn('base-styles', className)} {...props}>
      {/* content */}
    </div>
  )
}
```

### 7. State Management
- **USE** React Context for global state
- **KEEP** component state local when possible
- **SYNC** with Supabase for persistence
- **IMPLEMENT** optimistic updates

### 8. File Organization
- **CREATE** feature folders, not file-type folders
- **COLOCATE** related files together
- **USE** index.ts for clean imports
- **KEEP** components under 200 lines

### 9. Testing & Quality
- **RUN** type-check before marking tasks complete
- **TEST** on mobile viewport first
- **CHECK** dark mode compatibility
- **ENSURE** keyboard navigation works

### 10. Git Commits
- **ONLY** commit when explicitly asked
- **USE** conventional commits format
- **INCLUDE** "🤖 Generated with Claude Code" in message
- **ADD** Co-authored-by: Claude <noreply@anthropic.com>

## 🚨 Critical Reminders

### NEVER Do This:
- Show terminal commands to users
- Use technical error messages
- Assume users know coding concepts
- Create features that require technical knowledge
- Build desktop-first layouts

### ALWAYS Do This:
- Check `/docs/context/CURRENT_TASK.md` at session start
- Update progress in context files
- Test on mobile viewport
- Use streaming for AI responses
- Keep the UI WhatsApp-simple

## 📁 Context Files to Maintain

Update these files as you work:

1. **CURRENT_TASK.md** - What you're working on now
2. **PROGRESS.md** - Completed features/fixes
3. **DECISIONS.md** - Architecture choices made
4. **KNOWN_ISSUES.md** - Bugs or limitations found

## 🎨 UI/UX Principles

1. **Progressive Disclosure** - Don't overwhelm users
2. **Immediate Feedback** - Every action has a reaction
3. **Forgiving Design** - Easy to undo/redo
4. **Contextual Help** - Tooltips and hints where needed
5. **Celebration Moments** - Make success feel good

## 💡 Feature Implementation

When building features:

1. **Start with the user story**, not the technical spec
2. **Build the mobile version first**
3. **Add desktop enhancements second**
4. **Test with non-technical mindset**
5. **Document in human terms**

## 🔄 Session Continuity

At the end of each session:
1. Update CURRENT_TASK.md with stopping point
2. List any blockers in KNOWN_ISSUES.md
3. Document decisions in DECISIONS.md
4. Update PROGRESS.md with completed work

---

**Remember**: We're building for people who have brilliant ideas but zero technical knowledge. Every line of code should serve that mission.