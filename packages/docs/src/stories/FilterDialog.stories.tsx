import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Box, Button, FilterDialog, FilterDialogProps } from '@campusativo-ui/react'
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
        component: 'Componente de dialog para filtros com checkboxes múltiplos e dropdown de período. Baseado no design de apps de hábitos.',
      },
    },
  },
} as Meta<FilterDialogProps>

export const Primary: StoryObj<FilterDialogProps> = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    
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
  render: (args) => (
    <FilterDialog
      {...args}
      onClose={() => console.log('Dialog fechado')}
      onApply={(filters) => console.log('Filtros aplicados:', filters)}
    />
  )
}

export const CustomTitle: StoryObj<FilterDialogProps> = {
  args: {
    title: 'Filtros Avançados',
    description: 'Configure filtros personalizados para sua pesquisa',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    
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
    
    const handleApplyFilters = (filters: any) => {
      let count = 0
      count += filters.status.filter((f: any) => f.checked).length
      count += filters.priority.filter((f: any) => f.checked).length
      count += filters.location.filter((f: any) => f.checked).length
      count += filters.problemType.filter((f: any) => f.checked).length
      if (filters.dateRange !== 'todos') count += 1
      
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
    
    const applyFilters = (filters: any) => {
      let filtered = [...problems]
      
      const selectedStatus = filters.status.filter((s: any) => s.checked).map((s: any) => s.id)
      if (selectedStatus.length > 0) {
        filtered = filtered.filter(p => selectedStatus.includes(p.status))
      }
      
      const selectedPriority = filters.priority.filter((p: any) => p.checked).map((p: any) => p.id)
      if (selectedPriority.length > 0) {
        filtered = filtered.filter(p => selectedPriority.includes(p.priority))
      }
      
      const selectedLocation = filters.location.filter((l: any) => l.checked).map((l: any) => l.id)
      if (selectedLocation.length > 0) {
        filtered = filtered.filter(p => selectedLocation.includes(p.location))
      }
      
      const selectedType = filters.problemType.filter((t: any) => t.checked).map((t: any) => t.id)
      if (selectedType.length > 0) {
        filtered = filtered.filter(p => selectedType.includes(p.type))
      }
      
      setFilteredProblems(filtered)
      
      let count = 0
      count += filters.status.filter((f: any) => f.checked).length
      count += filters.priority.filter((f: any) => f.checked).length
      count += filters.location.filter((f: any) => f.checked).length
      count += filters.problemType.filter((f: any) => f.checked).length
      if (filters.dateRange !== 'todos') count += 1
      
      setActiveFiltersCount(count)
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