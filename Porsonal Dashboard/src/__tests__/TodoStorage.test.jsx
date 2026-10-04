import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { ContextProvider, UserContext } from '../../context/TodoformC.jsx'

describe('todo localStorage persistence', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('loads saved todos from localStorage on mount', () => {
    window.localStorage.setItem(
      'todo',
      JSON.stringify([{ id: 1, text: 'Saved task', done: false }]),
    )

    render(
      <ContextProvider>
        <UserContext.Consumer>
          {({ todos }) => <span>{todos[0]?.text ?? 'no task'}</span>}
        </UserContext.Consumer>
      </ContextProvider>,
    )

    expect(screen.getByText('Saved task')).toBeInTheDocument()
  })

  it('saves updated todos to localStorage', () => {
    render(
      <ContextProvider>
        <UserContext.Consumer>
          {({ setTodos }) => (
            <button
              type="button"
              onClick={() =>
                setTodos([{ id: 99, text: 'Persisted task', done: false }])
              }
            >
              Add task
            </button>
          )}
        </UserContext.Consumer>
      </ContextProvider>,
    )

    fireEvent.click(screen.getByRole('button', { name: /add task/i }))

    expect(JSON.parse(window.localStorage.getItem('todo'))).toEqual([
      { id: 99, text: 'Persisted task', done: false },
    ])
  })
})
