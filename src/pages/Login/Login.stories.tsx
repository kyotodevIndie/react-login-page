import type { Meta, StoryObj } from '@storybook/react'
import '../../styles/index.sass'
import { Login } from './Login'
import { BrowserRouter } from 'react-router-dom'

const Div = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  )
}

const meta: Meta<typeof Div> = {
  title: 'Pages/Login',
  component: Div,
  tags: ['autodocs'],
  args: {},
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
