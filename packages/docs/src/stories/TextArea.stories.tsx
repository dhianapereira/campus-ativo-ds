import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@campusativo-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size="sm">Observações</Text>
          {Story()}
        </Box>
      )
    }
  ],
  args: {
    disabled: false,
    placeholder: "Digite suas observações",
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  }
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}
