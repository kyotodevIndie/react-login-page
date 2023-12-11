import type { Meta, StoryObj } from '@storybook/react'
import '../../styles/index.sass'
import { Layout } from './Layout'
import { BrowserRouter } from 'react-router-dom'

const Div = () => {
  return (
    <BrowserRouter>
      <div style={{ height: '50vh', overflow: 'hidden' }}>
        <Layout />
      </div>
    </BrowserRouter>
  )
}

const meta: Meta<typeof Div> = {
  title: 'Components/Layout',
  component: Div,
  tags: ['autodocs'],
  args: {},
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
