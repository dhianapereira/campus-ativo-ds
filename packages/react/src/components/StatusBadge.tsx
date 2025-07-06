import { ComponentProps } from 'react'
import { styled } from '../styles'

export const StatusBadge = styled('div', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  borderRadius: '$xs',
  display: 'inline-flex',
  padding: '$1 $3',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',

  variants: {
    variant: {
      toAnalysis: {
        color: '$darkBlue',
        backgroundColor: '$lightBlueBg',
      },
      inAnalysis: {
        color: '$blue',
        backgroundColor: '$lightBlueBg',
      },
      accepted: {
        color: '$orange',
        backgroundColor: '$lightOrange',
      },
      rejected: {
        color: '$red',
        backgroundColor: '$lightRed',
      },
      inProgress: {
        color: '$orange',
        backgroundColor: '$lightYellow',
      },
      finished: {
        color: '$green',
        backgroundColor: '$lightGreenBg',
      },
    },
  },

  defaultVariants: {
    variant: 'toAnalysis',
  },
})

export type StatusBadgeProps = ComponentProps<typeof StatusBadge>
StatusBadge.displayName = 'StatusBadge'
