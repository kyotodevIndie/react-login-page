import type { Meta, StoryObj } from '@storybook/react'
import '../../styles/index.sass'
import { ListItem } from './ListItem'

const meta: Meta<typeof ListItem> = {
  title: 'Components/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  args: {
    label: '😎 Awesome Label!',
    value: '😎 Awesome Description!',
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
