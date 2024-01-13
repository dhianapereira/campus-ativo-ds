import type { Meta, StoryObj } from '@storybook/react'
import { Plus } from 'phosphor-react';
import { Button, ButtonProps } from '@campusativo-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    disabled: false,
    children: "Enviar",
    variant: 'primary',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio'
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  }
}

export const IconButton: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <Plus weight='bold' />
        Add
      </>
    ),
  }
}


export const IconOutlinedButton: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: (
      <>
        <Plus weight='bold' />
        Add
      </>
    ),
  }
}