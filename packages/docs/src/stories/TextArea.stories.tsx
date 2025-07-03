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
    hasError: false,
    isAutocomplete: false,
    maxLength: 500,
    showCounter: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    hasError: {
      control: {
        type: 'boolean',
      },
      description: 'Mostra o estado de erro com borda vermelha',
    },
    isAutocomplete: {
      control: {
        type: 'boolean',
      },
      description: 'Aplica estilo de autocomplete com fundo azul claro',
    },
    maxLength: {
      control: {
        type: 'number',
        min: 1,
        max: 1000,
      },
      description: 'Número máximo de caracteres permitidos',
    },
    showCounter: {
      control: {
        type: 'boolean',
      },
      description: 'Mostra contador de caracteres (requer maxLength)',
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
  }
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const WithError: StoryObj<TextAreaProps> = {
  args: {
    hasError: true,
    placeholder: "Este campo contém erro",
  }
}

export const WithAutocomplete: StoryObj<TextAreaProps> = {
  args: {
    isAutocomplete: true,
    placeholder: "Campo preenchido automaticamente",
    defaultValue: "Texto preenchido pelo navegador",
  }
}

export const WithCounter: StoryObj<TextAreaProps> = {
  args: {
    maxLength: 150,
    showCounter: true,
    placeholder: "Digite até 150 caracteres...",
  }
}

export const WithErrorAndCounter: StoryObj<TextAreaProps> = {
  args: {
    hasError: true,
    maxLength: 100,
    showCounter: true,
    placeholder: "Campo obrigatório (máximo 100 caracteres)",
    defaultValue: "Mensagem muito longa que excede o limite permitido e por isso está com erro",
  }
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    placeholder: "Campo desabilitado",
    defaultValue: "Este campo está desabilitado",
  }
}