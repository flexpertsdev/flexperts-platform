import { AuthForm } from '@/components/auth/AuthForm'
import { Heading, Text } from '@/components/ui'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <Link href="/" className="inline-block">
          <Heading size="h3" className="text-primary">
            Flexperts
          </Heading>
        </Link>
        <Text color="secondary">
          Build apps without code, powered by AI
        </Text>
      </div>
      
      <AuthForm mode="login" />
    </div>
  )
}