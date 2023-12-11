import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Card } from './Card'

describe('Components / Card', () => {
  it('should render Card component with provided className', () => {
    const { container } = render(<Card className="custom-class" />)

    expect(container.querySelector('.card')).not.toBeNull()
    expect(container.querySelector('.custom-class')).not.toBeNull()
  })

  it('should have a data-testid attribute with value "card"', () => {
    const { container } = render(<Card />)

    expect(container.querySelector('[data-testid="card"]')).not.toBeNull()
  })

  it('should pass HTML attributes to the rendered element', () => {
    const { container } = render(<Card id="my-card" />)

    expect(container.querySelector('#my-card')).not.toBeNull()
  })
})
