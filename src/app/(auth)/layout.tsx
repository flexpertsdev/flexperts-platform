import { Container } from '@/components/ui'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas">
      <Container size="sm" className="w-full">
        {children}
      </Container>
    </div>
  )
}