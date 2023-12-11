import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Components / Footer', () => {
  describe('Rendering', () => {
    it('should render Footer Component', () => {
      render(<Footer />)
      const p = screen.getByTestId('footer-text')
      expect(p).toBeTruthy()
    })
  })
})
