import { render } from '@testing-library/react'
import { it, expect, describe } from 'vitest'
import '@testing-library/jest-dom'
import { Input } from './Input'

describe.concurrent('Components / Text input', () => {
  describe.concurrent('A11y', () => {
    it('should have `role="input"` by default', () => {
      const textInput = render(<Input />).getByRole('input')

      expect(textInput).toBeInTheDocument()
    })
  })

  it('Should have a label associated with the entry', () => {
    const input = render(<Input label="email" id="email" />).getByLabelText(
      'email',
    )

    expect(input).toBeInTheDocument()
  })
})
