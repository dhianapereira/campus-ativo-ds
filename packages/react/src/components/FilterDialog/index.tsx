import React, { useState } from 'react'
import {
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  CloseButton,
  FilterSection,
  FilterLabel,
  CheckboxGroup,
  CheckboxItem,
  CheckboxLabel,
  ButtonGroup,
  ConfirmButton,
  CancelButton,
} from './styles'
import { Checkbox } from '../Checkbox'
import { X } from 'phosphor-react'

export interface FilterOption {
  id: string
  label: string
  checked: boolean
}

export interface FilterState {
  status: FilterOption[]
  priority: FilterOption[]
  location: FilterOption[]
  problemType: FilterOption[]
}

export interface FilterDialogProps {
  isOpen: boolean
  onClose: () => void
  onApply: (filters: FilterState) => void
  title?: string
  description?: string
}

const defaultFilters: FilterState = {
  status: [
    { id: 'para_analise', label: 'Para Análise', checked: false },
    { id: 'em_analise', label: 'Em Análise', checked: false },
    { id: 'aceito', label: 'Aceito', checked: false },
    { id: 'recusado', label: 'Recusado', checked: false },
    { id: 'em_andamento', label: 'Em Andamento', checked: false },
    { id: 'concluido', label: 'Concluído', checked: false },
  ],
  priority: [
    { id: 'baixa', label: 'Baixa', checked: false },
    { id: 'media', label: 'Média', checked: false },
    { id: 'alta', label: 'Alta', checked: false },
    { id: 'critica', label: 'Crítica', checked: false },
  ],
  location: [
    { id: 'bloco_a', label: 'Bloco A', checked: false },
    { id: 'bloco_b', label: 'Bloco B', checked: false },
    { id: 'bloco_c', label: 'Bloco C', checked: false },
    { id: 'biblioteca', label: 'Biblioteca', checked: false },
    { id: 'laboratorio', label: 'Laboratório', checked: false },
    { id: 'auditorio', label: 'Auditório', checked: false },
  ],
  problemType: [
    { id: 'ar_condicionado', label: 'Ar Condicionado', checked: false },
    { id: 'porta_defeito', label: 'Porta com Defeito', checked: false },
    { id: 'infiltracao', label: 'Infiltração', checked: false },
    { id: 'eletrico', label: 'Elétrico', checked: false },
    { id: 'hidraulico', label: 'Hidráulico', checked: false },
    { id: 'limpeza', label: 'Limpeza', checked: false },
  ],
}

export const FilterDialog = ({
  isOpen,
  onClose,
  onApply,
  title = 'Filtrar Problemas',
  description = 'Selecione os filtros para refinar sua busca',
}: FilterDialogProps) => {
  const [filters, setFilters] = useState<FilterState>(defaultFilters)

  const handleCheckboxChange = (
    category: keyof FilterState,
    optionId: string,
    checked: boolean,
  ) => {
    setFilters((prev) => ({
      ...prev,
      [category]: (prev[category] as FilterOption[]).map((option) =>
        option.id === optionId ? { ...option, checked } : option,
      ),
    }))
  }

  const handleApply = () => {
    onApply(filters)
    onClose()
  }

  const handleClear = () => {
    setFilters(defaultFilters)
  }

  const getActiveFiltersCount = () => {
    let count = 0
    count += filters.status.filter((f) => f.checked).length
    count += filters.priority.filter((f) => f.checked).length
    count += filters.location.filter((f) => f.checked).length
    count += filters.problemType.filter((f) => f.checked).length
    return count
  }

  if (!isOpen) return null

  return (
    <DialogOverlay onClick={onClose}>
      <DialogContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={20} />
        </CloseButton>

        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>

        <FilterSection>
          <FilterLabel>Status</FilterLabel>
          <CheckboxGroup>
            {filters.status.map((option) => (
              <CheckboxItem key={option.id}>
                <Checkbox
                  checked={option.checked}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(
                      'status',
                      option.id,
                      checked as boolean,
                    )
                  }
                />
                <CheckboxLabel>{option.label}</CheckboxLabel>
              </CheckboxItem>
            ))}
          </CheckboxGroup>
        </FilterSection>

        <FilterSection>
          <FilterLabel>Prioridade</FilterLabel>
          <CheckboxGroup>
            {filters.priority.map((option) => (
              <CheckboxItem key={option.id}>
                <Checkbox
                  checked={option.checked}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(
                      'priority',
                      option.id,
                      checked as boolean,
                    )
                  }
                />
                <CheckboxLabel>{option.label}</CheckboxLabel>
              </CheckboxItem>
            ))}
          </CheckboxGroup>
        </FilterSection>

        <FilterSection>
          <FilterLabel>Local</FilterLabel>
          <CheckboxGroup>
            {filters.location.map((option) => (
              <CheckboxItem key={option.id}>
                <Checkbox
                  checked={option.checked}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(
                      'location',
                      option.id,
                      checked as boolean,
                    )
                  }
                />
                <CheckboxLabel>{option.label}</CheckboxLabel>
              </CheckboxItem>
            ))}
          </CheckboxGroup>
        </FilterSection>

        <FilterSection>
          <FilterLabel>Tipo de Problema</FilterLabel>
          <CheckboxGroup>
            {filters.problemType.map((option) => (
              <CheckboxItem key={option.id}>
                <Checkbox
                  checked={option.checked}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(
                      'problemType',
                      option.id,
                      checked as boolean,
                    )
                  }
                />
                <CheckboxLabel>{option.label}</CheckboxLabel>
              </CheckboxItem>
            ))}
          </CheckboxGroup>
        </FilterSection>

        <ButtonGroup>
          <CancelButton onClick={handleClear}>Limpar Filtros</CancelButton>
          <ConfirmButton onClick={handleApply}>
            Aplicar Filtros ({getActiveFiltersCount()})
          </ConfirmButton>
        </ButtonGroup>
      </DialogContent>
    </DialogOverlay>
  )
}

FilterDialog.displayName = 'FilterDialog'
