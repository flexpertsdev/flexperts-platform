# Claude Boilerplate Integration Guide for Flexperts Platform

## 🎯 Strategic Recommendation

After analyzing the claude-boilerplate structure, here's how to effectively organize the flexperts-platform documentation:

## 📁 What to COPY and Customize

### 1. Context Files (CRITICAL - Copy These Now!)
These files enable Claude to maintain context between sessions:

```bash
# Copy these from boilerplate to your project:
claude-boilerplate/docs/context/ → flexperts-platform/docs/context/

✅ CURRENT_TASK.md     # Already exists - keep updating
✅ DECISIONS.md        # Already exists - keep updating  
✅ PROGRESS.md         # Already exists - keep updating
❌ KNOWN_ISSUES.md     # Copy this - tracks bugs and solutions
```

**Why**: Claude actively checks and updates these files. They're essential for continuity.

### 2. API Documentation Templates (When Needed)
```bash
# Copy when you start building APIs:
claude-boilerplate/docs/api/endpoints.md → flexperts-platform/docs/api/
claude-boilerplate/docs/api/data-models.md → flexperts-platform/docs/api/
```

## 📚 What to USE AS REFERENCE (Don't Copy)

### 1. Design System Documentation
The boilerplate has an extensive design system, but Flexperts already has its own identity:
- ✅ You have: Custom green theme, WhatsApp-style UI
- 📖 Reference: `/claude-boilerplate/docs/design-system/` for structure ideas
- 🎯 Action: Continue building your own in `/flexperts-platform/docs/design-system/`

### 2. Tools and Generators
Keep these in the boilerplate and reference when needed:
- Wizards: `/tools/scenarios/` - Use for complex feature planning
- Generators: `/tools/generators/` - Reference for creating similar tools
- Validators: `/tools/validators/` - Run against your code periodically

### 3. Mockup Templates
- Reference: `/claude-boilerplate/mockups/template.html`
- Your mockups: Keep in `/flexperts-platform/mockups/` with your own style

## 🏗️ Recommended Flexperts Docs Structure

```
flexperts-platform/docs/
├── context/                    # ✅ Claude's working memory
│   ├── CURRENT_TASK.md        # What we're building now
│   ├── DECISIONS.md           # Architecture choices
│   ├── PROGRESS.md            # Completed work log
│   └── KNOWN_ISSUES.md        # 🆕 ADD THIS - Bug tracking
│
├── api/                       # 📝 When you build APIs
│   ├── chat-api.md           # AI chat endpoints
│   ├── wireframe-api.md      # Wireframe builder API
│   └── data-models.md        # Database schemas
│
├── design-system/            # 🎨 Your custom design
│   ├── README.md            # Overview
│   ├── colors.md            # Green theme palette
│   ├── components.md        # UI component docs
│   └── mobile-first.md      # WhatsApp-style patterns
│
├── features/                 # 🆕 Feature specifications
│   ├── ai-chat.md           # Chat interface specs
│   ├── wireframe-builder.md # Visual builder specs
│   └── export-system.md     # Export functionality
│
├── guides/                   # 📖 How-to guides
│   ├── SUPABASE_SETUP.md    # ✅ Already created
│   ├── TAILWIND_V4_SETUP.md # ✅ Already created
│   ├── deployment.md        # 🆕 Vercel deployment
│   └── testing.md           # 🆕 Testing strategies
│
├── requirements/             # 📋 Project requirements
│   ├── FEATURES.md          # ✅ Already exists
│   ├── USER_JOURNEYS.md     # ✅ Already exists
│   └── mvp-scope.md         # 🆕 MVP boundaries
│
└── architecture/            # 🆕 Technical architecture
    ├── overview.md          # System design
    ├── database.md          # Supabase schema
    └── integrations.md      # Third-party services
```

## 🔄 How to Use the Boilerplate Going Forward

### 1. Daily Workflow
```bash
# Start of each session
- Check: flexperts-platform/docs/context/CURRENT_TASK.md
- Reference: claude-boilerplate/FILE_INDEX.md for tools

# During development
- Update: Context files as you work
- Use: Boilerplate wizards for complex features
- Reference: Boilerplate patterns for best practices
```

### 2. When to Reference Boilerplate

| Task | Boilerplate Resource | How to Use |
|------|---------------------|------------|
| Planning a feature | `/tools/scenarios/` wizards | Run wizard, copy output |
| Creating mockups | `/mockups/template.html` | Reference structure |
| Setting up auth | `/tools/generators/auth-system-generator.md` | Adapt to Supabase |
| Performance issues | `/tools/optimizers/` | Run diagnostics |
| Deployment | `/tools/scripts/deployment/` | Reference patterns |

### 3. Integration with CLAUDE.md
Your CLAUDE.md should reference the boilerplate:
```markdown
## 📚 Reference Resources
- Boilerplate location: `../claude-boilerplate/`
- Check FILE_INDEX.md for tools and templates
- Use wizards in `/tools/scenarios/` for complex planning
```

## 🚀 Immediate Actions

1. **Copy KNOWN_ISSUES.md**:
   ```bash
   cp ../claude-boilerplate/docs/context/KNOWN_ISSUES.md docs/context/
   ```

2. **Create architecture docs**:
   ```bash
   mkdir docs/architecture
   mkdir docs/features
   ```

3. **Update CLAUDE_RULES.md** to reference boilerplate location

4. **Add to .gitignore** (keep boilerplate separate):
   ```
   # Don't commit boilerplate reference
   /claude-boilerplate/
   ```

## 💡 Best Practices

1. **Don't duplicate** - Reference boilerplate instead of copying everything
2. **Customize for Flexperts** - Your docs should reflect your specific needs
3. **Keep boilerplate clean** - Don't modify it, keep as pristine reference
4. **Link, don't copy** - For guides and patterns, link to boilerplate
5. **Document decisions** - Use DECISIONS.md for why you diverged from boilerplate

## 🎯 Summary

- **COPY**: Context files, API templates (when needed)
- **REFERENCE**: Everything else
- **BUILD**: Your own design system and feature docs
- **MAINTAIN**: Keep context files updated for Claude
- **USE**: Boilerplate tools and wizards as needed

This approach gives you the benefits of the boilerplate's structure while maintaining a clean, project-specific documentation that makes sense for Flexperts.