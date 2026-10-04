import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/TodoformC';
import yoo from '../../src/assets/close-circle-fill.png'

const TodoItem = ({ id, text, done }) => {
  const [checktoggle, setChecktoggle] = useState(false)
  const { todos, setTodos } = useContext(UserContext)

  return (
    <>
      <li className="flex items-center justify-between gap-3 py-1">
        <span
          onClick={() => {
            setChecktoggle(!checktoggle)
          }}
          className={`w-4 h-4 shrink-0 rounded border flex items-center justify-center ${
            checktoggle ? 'border-emerald-400 bg-emerald-200' : 'border-white/20'
          }`}
        >
          {checktoggle && <span className="w-1.5 h-1.5 rounded-sm bg-emerald-400"></span>}
        </span>
        <span
          className={`min-w-0 flex-1 wrap-break-word ${checktoggle ? 'line-through text-white/40' : 'text-white/85'}`}
        >
          {text}
        </span>
        <div className="shrink-0 overflow-hidden">
          <span>
            {checktoggle && (
              <img
                className="h-4 w-4"
                onClick={() => {
                  setTodos((currentTodos) => currentTodos.filter((user) => user.id !== id))
                }}
                src={yoo}
                alt=""
              />
            )}
          </span>
        </div>
      </li>
    </>
  )
}

export default TodoItem