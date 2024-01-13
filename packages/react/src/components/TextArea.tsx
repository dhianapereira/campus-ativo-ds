import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$white',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '1px solid $lightGray',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    border: '2px solid $green',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    cursor: '$gray',
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea>
