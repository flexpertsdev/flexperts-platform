'use client'

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Container,
  Badge,
  Textarea,
  Spinner,
  Grid,
  GridItem,
  Stack,
  Heading,
  Text,
  Code,
  ThemeToggle,
} from '@/components/ui'
import { ChevronRight, Mail, Search, Settings, User } from 'lucide-react'

export default function UIDemo() {
  return (
    <Container className="py-8 space-y-12">
      <div className="flex justify-between items-start">
        <div>
          <Heading size="h1" className="mb-2">Flexperts UI Components</Heading>
          <Text size="lg" color="secondary">
            Mobile-first, accessible, and beautiful components for the Flexperts platform.
          </Text>
        </div>
        <ThemeToggle />
      </div>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Buttons</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link Button</Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button loading>Loading...</Button>
            <Button disabled>Disabled</Button>
            <Button icon={<Mail className="h-4 w-4" />}>With Icon</Button>
            <Button icon={<ChevronRight className="h-4 w-4" />} iconPosition="right">
              Icon Right
            </Button>
            <Button size="icon" aria-label="Settings">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="max-w-sm">
            <Button fullWidth>Full Width Button</Button>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Cards</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>This is a basic card with standard styling</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-text-secondary">
                Cards are versatile containers that group related content and actions.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>With shadow for emphasis</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-text-secondary">
                Perfect for important content that needs to stand out.
              </p>
            </CardContent>
          </Card>

          <Card variant="gradient">
            <CardHeader>
              <CardTitle>Gradient Card</CardTitle>
              <CardDescription>Eye-catching gradient background</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-text-secondary">
                Great for CTAs and special features.
              </p>
            </CardContent>
          </Card>

          <Card interactive className="cursor-pointer">
            <CardHeader>
              <CardTitle>Interactive Card</CardTitle>
              <CardDescription>Click me!</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-text-secondary">
                This card responds to hover and click.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Inputs */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Form Inputs</h2>
        <div className="max-w-md space-y-4">
          <Input 
            label="Email Address"
            type="email"
            placeholder="hello@example.com"
            icon={<Mail className="h-4 w-4" />}
            required
          />
          
          <Input 
            label="Password"
            type="password"
            placeholder="Enter your password"
            hint="Must be at least 8 characters"
          />
          
          <Input 
            label="Search"
            placeholder="Search for anything..."
            icon={<Search className="h-4 w-4" />}
          />
          
          <Input 
            label="With Error"
            placeholder="This has an error"
            error="This field is required"
          />
          
          <Input 
            label="Disabled Input"
            placeholder="Cannot edit this"
            disabled
          />
          
          <Textarea
            label="Message"
            placeholder="Type your message here..."
            hint="Maximum 500 characters"
            rows={4}
          />
          
          <Textarea
            label="Description with Error"
            placeholder="Describe your project..."
            error="Please provide more details"
            required
          />
        </div>
      </section>

      {/* Badges */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Badges</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
          </div>
          
          <div className="flex flex-wrap gap-2 items-center">
            <Badge size="sm">Small</Badge>
            <Badge>Default</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </div>
      </section>

      {/* Spinners */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Loading States</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-6">
            <Spinner size="sm" />
            <Spinner />
            <Spinner size="lg" />
            <Spinner size="xl" />
          </div>
          
          <div className="flex items-center gap-6">
            <Spinner color="default" />
            <Spinner color="muted" />
            <div className="bg-primary p-4 rounded">
              <Spinner color="white" />
            </div>
          </div>
          
          <Spinner label="Loading content..." />
        </div>
      </section>

      {/* Typography */}
      <section>
        <Heading size="h2" className="mb-6">Typography</Heading>
        <Stack gap="lg">
          <div>
            <Heading size="h1">Heading 1</Heading>
            <Heading size="h2">Heading 2</Heading>
            <Heading size="h3">Heading 3</Heading>
            <Heading size="h4">Heading 4</Heading>
            <Heading size="h5">Heading 5</Heading>
            <Heading size="h6">Heading 6</Heading>
          </div>
          
          <div className="space-y-2">
            <Text size="2xl">Extra large text for emphasis</Text>
            <Text size="xl">Extra large text size</Text>
            <Text size="lg">Large text size</Text>
            <Text>Default text size</Text>
            <Text size="sm">Small text size</Text>
            <Text size="xs">Extra small text size</Text>
          </div>
          
          <div className="space-y-2">
            <Text weight="bold">Bold text weight</Text>
            <Text weight="semibold">Semibold text weight</Text>
            <Text weight="medium">Medium text weight</Text>
            <Text weight="normal">Normal text weight</Text>
            <Text weight="light">Light text weight</Text>
          </div>
          
          <div className="space-y-2">
            <Text color="default">Default text color</Text>
            <Text color="secondary">Secondary text color</Text>
            <Text color="tertiary">Tertiary text color</Text>
            <Text color="muted">Muted text color</Text>
            <Text color="primary">Primary text color</Text>
            <Text color="error">Error text color</Text>
            <Text color="success">Success text color</Text>
            <Text color="warning">Warning text color</Text>
            <Text color="info">Info text color</Text>
          </div>
          
          <div className="space-y-2">
            <Code>const inline = 'code'</Code>
            <Code block>{`function example() {
  return 'This is a code block'
}`}</Code>
          </div>
        </Stack>
      </section>

      {/* Grid System */}
      <section>
        <Heading size="h2" className="mb-6">Grid System</Heading>
        <Stack gap="md">
          <Grid cols={3} gap="md">
            <Card padding="sm">
              <Text align="center">1/3</Text>
            </Card>
            <Card padding="sm">
              <Text align="center">1/3</Text>
            </Card>
            <Card padding="sm">
              <Text align="center">1/3</Text>
            </Card>
          </Grid>
          
          <Grid cols={4} gap="md">
            <GridItem span={2}>
              <Card padding="sm">
                <Text align="center">Span 2</Text>
              </Card>
            </GridItem>
            <Card padding="sm">
              <Text align="center">1</Text>
            </Card>
            <Card padding="sm">
              <Text align="center">1</Text>
            </Card>
          </Grid>
          
          <Grid cols={12} gap="md">
            <GridItem span={8}>
              <Card padding="sm">
                <Text align="center">8 columns</Text>
              </Card>
            </GridItem>
            <GridItem span={4}>
              <Card padding="sm">
                <Text align="center">4 columns</Text>
              </Card>
            </GridItem>
          </Grid>
        </Stack>
      </section>

      {/* Stack Layout */}
      <section>
        <Heading size="h2" className="mb-6">Stack Layout</Heading>
        <Grid cols={2} gap="md">
          <div>
            <Text weight="semibold" className="mb-4">Vertical Stack</Text>
            <Stack gap="sm">
              <Card padding="sm"><Text align="center">Item 1</Text></Card>
              <Card padding="sm"><Text align="center">Item 2</Text></Card>
              <Card padding="sm"><Text align="center">Item 3</Text></Card>
            </Stack>
          </div>
          
          <div>
            <Text weight="semibold" className="mb-4">Horizontal Stack</Text>
            <Stack direction="horizontal" gap="sm" wrap>
              <Card padding="sm"><Text>Item 1</Text></Card>
              <Card padding="sm"><Text>Item 2</Text></Card>
              <Card padding="sm"><Text>Item 3</Text></Card>
            </Stack>
          </div>
        </Grid>
      </section>

      {/* WhatsApp Style Chat Demo */}
      <section>
        <Heading size="h2" className="mb-6">Chat Interface Demo</Heading>
        <Card className="max-w-md mx-auto">
          <CardContent className="p-0">
            <div className="bg-primary text-white p-4 rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Flexperts AI</h3>
                  <p className="text-xs opacity-90">Online</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 space-y-4 bg-canvas min-h-[300px]">
              <div className="chat-bubble chat-bubble-received">
                <p className="text-sm">Hi! I'm here to help you build your app. What would you like to create today?</p>
                <p className="text-xs text-text-muted mt-1">10:30 AM</p>
              </div>
              
              <div className="chat-bubble chat-bubble-sent">
                <p className="text-sm">I want to build a recipe sharing app</p>
                <p className="text-xs opacity-70 mt-1">10:32 AM</p>
              </div>
              
              <div className="chat-bubble chat-bubble-received">
                <p className="text-sm">Great choice! Let's start with the basics. What features would you like in your recipe app?</p>
                <p className="text-xs text-text-muted mt-1">10:32 AM</p>
              </div>
            </div>
            
            <div className="p-4 border-t border">
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  className="flex-1"
                />
                <Button size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </Container>
  )
}