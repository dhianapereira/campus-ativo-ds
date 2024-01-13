import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@campusativo-ui/react'
import { Eye } from 'phosphor-react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size="sm">Senha</Text>
          {Story()}
        </Box>
      )
    }
  ],
  args: {
    disabled: false,
    placeholder: "Digite sua senha",
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  }
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const WithSuffix: StoryObj<TextInputProps> = {
  args: {
    suffix: <Eye />
  }
}