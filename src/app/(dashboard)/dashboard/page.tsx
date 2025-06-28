'use client'

import { useAuth } from '@/providers/AuthProvider'
import { Container, Heading, Text, Button, Card, CardHeader, CardTitle, CardDescription, Grid, Stack } from '@/components/ui'
import { LogOut, MessageSquare, Layout, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const { user, signOut } = useAuth()
  const router = useRouter()

  return (
    <Container className="py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Heading size="h2">Welcome back, {user?.email?.split('@')[0]}!</Heading>
          <Text color="secondary">Ready to build something amazing today?</Text>
        </div>
        <Button variant="outline" onClick={signOut} icon={<LogOut className="h-4 w-4" />}>
          Sign Out
        </Button>
      </div>

      <Grid cols={3} gap="md">
        <Card 
          interactive 
          className="cursor-pointer"
          onClick={() => router.push('/chat')}
        >
          <CardHeader>
            <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Start a Conversation</CardTitle>
            <CardDescription>
              Chat with AI to describe your app idea and watch it come to life
            </CardDescription>
          </CardHeader>
        </Card>

        <Card 
          interactive 
          className="cursor-pointer"
          onClick={() => router.push('/projects')}
        >
          <CardHeader>
            <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
              <Layout className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>My Projects</CardTitle>
            <CardDescription>
              View and manage all your app projects in one place
            </CardDescription>
          </CardHeader>
        </Card>

        <Card 
          interactive 
          className="cursor-pointer"
          onClick={() => router.push('/tools')}
        >
          <CardHeader>
            <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Design Tools</CardTitle>
            <CardDescription>
              Access visual tools to design and build your app interfaces
            </CardDescription>
          </CardHeader>
        </Card>
      </Grid>

      <div className="mt-12">
        <Heading size="h4" className="mb-4">Recent Projects</Heading>
        <Card>
          <CardHeader>
            <Text color="muted" align="center" className="py-8">
              No projects yet. Start by having a conversation!
            </Text>
          </CardHeader>
        </Card>
      </div>
    </Container>
  )
}