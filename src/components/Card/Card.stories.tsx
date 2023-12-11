import type { Meta, StoryObj } from '@storybook/react'
import '../../styles/index.sass'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: <span style={{ color: 'White' }}>😎 Awesome Card!</span>,
    style: { width: 'fit-content' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
