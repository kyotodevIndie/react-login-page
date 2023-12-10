import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'
import userEvent from '@testing-library/user-event'

describe('Components / Button', () => {
  describe('A11y', () => {
    it('should have `role="button"` by default', () => {
      render(<Button>Hi there</Button>)

      expect(button()).toBeInTheDocument()
    })

    it('should be able to use any other role permitted for `<button>`s', () => {
      render(<Button role="menuitem">Hi there</Button>)

      const button = screen.getByRole('menuitem')

      expect(button).toBeInTheDocument()
    })
  })

  describe('Keyboard interactions', () => {
    it('should trigger `onClick` when `Space` is pressed', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()

      render(<Button onClick={onClick}>Hi there</Button>)

      await user.click(button())

      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('should focus when `Tab` is pressed', async () => {
      const user = userEvent.setup()
      render(<Button>Hi there</Button>)

      await user.tab()

      expect(button()).toHaveFocus()
    })

    it('should be possible to `Tab` out', async () => {
      const user = userEvent.setup()
      render(
        <>
          <Button>Hi there</Button>
          <Button>Hello there</Button>
          <button type="submit">Submit</button>
        </>,
      )

      await user.tab()

      expect(buttons()[0]).toHaveFocus()

      await user.tab()

      expect(buttons()[1]).toHaveFocus()

      await user.tab()

      expect(buttons()[2]).toHaveFocus()
    })
  })
})
const button = () => screen.getByRole('button')
const buttons = () => screen.getAllByRole('button')
