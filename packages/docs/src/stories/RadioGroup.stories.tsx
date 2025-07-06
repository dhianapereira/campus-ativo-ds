import type { Meta, StoryObj } from '@storybook/react'
import { Box, RadioGroup, RadioGroupProps } from '@campusativo-ui/react'

const maintenanceTypes = [
  { id: 'preventiva', label: 'Manutenção Preventiva' },
  { id: 'corretiva', label: 'Manutenção Corretiva' },
  { id: 'emergencia', label: 'Manutenção de Emergência' },
]

const priorities = [
  { id: 'baixa', label: 'Baixa' },
  { id: 'media', label: 'Média' },
  { id: 'alta', label: 'Alta' },
]

export default {
  title: 'Form/RadioGroup',
  component: RadioGroup,
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
    title: 'Tipo de Manutenção',
    name: 'maintenance-type',
    options: maintenanceTypes,
    orientation: 'horizontal',
    hasError: false,
    disabled: false,
  },
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
      description: 'Título do grupo de radio buttons',
    },
    name: {
      control: {
        type: 'text',
      },
      description: 'Nome do grupo de radio buttons',
    },
    options: {
      control: {
        type: 'object',
      },
      description: 'Array de opções com id, label e disabled',
    },
    orientation: {
      control: {
        type: 'radio',
      },
      options: ['horizontal', 'vertical'],
      description: 'Orientação do grupo',
    },
    hasError: {
      control: {
        type: 'boolean',
      },
      description: 'Mostra o estado de erro',
    },
    errorMessage: {
      control: {
        type: 'text',
      },
      description: 'Mensagem de erro (requer hasError)',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Desabilita todo o grupo',
    },
    defaultValue: {
      control: {
        type: 'text',
      },
      description: 'Valor padrão selecionado',
    },
  }
} as Meta<RadioGroupProps>

export const Primary: StoryObj<RadioGroupProps> = {}

export const WithDefaultValue: StoryObj<RadioGroupProps> = {
  args: {
    title: 'Prioridade',
    name: 'priority',
    options: priorities,
    defaultValue: 'media',
  }
}

export const Vertical: StoryObj<RadioGroupProps> = {
  args: {
    title: 'Opções Verticais',
    name: 'vertical-options',
    options: [
      { id: 'opcao1', label: 'Primeira opção muito longa que precisa de mais espaço' },
      { id: 'opcao2', label: 'Segunda opção também longa' },
      { id: 'opcao3', label: 'Terceira opção' },
    ],
    orientation: 'vertical',
  }
}

export const WithError: StoryObj<RadioGroupProps> = {
  args: {
    title: 'Confirma a solicitação?',
    name: 'confirmation',
    options: [
      { id: 'sim', label: 'Sim' },
      { id: 'nao', label: 'Não' },
    ],
    hasError: true,
    errorMessage: 'Por favor, selecione uma opção',
  }
}

export const WithDisabledOptions: StoryObj<RadioGroupProps> = {
  args: {
    title: 'Plano de Manutenção',
    name: 'maintenance-plan',
    options: [
      { id: 'basico', label: 'Básico' },
      { id: 'intermediario', label: 'Intermediário' },
      { id: 'avancado', label: 'Avançado', disabled: true },
    ],
  }
}

export const AllDisabled: StoryObj<RadioGroupProps> = {
  args: {
    title: 'Grupo Desabilitado',
    name: 'disabled-group',
    options: priorities,
    disabled: true,
    defaultValue: 'media',
  }
}

export const LongLabels: StoryObj<RadioGroupProps> = {
  args: {
    title: 'Tipos de Problemas',
    name: 'problem-types',
    options: [
      { id: 'hardware', label: 'Problemas de Hardware (computadores, impressoras, etc.)' },
      { id: 'software', label: 'Problemas de Software (sistemas, aplicativos, etc.)' },
      { id: 'rede', label: 'Problemas de Rede (internet, conectividade, etc.)' },
    ],
    orientation: 'vertical',
  }
}

export const ManyOptions: StoryObj<RadioGroupProps> = {
  args: {
    title: 'Departamentos',
    name: 'departments',
    options: [
      { id: 'ti', label: 'TI' },
      { id: 'rh', label: 'RH' },
      { id: 'financeiro', label: 'Financeiro' },
      { id: 'marketing', label: 'Marketing' },
      { id: 'vendas', label: 'Vendas' },
      { id: 'suporte', label: 'Suporte' },
    ],
    orientation: 'horizontal',
  }
}