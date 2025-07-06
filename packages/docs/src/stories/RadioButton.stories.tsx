import type { Meta, StoryObj } from '@storybook/react'
import { Box, RadioButton, RadioButtonProps } from '@campusativo-ui/react'

export default {
  title: 'Form/RadioButton',
  component: RadioButton,
  decorators: [
    (Story) => {
      return (
        <Box css={{ padding: '$4' }}>
          {Story()}
        </Box>
      )
    }
  ],
  args: {
    label: 'Opção de exemplo',
    name: 'exemplo',
    value: 'opcao1',
    isActive: false,
    hasError: false,
    disabled: false,
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description: 'Texto exibido ao lado do radio button',
    },
    name: {
      control: {
        type: 'text',
      },
      description: 'Nome do grupo de radio buttons',
    },
    value: {
      control: {
        type: 'text',
      },
      description: 'Valor do radio button',
    },
    isActive: {
      control: {
        type: 'boolean',
      },
      description: 'Se o radio button está selecionado',
    },
    hasError: {
      control: {
        type: 'boolean',
      },
      description: 'Mostra o estado de erro com borda vermelha',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Desabilita o radio button',
    },
  }
} as Meta<RadioButtonProps>

export const Primary: StoryObj<RadioButtonProps> = {}

export const Selected: StoryObj<RadioButtonProps> = {
  args: {
    label: 'Opção selecionada',
    isActive: true,
  }
}

export const WithError: StoryObj<RadioButtonProps> = {
  args: {
    label: 'Opção com erro',
    hasError: true,
  }
}

export const Disabled: StoryObj<RadioButtonProps> = {
  args: {
    label: 'Opção desabilitada',
    disabled: true,
  }
}

export const DisabledSelected: StoryObj<RadioButtonProps> = {
  args: {
    label: 'Opção desabilitada e selecionada',
    disabled: true,
    isActive: true,
  }
}

export const Group: StoryObj<RadioButtonProps> = {
  render: () => (
    <Box css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}>
      <RadioButton 
        label="Primeira opção" 
        name="grupo" 
        value="opcao1"
      />
      <RadioButton 
        label="Segunda opção" 
        name="grupo" 
        value="opcao2"
      />
      <RadioButton 
        label="Terceira opção" 
        name="grupo" 
        value="opcao3"
      />
    </Box>
  )
}

export const GroupWithError: StoryObj<RadioButtonProps> = {
  render: () => (
    <Box css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}>
      <RadioButton 
        label="Sim" 
        name="confirmacao" 
        value="sim"
        hasError={true}
      />
      <RadioButton 
        label="Não" 
        name="confirmacao" 
        value="nao"
        hasError={true}
      />
    </Box>
  )
}