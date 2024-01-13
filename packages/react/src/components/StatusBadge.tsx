import { ComponentProps } from 'react'
import { styled } from '../styles'

export const StatusBadge = styled('div', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  borderRadius: '8px',
  display: 'inline-flex',
  padding: '$1 $2',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '10px',

  variants: {
    variant: {
      toAnalysis: {
        color: '$greenishWhite',
        backgroundColor: '$darkBlue',
      },
      inAnalysis: {
        color: '$greenishWhite',
        backgroundColor: '$blue',
      },
      accepted: {
        color: '$gray',
        backgroundColor: '$orange',
      },
      rejected: {
        color: '$greenishWhite',
        backgroundColor: '$red',
      },
      inProgress: {
        color: '$gray',
        backgroundColor: '$yellow',
      },
      finished: {
        color: '$gray',
        backgroundColor: '$greenAccent',
      },
    },
  },

  defaultVariants: {
    variant: 'toAnalysis',
  },
})

export type StatusBadgeProps = ComponentProps<typeof StatusBadge>
