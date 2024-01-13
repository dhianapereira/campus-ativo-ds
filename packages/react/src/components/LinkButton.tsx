import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const LinkButton = styled('a', {
  borderRadius: '$sm',
  fontSize: '$sm',
  fontFamily: '$default',
  textAlign: 'center',
  padding: '0 $4',
  minWidth: 120,
  boxSizing: 'border-box',
  textDecoration: 'none',
  fontWeight: '$medium',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:hover': {
    textDecoration: 'underline',
  },

  variants: {
    variant: {
      green: {
        color: '$green',
      },
      white: {
        color: '$white',
      },
    },
  },

  defaultVariants: {
    variant: 'green',
  },
})

export interface LinkButtonProps extends ComponentProps<typeof LinkButton> {
  as?: ElementType
}
