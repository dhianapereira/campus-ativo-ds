import type { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@campusativo-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          {Story()}
          <Text size="sm">Aceitar termos de uso</Text>
        </Box>
      )
    }
  ],
  args: {},
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
