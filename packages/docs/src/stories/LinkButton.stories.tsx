import type { Meta, StoryObj } from '@storybook/react'
import { Plus } from 'phosphor-react';
import { LinkButton, LinkButtonProps } from '@campusativo-ui/react'

export default {
  title: 'Form/Link Button',
  component: LinkButton,
  decorators: [
    (Story) => {
      return (<div style={{ backgroundColor: '#383D3B', padding: '24px' }}>{Story()}</div>)
    }
  ],
  args: {
    children: "Esqueci a senha"
  },
} as Meta<LinkButtonProps>

export const Green: StoryObj<LinkButtonProps> = {}

export const White: StoryObj<LinkButtonProps> = {
  args: {
    variant: 'white',
  }
}

export const WithIcon: StoryObj<LinkButtonProps> = {
  args: {
    children: (
      <>
        <Plus weight='bold' />
        Add
      </>
    ),
  }
}