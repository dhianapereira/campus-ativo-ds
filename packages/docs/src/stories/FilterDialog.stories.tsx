import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Box, Button, FilterDialog, FilterDialogProps, FilterOption } from '@campusativo-ui/react'
import { Funnel } from 'phosphor-react'

export default {
  title: 'Overlays/FilterDialog',
  component: FilterDialog,
  decorators: [
    (Story) => {
      return (
        <Box css={{ 
          padding: '$4',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {Story()}
        </Box>
      )
    }
  ],
  args: {
    isOpen: false,
    title: 'Filtrar Problemas',
    description: 'Selecione os filtros para refinar sua busca',
    filterOptions: [],
  },
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
      description: 'Controla se o dialog está aberto',
    },
    title: {
      control: {
        type: 'text',
      },
      description: 'Título do dialog',
    },
    description: {
      control: {
        type: 'text',
      },
      description: 'Descrição do dialog',
    },
    filterOptions: {
      control: {
        type: 'object',
      },
      description: 'Lista de opções de filtros',
    },
    onClose: {
      action: 'closed',
      description: 'Callback quando o dialog é fechado',
    },
    onApply: {
      action: 'filters-applied',
      description: 'Callback quando os filtros são aplicados',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente de dialog para filtros com checkboxes múltiplos. Lista simples de filtros configurável pelo usuário.',
      },
    },
  },
} as Meta<FilterDialogProps>

export const Primary: StoryObj<FilterDialogProps> = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const filterOptions: FilterOption[] = [
      { id: 'para_analise', label: 'Para Análise', checked: false },
      { id: 'em_andamento', label: 'Em Andamento', checked: false },
      { id: 'concluido', label: 'Concluído', checked: false },
      { id: 'aceito', label: 'Aceito', checked: false },
      { id: 'alta', label: 'Prioridade Alta', checked: false },
      { id: 'media', label: 'Prioridade Média', checked: false },
      { id: 'baixa', label: 'Prioridade Baixa', checked: false },
      { id: 'critica', label: 'Prioridade Crítica', checked: false },
    ]
    
    return (
      <div>
        <Button 
          onClick={() => setIsOpen(true)}
          variant="secondary"
        >
          <Funnel size={16} />
          Abrir Filtros
        </Button>
        
        <FilterDialog

          {...args}
          isOpen={isOpen}
          filterOptions={filterOptions}
          onClose={() => setIsOpen(false)}
          onApply={(filters) => {
            console.log('Filtros aplicados:', filters)
            setIsOpen(false)
          }}
        />
      </div>
    )
  }
}

export const AlwaysOpen: StoryObj<FilterDialogProps> = {
  args: {
    isOpen: true,
    title: 'Filtrar Problemas',
    description: 'Selecione os filtros para refinar sua busca',
  },
  render: (args) => {
    const filterOptions: FilterOption[] = [
      { id: 'ativo', label: 'Ativo', checked: false },
      { id: 'inativo', label: 'Inativo', checked: false },
      { id: 'pendente', label: 'Pendente', checked: false },
      { id: 'aprovado', label: 'Aprovado', checked: false },
    ]

    return (
      <FilterDialog
        {...args}
        filterOptions={filterOptions}
        onClose={() => console.log('Dialog fechado')}
        onApply={(filters) => console.log('Filtros aplicados:', filters)}
      />
    )
  }
}

export const CustomTitle: StoryObj<FilterDialogProps> = {
  args: {
    title: 'Filtros Avançados',
    description: 'Configure filtros personalizados para sua pesquisa',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const filterOptions: FilterOption[] = [
      { id: 'categoria_a', label: 'Categoria A', checked: false },
      { id: 'categoria_b', label: 'Categoria B', checked: false },
      { id: 'categoria_c', label: 'Categoria C', checked: false },
      { id: 'urgente', label: 'Urgente', checked: false },
      { id: 'normal', label: 'Normal', checked: false },
    ]
    
    return (
      <div>
        <Button 
          onClick={() => setIsOpen(true)}
          variant="primary"
        >
          <Funnel size={16} />
          Filtros Personalizados
        </Button>
        
        <FilterDialog
          {...args}
          isOpen={isOpen}
          filterOptions={filterOptions}
          onClose={() => setIsOpen(false)}
          onApply={(filters) => {
            console.log('Filtros aplicados:', filters)
            setIsOpen(false)
          }}
        />
      </div>
    )
  }
}

export const WithActiveFilters: StoryObj<FilterDialogProps> = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeFiltersCount, setActiveFiltersCount] = useState(0)
    
    const filterOptions: FilterOption[] = [
      { id: 'para_analise', label: 'Para Análise', checked: false },
      { id: 'em_andamento', label: 'Em Andamento', checked: false },
      { id: 'concluido', label: 'Concluído', checked: false },
      { id: 'alta', label: 'Prioridade Alta', checked: false },
      { id: 'media', label: 'Prioridade Média', checked: false },
      { id: 'baixa', label: 'Prioridade Baixa', checked: false },
      { id: 'bloco_a', label: 'Bloco A', checked: false },
      { id: 'bloco_b', label: 'Bloco B', checked: false },
      { id: 'biblioteca', label: 'Biblioteca', checked: false },
    ]
    
    const handleApplyFilters = (filters: FilterOption[]) => {
      const count = filters.filter(f => f.checked).length
      setActiveFiltersCount(count)
      setIsOpen(false)
      console.log('Filtros aplicados:', filters)
    }
    
    return (
      <div>
        <Button 
          onClick={() => setIsOpen(true)}
          variant="secondary"
          style={{ position: 'relative' }}
        >
          <Funnel size={16} />
          Filtros
          {activeFiltersCount > 0 && (
            <span 
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: '#00875F',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold'
              }}
            >
              {activeFiltersCount}
            </span>
          )}
        </Button>
        
        <FilterDialog
          {...args}
          isOpen={isOpen}
          filterOptions={filterOptions}
          onClose={() => setIsOpen(false)}
          onApply={handleApplyFilters}
        />
        
        {activeFiltersCount > 0 && (
          <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            <p>{activeFiltersCount} filtro(s) ativo(s)</p>
          </div>
        )}
      </div>
    )
  }
}

export const InteractiveExample: StoryObj<FilterDialogProps> = {
  name: 'Exemplo Interativo com Lista',
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    const [problems] = useState([
      {
        id: '1',
        title: 'Ar condicionado quebrado',
        status: 'para_analise',
        priority: 'alta',
        location: 'bloco_a',
        type: 'ar_condicionado',
        createdAt: '2024-01-15'
      },
      {
        id: '2',
        title: 'Porta com defeito',
        status: 'em_andamento',
        priority: 'media',
        location: 'bloco_b',
        type: 'porta_defeito',
        createdAt: '2024-01-16'
      },
      {
        id: '3',
        title: 'Infiltração no teto',
        status: 'concluido',
        priority: 'critica',
        location: 'biblioteca',
        type: 'infiltracao',
        createdAt: '2024-01-17'
      },
      {
        id: '4',
        title: 'Problema elétrico',
        status: 'aceito',
        priority: 'baixa',
        location: 'bloco_c',
        type: 'eletrico',
        createdAt: '2024-01-18'
      }
    ])
    
    const [filteredProblems, setFilteredProblems] = useState(problems)
    const [activeFiltersCount, setActiveFiltersCount] = useState(0)
    
    const filterOptions: FilterOption[] = [
      { id: 'para_analise', label: 'Para Análise', checked: false },
      { id: 'em_andamento', label: 'Em Andamento', checked: false },
      { id: 'concluido', label: 'Concluído', checked: false },
      { id: 'aceito', label: 'Aceito', checked: false },
      { id: 'alta', label: 'Prioridade Alta', checked: false },
      { id: 'media', label: 'Prioridade Média', checked: false },
      { id: 'baixa', label: 'Prioridade Baixa', checked: false },
      { id: 'critica', label: 'Prioridade Crítica', checked: false },
      { id: 'bloco_a', label: 'Bloco A', checked: false },
      { id: 'bloco_b', label: 'Bloco B', checked: false },
      { id: 'bloco_c', label: 'Bloco C', checked: false },
      { id: 'biblioteca', label: 'Biblioteca', checked: false },
    ]
    
    const applyFilters = (filters: FilterOption[]) => {
      let filtered = [...problems]
      const activeFilters = filters.filter(f => f.checked)
      
      if (activeFilters.length > 0) {
        filtered = filtered.filter(problem => {
          return activeFilters.some(filter => 
            problem.status === filter.id ||
            problem.priority === filter.id ||
            problem.location === filter.id
          )
        })
      }
      
      setFilteredProblems(filtered)
      setActiveFiltersCount(activeFilters.length)
      setIsOpen(false)
    }
    
    return (
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ margin: 0 }}>Problemas Reportados ({filteredProblems.length})</h3>
          <Button 
            onClick={() => setIsOpen(true)}
            variant="secondary"
            style={{ position: 'relative' }}
          >
            <Funnel size={16} />
            Filtrar
            {activeFiltersCount > 0 && (
              <span 
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: '#00875F',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              >
                {activeFiltersCount}
              </span>
            )}
          </Button>
        </div>
        
        <FilterDialog
          {...args}
          isOpen={isOpen}
          filterOptions={filterOptions}
          onClose={() => setIsOpen(false)}
          onApply={applyFilters}
        />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredProblems.map(problem => (
            <div 
              key={problem.id}
              style={{
                padding: '16px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <h4 style={{ margin: 0, marginBottom: '8px' }}>{problem.title}</h4>
              <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: '#666' }}>
                <span>Status: {problem.status}</span>
                <span>Prioridade: {problem.priority}</span>
                <span>Local: {problem.location}</span>
                <span>Tipo: {problem.type}</span>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProblems.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <p>Nenhum problema encontrado com os filtros aplicados.</p>
            <Button 
              onClick={() => setIsOpen(true)}
              variant="secondary"
            >
              Ajustar Filtros
            </Button>
          </div>
        )}
      </div>
    )
  }
}

export const MobileView: StoryObj<FilterDialogProps> = {
  name: 'Visualização Mobile',
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
      },
      defaultViewport: 'mobile',
    },
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const filterOptions: FilterOption[] = [
      { id: 'disponivel', label: 'Disponível', checked: false },
      { id: 'ocupado', label: 'Ocupado', checked: false },
      { id: 'manutencao', label: 'Manutenção', checked: false },
      { id: 'reservado', label: 'Reservado', checked: false },
    ]
    
    return (
      <div style={{ width: '100%', padding: '16px' }}>
        <Button 
          onClick={() => setIsOpen(true)}
          variant="secondary"
          style={{ width: '100%' }}
        >
          <Funnel size={16} />
          Abrir Filtros
        </Button>
        
        <FilterDialog
          {...args}
          isOpen={isOpen}
          filterOptions={filterOptions}
          onClose={() => setIsOpen(false)}
          onApply={(filters) => {
            console.log('Filtros aplicados:', filters)
            setIsOpen(false)
          }}
        />
      </div>
    )
  }
}

export const MinimalExample: StoryObj<FilterDialogProps> = {
  name: 'Exemplo Minimalista',
  args: {
    title: 'Filtros',
    description: 'Refine sua busca',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const filterOptions: FilterOption[] = [
      { id: 'sim', label: 'Sim', checked: false },
      { id: 'nao', label: 'Não', checked: false },
    ]
    
    return (
      <div>
        <Button 
          onClick={() => setIsOpen(true)}
          variant="secondary"
        >
          <Funnel size={14} />
        </Button>
        
        <FilterDialog
          {...args}
          isOpen={isOpen}
          filterOptions={filterOptions}
          onClose={() => setIsOpen(false)}
          onApply={(filters) => {
            console.log('Filtros aplicados:', filters)
            setIsOpen(false)
          }}
        />
      </div>
    )
  }
}

export const ManyFilters: StoryObj<FilterDialogProps> = {
  name: 'Muitos Filtros',
  args: {
    title: 'Filtros Completos',
    description: 'Exemplo com muitas opções de filtros',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const filterOptions: FilterOption[] = [
      { id: 'status_ativo', label: 'Status: Ativo', checked: false },
      { id: 'status_inativo', label: 'Status: Inativo', checked: false },
      { id: 'status_pendente', label: 'Status: Pendente', checked: false },
      { id: 'prioridade_baixa', label: 'Prioridade: Baixa', checked: false },
      { id: 'prioridade_media', label: 'Prioridade: Média', checked: false },
      { id: 'prioridade_alta', label: 'Prioridade: Alta', checked: false },
      { id: 'prioridade_critica', label: 'Prioridade: Crítica', checked: false },
      { id: 'categoria_bug', label: 'Categoria: Bug', checked: false },
      { id: 'categoria_feature', label: 'Categoria: Feature', checked: false },
      { id: 'categoria_melhoria', label: 'Categoria: Melhoria', checked: false },
      { id: 'assignee_joao', label: 'Responsável: João', checked: false },
      { id: 'assignee_maria', label: 'Responsável: Maria', checked: false },
      { id: 'assignee_pedro', label: 'Responsável: Pedro', checked: false },
      { id: 'projeto_web', label: 'Projeto: Web', checked: false },
      { id: 'projeto_mobile', label: 'Projeto: Mobile', checked: false },
      { id: 'projeto_api', label: 'Projeto: API', checked: false },
    ]
    
    return (
      <div>
        <Button 
          onClick={() => setIsOpen(true)}
          variant="secondary"
        >
          <Funnel size={16} />
          Ver Todos os Filtros
        </Button>
        
        <FilterDialog
          {...args}
          isOpen={isOpen}
          filterOptions={filterOptions}
          onClose={() => setIsOpen(false)}
          onApply={(filters) => {
            console.log('Filtros aplicados:', filters)
            setIsOpen(false)
          }}
        />
      </div>
    )
  }
}

export const WithPreselectedFilters: StoryObj<FilterDialogProps> = {
  name: 'Filtros Pré-selecionados',
  args: {
    title: 'Filtros com Seleção Inicial',
    description: 'Alguns filtros já vêm marcados por padrão',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const filterOptions: FilterOption[] = [
      { id: 'para_analise', label: 'Para Análise', checked: true },
      { id: 'em_andamento', label: 'Em Andamento', checked: true },
      { id: 'concluido', label: 'Concluído', checked: false },
      { id: 'cancelado', label: 'Cancelado', checked: false },
      { id: 'alta', label: 'Prioridade Alta', checked: true },
      { id: 'media', label: 'Prioridade Média', checked: false },
      { id: 'baixa', label: 'Prioridade Baixa', checked: false },
    ]
    
    return (
      <div>
        <Button 
          onClick={() => setIsOpen(true)}
          variant="secondary"
        >
          <Funnel size={16} />
          Filtros com Pré-seleção
        </Button>
        
        <FilterDialog
          {...args}
          isOpen={isOpen}
          filterOptions={filterOptions}
          onClose={() => setIsOpen(false)}
          onApply={(filters) => {
            console.log('Filtros aplicados:', filters)
            setIsOpen(false)
          }}
        />
      </div>
    )
  }
}