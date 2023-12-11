import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it } from 'vitest'
import { Layout } from './Layout'
import { BrowserRouter } from 'react-router-dom'

describe('Components / Layout', () => {
  it('renders navigation with Sign Out link', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    )

    const logoElement = screen.getByAltText('Flash Logo')
    expect(logoElement).toBeInTheDocument()

    const signOutLink = screen.getByTestId('cypress-link-signout')
    expect(signOutLink).toBeInTheDocument()
    expect(signOutLink).toHaveAttribute('href', '/logout')
  })
})
