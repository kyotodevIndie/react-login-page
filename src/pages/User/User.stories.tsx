import type { Meta, StoryObj } from '@storybook/react'
import '../../styles/index.sass'
import { User } from './User'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../services/queryClient'

const Div = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <User />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

const meta: Meta<typeof Div> = {
  title: 'Pages/User',
  component: Div,
  tags: ['autodocs'],
  args: {},
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
