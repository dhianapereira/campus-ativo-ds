import { Dropdown, Box, DropdownProps } from '@campusativo-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const departments = [
  { value: 'ti', name: 'Tecnologia da Informação' },
  { value: 'rh', name: 'Recursos Humanos' },
  { value: 'financeiro', name: 'Financeiro' },
  { value: 'marketing', name: 'Marketing' },
  { value: 'vendas', name: 'Vendas' },
  { value: 'suporte', name: 'Suporte' },
]

const priorities = [
  { value: 'baixa', name: 'Baixa' },
  { value: 'media', name: 'Média' },
  { value: 'alta', name: 'Alta' },
  { value: 'critica', name: 'Crítica' },
]

const problemTypes = [
  { value: 'hardware', name: 'Hardware' },
  { value: 'software', name: 'Software' },
  { value: 'rede', name: 'Rede' },
  { value: 'sistema', name: 'Sistema' },
]

const maintenanceTypes = [
  { value: 'preventiva', name: 'Manutenção Preventiva' },
  { value: 'corretiva', name: 'Manutenção Corretiva' },
  { value: 'preditiva', name: 'Manutenção Preditiva' },
  { value: 'emergencia', name: 'Manutenção de Emergência' },
]

export default {
  title: 'Form/Dropdown',
  component: Dropdown,
  decorators: [
    (Story) => {
      return (
        <Box css={{ 
          padding: '$4',
          display: 'flex',
          flexDirection: 'column',
          gap: '$4',
          maxWidth: '400px'
        }}>
          {Story()}
        </Box>
      )
    }
  ],
  args: {
    id: 'dropdown-example',
    label: 'Departamento',
    hint: 'Selecione um departamento',
    items: departments,
    itemSelected: '',
    hasError: false,
    disabled: false,
    required: false,
    errorMessage: '',
  },
  argTypes: {
    id: {
      control: {
        type: 'text',
      },
      description: 'ID único do dropdown',
    },
    label: {
      control: {
        type: 'text',
      },
      description: 'Texto do label do dropdown',
    },
    hint: {
      control: {
        type: 'text',
      },
      description: 'Texto do placeholder quando nenhuma opção está selecionada',
    },
    items: {
      control: {
        type: 'object',
      },
      description: 'Array de opções com value, name e disabled opcional',
    },
    itemSelected: {
      control: {
        type: 'text',
      },
      description: 'Valor da opção selecionada',
    },
    hasError: {
      control: {
        type: 'boolean',
      },
      description: 'Mostra o estado de erro com borda vermelha',
    },
    errorMessage: {
      control: {
        type: 'text',
      },
      description: 'Mensagem de erro exibida quando hasError é true',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Desabilita o dropdown completamente',
    },
    required: {
      control: {
        type: 'boolean',
      },
      description: 'Marca o campo como obrigatório (adiciona asterisco)',
    },
    className: {
      control: {
        type: 'text',
      },
      description: 'Classe CSS adicional',
    },
    onChange: {
      action: 'changed',
      description: 'Função chamada quando o valor é alterado',
    },
  }
} as Meta<DropdownProps>

export const Primary: StoryObj<DropdownProps> = {
  args: {
    id: 'primary-dropdown',
    label: 'Departamento',
    hint: 'Selecione um departamento',
    items: departments,
  }
}

export const WithSelectedValue: StoryObj<DropdownProps> = {
  args: {
    id: 'selected-dropdown',
    label: 'Prioridade',
    hint: 'Selecione a prioridade',
    items: priorities,
    itemSelected: 'media',
  }
}

export const WithError: StoryObj<DropdownProps> = {
  args: {
    id: 'error-dropdown',
    label: 'Status do Problema',
    hint: 'Selecione o status',
    items: [
      { value: 'aberto', name: 'Aberto' },
      { value: 'em_andamento', name: 'Em Andamento' },
      { value: 'resolvido', name: 'Resolvido' },
      { value: 'fechado', name: 'Fechado' },
    ],
    hasError: true,
    errorMessage: 'Por favor, selecione um status para o problema',
  }
}

export const Required: StoryObj<DropdownProps> = {
  args: {
    id: 'required-dropdown',
    label: 'Tipo de Problema',
    hint: 'Selecione o tipo',
    items: problemTypes,
    required: true,
  }
}

export const WithDisabledOptions: StoryObj<DropdownProps> = {
  args: {
    id: 'disabled-options-dropdown',
    label: 'Plano de Manutenção',
    hint: 'Selecione um plano',
    items: [
      { value: 'basico', name: 'Básico' },
      { value: 'intermediario', name: 'Intermediário' },
      { value: 'avancado', name: 'Avançado', disabled: true },
      { value: 'enterprise', name: 'Enterprise (Em breve)', disabled: true },
      { value: 'custom', name: 'Personalizado', disabled: true },
    ],
  }
}

export const Disabled: StoryObj<DropdownProps> = {
  args: {
    id: 'disabled-dropdown',
    label: 'Opção Desabilitada',
    hint: 'Não disponível no momento',
    items: priorities,
    itemSelected: 'media',
    disabled: true,
  }
}

export const ManyOptions: StoryObj<DropdownProps> = {
  args: {
    id: 'many-options-dropdown',
    label: 'Estado',
    hint: 'Selecione seu estado',
    items: [
      { value: 'ac', name: 'Acre' },
      { value: 'al', name: 'Alagoas' },
      { value: 'ap', name: 'Amapá' },
      { value: 'am', name: 'Amazonas' },
      { value: 'ba', name: 'Bahia' },
      { value: 'ce', name: 'Ceará' },
      { value: 'df', name: 'Distrito Federal' },
      { value: 'es', name: 'Espírito Santo' },
      { value: 'go', name: 'Goiás' },
      { value: 'ma', name: 'Maranhão' },
      { value: 'mt', name: 'Mato Grosso' },
      { value: 'ms', name: 'Mato Grosso do Sul' },
      { value: 'mg', name: 'Minas Gerais' },
      { value: 'pa', name: 'Pará' },
      { value: 'pb', name: 'Paraíba' },
      { value: 'pr', name: 'Paraná' },
      { value: 'pe', name: 'Pernambuco' },
      { value: 'pi', name: 'Piauí' },
      { value: 'rj', name: 'Rio de Janeiro' },
      { value: 'rn', name: 'Rio Grande do Norte' },
      { value: 'rs', name: 'Rio Grande do Sul' },
      { value: 'ro', name: 'Rondônia' },
      { value: 'rr', name: 'Roraima' },
      { value: 'sc', name: 'Santa Catarina' },
      { value: 'sp', name: 'São Paulo' },
      { value: 'se', name: 'Sergipe' },
      { value: 'to', name: 'Tocantins' },
    ],
  }
}

export const WithLongLabels: StoryObj<DropdownProps> = {
  args: {
    id: 'long-labels-dropdown',
    label: 'Tipo de Manutenção Detalhado',
    hint: 'Selecione o tipo de manutenção mais adequado',
    items: [
      { 
        value: 'preventiva', 
        name: 'Manutenção Preventiva - Realizada regularmente para evitar problemas' 
      },
      { 
        value: 'corretiva', 
        name: 'Manutenção Corretiva - Realizada após a ocorrência de uma falha' 
      },
      { 
        value: 'preditiva', 
        name: 'Manutenção Preditiva - Baseada em análise de condições dos equipamentos' 
      },
      { 
        value: 'emergencia', 
        name: 'Manutenção de Emergência - Realizada em caráter urgente e crítico' 
      },
    ],
  }
}

export const RequiredWithError: StoryObj<DropdownProps> = {
  args: {
    id: 'required-error-dropdown',
    label: 'Urgência da Solicitação',
    hint: 'Selecione o nível de urgência',
    items: [
      { value: 'baixa', name: 'Baixa - Pode aguardar' },
      { value: 'media', name: 'Média - Prazo normal' },
      { value: 'alta', name: 'Alta - Necessita atenção' },
      { value: 'critica', name: 'Crítica - Emergencial' },
    ],
    required: true,
    hasError: true,
    errorMessage: 'Este campo é obrigatório para prosseguir',
  }
}

export const FormExample: StoryObj<DropdownProps> = {
  name: 'Exemplo de Formulário',
  render: () => (
    <Box css={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '$4',
      maxWidth: '400px'
    }}>
      <Dropdown
        id="department-form"
        label="Departamento Responsável"
        hint="Selecione o departamento"
        items={departments}
        required
      />
      
      <Dropdown
        id="priority-form"
        label="Prioridade"
        hint="Selecione a prioridade"
        items={priorities}
        itemSelected="media"
        required
      />
      
      <Dropdown
        id="type-form"
        label="Tipo de Problema"
        hint="Selecione o tipo"
        items={problemTypes}
        hasError={true}
        errorMessage="Este campo é obrigatório"
        required
      />
      
      <Dropdown
        id="maintenance-form"
        label="Tipo de Manutenção"
        hint="Selecione o tipo de manutenção"
        items={maintenanceTypes}
        disabled={true}
      />
    </Box>
  )
}

export const InteractiveExample: StoryObj<DropdownProps> = {
  name: 'Exemplo Interativo',
  render: () => {
    const [selectedDepartment, setSelectedDepartment] = React.useState('')
    const [selectedPriority, setSelectedPriority] = React.useState('')
    const [errors, setErrors] = React.useState<{[key: string]: string}>({})
    
    const handleSubmit = () => {
      const newErrors: {[key: string]: string} = {}
      
      if (!selectedDepartment) {
        newErrors.department = 'Departamento é obrigatório'
      }
      if (!selectedPriority) {
        newErrors.priority = 'Prioridade é obrigatória'
      }
      
      setErrors(newErrors)
      
      if (Object.keys(newErrors).length === 0) {
        alert(`Formulário enviado!\nDepartamento: ${selectedDepartment}\nPrioridade: ${selectedPriority}`)
      }
    }
    
    return (
      <Box css={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '$4',
        maxWidth: '400px'
      }}>
        <Dropdown
          id="interactive-department"
          label="Departamento"
          hint="Selecione o departamento"
          items={departments}
          itemSelected={selectedDepartment}
          onChange={(value) => {
            setSelectedDepartment(value)
            if (errors.department) {
              setErrors(prev => ({ ...prev, department: '' }))
            }
          }}
          hasError={!!errors.department}
          errorMessage={errors.department}
          required
        />
        
        <Dropdown
          id="interactive-priority"
          label="Prioridade"
          hint="Selecione a prioridade"
          items={priorities}
          itemSelected={selectedPriority}
          onChange={(value) => {
            setSelectedPriority(value)
            if (errors.priority) {
              setErrors(prev => ({ ...prev, priority: '' }))
            }
          }}
          hasError={!!errors.priority}
          errorMessage={errors.priority}
          required
        />
        
        <Box css={{ marginTop: '$4' }}>
          <button 
            onClick={handleSubmit}
            style={{
              padding: '12px 24px',
              backgroundColor: '#00875F',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Enviar Formulário
          </button>
        </Box>
        
        {(selectedDepartment || selectedPriority) && (
          <Box css={{ 
            marginTop: '$4', 
            padding: '$4', 
            backgroundColor: '$greenishWhite',
            borderRadius: '$sm',
            border: '1px solid $lightGray'
          }}>
            <strong>Valores Selecionados:</strong>
            <br />
            Departamento: {selectedDepartment || 'Não selecionado'}
            <br />
            Prioridade: {selectedPriority || 'Não selecionado'}
          </Box>
        )}
      </Box>
    )
  }
}