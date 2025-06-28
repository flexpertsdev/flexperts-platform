'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const headingVariants = cva(
  'font-semibold tracking-tight',
  {
    variants: {
      size: {
        h1: 'text-4xl md:text-5xl lg:text-6xl',
        h2: 'text-3xl md:text-4xl lg:text-5xl',
        h3: 'text-2xl md:text-3xl lg:text-4xl',
        h4: 'text-xl md:text-2xl lg:text-3xl',
        h5: 'text-lg md:text-xl lg:text-2xl',
        h6: 'text-base md:text-lg lg:text-xl',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
      color: {
        default: 'text-text',
        secondary: 'text-text-secondary',
        muted: 'text-text-muted',
        primary: 'text-primary',
        error: 'text-error',
      },
    },
    defaultVariants: {
      size: 'h1',
      weight: 'semibold',
      color: 'default',
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, weight, color, as, ...props }, ref) => {
    const Component = as || size || 'h1'
    
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ size, weight, color }), className)}
        {...props}
      />
    )
  }
)
Heading.displayName = 'Heading'

const textVariants = cva(
  '',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
      color: {
        default: 'text-text',
        secondary: 'text-text-secondary',
        tertiary: 'text-text-tertiary',
        muted: 'text-text-muted',
        primary: 'text-primary',
        error: 'text-error',
        success: 'text-success',
        warning: 'text-warning',
        info: 'text-info',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
      },
      lineHeight: {
        none: 'leading-none',
        tight: 'leading-tight',
        snug: 'leading-snug',
        normal: 'leading-normal',
        relaxed: 'leading-relaxed',
        loose: 'leading-loose',
      },
    },
    defaultVariants: {
      size: 'base',
      weight: 'normal',
      color: 'default',
      lineHeight: 'normal',
    },
  }
)

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div' | 'label'
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, color, align, lineHeight, as = 'p', ...props }, ref) => {
    const Component = as
    
    return (
      <Component
        ref={ref}
        className={cn(
          textVariants({ size, weight, color, align, lineHeight }),
          className
        )}
        {...props}
      />
    )
  }
)
Text.displayName = 'Text'

export interface CodeProps
  extends React.HTMLAttributes<HTMLElement> {
  block?: boolean
}

const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, block = false, ...props }, ref) => {
    if (block) {
      return (
        <pre
          ref={ref}
          className={cn(
            'relative rounded-lg bg-surface-3 p-4 text-sm overflow-x-auto',
            className
          )}
        >
          <code {...props} />
        </pre>
      )
    }

    return (
      <code
        ref={ref}
        className={cn(
          'relative rounded bg-surface-3 py-0.5 px-1.5 text-sm font-mono',
          className
        )}
        {...props}
      />
    )
  }
)
Code.displayName = 'Code'

export { Heading, Text, Code, headingVariants, textVariants }