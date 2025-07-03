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
        color: '$blue',
        backgroundColor: '$lightBlue',
      },
      inAnalysis: {
        color: '$blue',
        backgroundColor: '$lightBlue',
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
        color: '$yellow',
        backgroundColor: '$lightYellow',
      },
      finished: {
        color: '$green',
        backgroundColor: '$lightGreen2',
      },
    },
  },

  defaultVariants: {
    variant: 'toAnalysis',
  },
})

export type StatusBadgeProps = ComponentProps<typeof StatusBadge>

StatusBadge.displayName = 'StatusBadge'
