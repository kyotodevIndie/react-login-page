import type { Meta, StoryObj } from '@storybook/react'
import '../../styles/index.sass'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: '😎 Awesome Button!',
    style: { width: 'fit-content' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
