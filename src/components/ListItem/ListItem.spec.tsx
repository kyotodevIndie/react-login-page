// @ts-nocheck
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { it, describe } from 'vitest'
import { ListItem } from './ListItem'

describe('Components / ListItem', () => {
  it('renders with label and value', () => {
    render(<ListItem label="Test Label" value="Test Value" />)

    expect(screen.getByText('Test Label')).toBeInTheDocument()

    expect(screen.getByText('Test Value')).toBeInTheDocument()
  })
})
