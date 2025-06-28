'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'

const spinnerVariants = cva(
  'animate-spin',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        default: 'h-6 w-6',
        lg: 'h-8 w-8',
        xl: 'h-12 w-12',
      },
      color: {
        default: 'text-primary',
        muted: 'text-text-muted',
        white: 'text-white',
      },
    },
    defaultVariants: {
      size: 'default',
      color: 'default',
    },
  }
)

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, color, label, ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      aria-label={label || 'Loading'}
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <Loader2 className={spinnerVariants({ size, color })} />
      {label && (
        <span className="ml-2 text-sm text-text-secondary">{label}</span>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  )
)
Spinner.displayName = 'Spinner'

export { Spinner, spinnerVariants }