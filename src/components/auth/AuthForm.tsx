'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/providers/AuthProvider'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Stack,
  Text,
} from '@/components/ui'
import { Mail, Lock, User, Github, Loader2 } from 'lucide-react'
import Link from 'next/link'

interface AuthFormProps {
  mode: 'login' | 'signup'
}

export function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  
  const { signIn, signUp, signInWithGoogle, signInWithGitHub } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setMessage(null)

    try {
      if (mode === 'signup') {
        await signUp(email, password, { full_name: name })
        setMessage('Check your email to confirm your account!')
      } else {
        await signIn(email, password)
        // Navigation handled in AuthProvider
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleOAuthSignIn = async (provider: 'google' | 'github') => {
    setLoading(true)
    setError(null)

    try {
      if (provider === 'google') {
        await signInWithGoogle()
      } else {
        await signInWithGitHub()
      }
    } catch (err: any) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">
          {mode === 'login' ? 'Welcome back' : 'Create an account'}
        </CardTitle>
        <CardDescription className="text-center">
          {mode === 'login'
            ? 'Enter your email to sign in to your account'
            : 'Enter your email to create your account'}
        </CardDescription>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {error && (
            <div className="p-3 rounded-md bg-error/10 border border-error/20">
              <Text size="sm" color="error">{error}</Text>
            </div>
          )}
          
          {message && (
            <div className="p-3 rounded-md bg-success/10 border border-success/20">
              <Text size="sm" color="success">{message}</Text>
            </div>
          )}

          <Stack gap="sm">
            {mode === 'signup' && (
              <Input
                label="Name"
                type="text"
                placeholder="John Doe"
                icon={<User className="h-4 w-4" />}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={loading}
              />
            )}
            
            <Input
              label="Email"
              type="email"
              placeholder="hello@example.com"
              icon={<Mail className="h-4 w-4" />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              icon={<Lock className="h-4 w-4" />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              hint={mode === 'signup' ? 'Must be at least 8 characters' : undefined}
            />
          </Stack>

          <Button
            type="submit"
            fullWidth
            loading={loading}
            disabled={loading || !!message}
          >
            {mode === 'login' ? 'Sign In' : 'Sign Up'}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-background px-2 text-text-muted">
                OR CONTINUE WITH
              </span>
            </div>
          </div>

          <Stack gap="sm">
            <Button
              type="button"
              variant="outline"
              fullWidth
              onClick={() => handleOAuthSignIn('google')}
              disabled={loading || !!message}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            
            <Button
              type="button"
              variant="outline"
              fullWidth
              onClick={() => handleOAuthSignIn('github')}
              disabled={loading || !!message}
              icon={<Github className="h-4 w-4" />}
            >
              GitHub
            </Button>
          </Stack>
        </CardContent>
      </form>
      
      <CardFooter>
        <Text size="sm" className="text-center w-full">
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <Link href="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </>
          )}
        </Text>
      </CardFooter>
    </Card>
  )
}