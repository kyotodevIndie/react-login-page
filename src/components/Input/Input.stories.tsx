import type { Meta, StoryObj } from '@storybook/react'
import '../../styles/index.sass'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: '😎 Awesome Input!',
    style: { width: 'fit-content' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
