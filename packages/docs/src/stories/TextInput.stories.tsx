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
          <Text size="sm">Email</Text>
          {Story()}
        </Box>
      )
    }
  ],
  args: {
    disabled: false,
    placeholder: "Digite seu email",
    hasError: false,
    isAutocomplete: false,
    maxLength: 100,
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
        max: 200,
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
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const WithSuffix: StoryObj<TextInputProps> = {
  args: {
    suffix: <Eye />
  }
}

export const WithError: StoryObj<TextInputProps> = {
  args: {
    hasError: true,
    placeholder: "O e-mail deve ser @ifal.edu.br",
    defaultValue: "dhianaslv@outlook.com",
  }
}

export const WithAutocomplete: StoryObj<TextInputProps> = {
  args: {
    isAutocomplete: true,
    placeholder: "Email",
    defaultValue: "dhianaslv@outlook.com",
  }
}

export const WithCounter: StoryObj<TextInputProps> = {
  args: {
    maxLength: 50,
    showCounter: true,
    placeholder: "Digite até 50 caracteres...",
  }
}

export const WithErrorAndCounter: StoryObj<TextInputProps> = {
  args: {
    hasError: true,
    maxLength: 30,
    showCounter: true,
    placeholder: "Email muito longo",
    defaultValue: "dhianaslv@outlook.com.br.muito.longo",
  }
}

export const WithSuffixAndCounter: StoryObj<TextInputProps> = {
  args: {
    suffix: <Eye />,
    maxLength: 20,
    showCounter: true,
    placeholder: "Senha",
    type: "password",
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: "Campo desabilitado",
    defaultValue: "Este campo está desabilitado",
  }
}