import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$white',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '1px solid $lightGray',
  display: 'flex',
  alignItems: 'center',
  height: 50,

  '&:has(input:focus)': {
    border: '2px solid $green',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Suffix = styled('span', {
  color: '$green',
  width: 24,
  height: 24,
  fontSize: '24px',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray',
  },
})
