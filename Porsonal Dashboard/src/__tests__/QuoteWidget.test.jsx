import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import QuoteWidget from '../../components/dashboard/QuoteWidget.jsx'

describe('QuoteWidget', () => {
  it('updates and saves the quote when Enter is pressed', () => {
    render(<QuoteWidget />)

    const textarea = screen.getByLabelText(/quote/i)
    fireEvent.change(textarea, {
      target: { value: 'Success is built by daily effort.' },
    })

    expect(screen.getByDisplayValue('Success is built by daily effort.')).toBeInTheDocument()

    fireEvent.keyDown(textarea, { key: 'Enter', code: 'Enter', charCode: 13 })

    expect(screen.getByText('Success is built by daily effort.')).toBeInTheDocument()
  })
})
