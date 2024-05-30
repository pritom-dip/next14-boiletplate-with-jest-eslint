import { render, screen } from '@testing-library/react'
import Home from '../app/page'

test('Home', () => {
  render(<Home />)
  const home = screen.getByText(/pri/i)
  expect(home).toBeInTheDocument()
})
