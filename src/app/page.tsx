'use client'

import { Container, Heading, Text, Button, Stack, Grid, Card, CardHeader, CardTitle, CardDescription } from '@/components/ui'
import { MessageSquare, Sparkles, Zap, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/providers/AuthProvider'

export default function Home() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent">
        <Container className="py-20">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Heading size="h1" className="text-5xl md:text-6xl lg:text-7xl">
              Build Apps Without Code
            </Heading>
            <Text size="xl" color="secondary" className="max-w-2xl mx-auto">
              Describe your idea in plain language and watch it transform into a real application. 
              No technical knowledge required.
            </Text>
            <Stack direction="horizontal" gap="md" justify="center" className="pt-4">
              {user ? (
                <Link href="/dashboard">
                  <Button size="lg" icon={<ArrowRight className="h-5 w-5" />} iconPosition="right">
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/signup">
                    <Button size="lg">Start Building Free</Button>
                  </Link>
                  <Link href="/login">
                    <Button size="lg" variant="outline">Sign In</Button>
                  </Link>
                </>
              )}
            </Stack>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <Container>
          <div className="text-center space-y-4 mb-12">
            <Heading size="h2">Everything You Need to Build</Heading>
            <Text size="lg" color="secondary">
              From idea to deployment in minutes, not months
            </Text>
          </div>

          <Grid cols={3} gap="lg">
            <Card>
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Natural Conversation</CardTitle>
                <CardDescription>
                  Simply describe what you want to build. Our AI understands your vision and guides you through the process.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Visual Design Tools</CardTitle>
                <CardDescription>
                  See your app come to life with intuitive drag-and-drop tools. No design experience needed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Instant Export</CardTitle>
                <CardDescription>
                  Get production-ready code that any developer can work with. Deploy anywhere you want.
                </CardDescription>
              </CardHeader>
            </Card>
          </Grid>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-surface">
        <Container>
          <div className="text-center space-y-4 mb-12">
            <Heading size="h2">How It Works</Heading>
            <Text size="lg" color="secondary">
              Three simple steps to bring your idea to life
            </Text>
          </div>

          <div className="max-w-4xl mx-auto">
            <Stack gap="lg">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="space-y-2">
                  <Heading size="h4">Describe Your Idea</Heading>
                  <Text color="secondary">
                    Tell us what you want to build in your own words. No technical jargon required.
                  </Text>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="space-y-2">
                  <Heading size="h4">Design Visually</Heading>
                  <Text color="secondary">
                    Use our intuitive tools to design your app's interface and user experience.
                  </Text>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="space-y-2">
                  <Heading size="h4">Export & Deploy</Heading>
                  <Text color="secondary">
                    Get clean, professional code ready for deployment on any platform.
                  </Text>
                </div>
              </div>
            </Stack>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader className="text-center py-12">
              <Heading size="h3" className="mb-4">
                Ready to Build Your First App?
              </Heading>
              <Text size="lg" color="secondary" className="mb-8">
                Join thousands of entrepreneurs bringing their ideas to life
              </Text>
              {user ? (
                <Link href="/dashboard">
                  <Button size="xl" icon={<ArrowRight className="h-5 w-5" />} iconPosition="right">
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <Link href="/signup">
                  <Button size="xl">
                    Start Building For Free
                  </Button>
                </Link>
              )}
            </CardHeader>
          </Card>
        </Container>
      </section>
    </div>
  );
}