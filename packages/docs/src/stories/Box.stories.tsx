import type { Meta, StoryObj } from '@storybook/react'
import { Text, Box, BoxProps } from '@campusativo-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</Text>
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}