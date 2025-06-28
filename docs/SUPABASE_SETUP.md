# Supabase Setup Instructions

## Prerequisites
You need a Supabase project to run the authentication system. The code is set up, but you need to provide the credentials.

## Steps to Set Up Supabase

1. **Create a Supabase Project**
   - Go to [https://supabase.com](https://supabase.com)
   - Sign up or log in
   - Click "New project"
   - Choose a project name (e.g., "flexperts-platform")
   - Generate a secure database password
   - Select a region close to your users

2. **Get Your API Keys**
   - Once your project is created, go to Settings > API
   - Copy the following:
     - Project URL (looks like: https://xxxxx.supabase.co)
     - Anon/Public Key (safe to use in browser)

3. **Set Up OAuth Providers (Optional)**
   - Go to Authentication > Providers
   - Enable Google OAuth:
     - Get credentials from Google Cloud Console
     - Add redirect URL: `http://localhost:3000/auth/callback`
   - Enable GitHub OAuth:
     - Get credentials from GitHub Developer Settings
     - Add redirect URL: `http://localhost:3000/auth/callback`

4. **Configure Environment Variables**
   - Copy `.env.local.example` to `.env.local`
   - Fill in your Supabase credentials:
     ```
     NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
     ```

5. **Database Setup**
   - The authentication tables are automatically created by Supabase
   - For additional tables (projects, wireframes, etc.), we'll create migrations later

## Testing Authentication

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/login`

3. Try creating an account:
   - Email/password signup
   - OAuth with Google/GitHub (if configured)

4. Check your Supabase dashboard:
   - Authentication > Users should show new users
   - Check email confirmations in Authentication > Email Templates

## Current Implementation Status

✅ **Completed:**
- Supabase client setup (`/lib/supabase/`)
- Authentication provider (`/providers/AuthProvider.tsx`)
- Auth pages (`/app/(auth)/login` and `/app/(auth)/signup`)
- Middleware for protected routes
- OAuth callback route (`/app/auth/callback`)

❌ **Needs Credentials:**
- `.env.local` file with Supabase URL and anon key
- OAuth provider configuration in Supabase dashboard

## Troubleshooting

If authentication isn't working:
1. Check browser console for errors
2. Verify environment variables are loaded (check Network tab)
3. Ensure Supabase project is active (not paused)
4. Check redirect URLs match your local development URL