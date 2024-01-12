import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@campusativo-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Magni, repudiandae corrupti incidunt quis officiis nesciunt, error quia velit natus possimus quisquam.Vel sed aspernatur vero ab eveniet consectetur enim laudantium."
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Lorem ipsum dolor sit amet consectetur",
    as: 'strong'
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o Text sempre será um `p`, mas podemos alterar isso com a propriedade `as`.'
      }
    }

  }
}