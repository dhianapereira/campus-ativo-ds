import type { Meta, StoryObj } from '@storybook/react'
import { StatusBadge, StatusBadgeProps } from '@campusativo-ui/react'

export default {
  title: 'Data display/Status Badge',
  component: StatusBadge,
  args: {
    variant: 'toAnalysis',
  },
  argTypes: {
    variant: {
      options: ['toAnalysis', 'inAnalysis', 'accepted', 'rejected', 'inProgress', 'finished'],
      control: {
        type: 'inline-radio',
      },
    }
  }
} as Meta<StatusBadgeProps>


export const ToAnalysis: StoryObj<StatusBadgeProps> = {
  args: {
    children: "Para análise",
    variant: 'toAnalysis',
  }
}

export const InAnalysis: StoryObj<StatusBadgeProps> = {
  args: {
    children: "Em análise",
    variant: 'inAnalysis',
  }
}

export const Accepted: StoryObj<StatusBadgeProps> = {
  args: {
    children: "Aceito",
    variant: 'accepted',
  }
}

export const Rejected: StoryObj<StatusBadgeProps> = {
  args: {
    children: "Recusado",
    variant: 'rejected',
  }
}

export const InProgress: StoryObj<StatusBadgeProps> = {
  args: {
    children: "Em Progresso",
    variant: 'inProgress',
  }
}

export const Finished: StoryObj<StatusBadgeProps> = {
  args: {
    children: "Concluído",
    variant: 'finished',
  }
}

