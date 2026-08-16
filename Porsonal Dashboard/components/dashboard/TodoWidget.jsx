import React, { useState } from 'react'
import WidgetCard from '../ui/WidgetCard'
import TodoForm from '../form/TodoForm'

const TodoItem = ({ text, done }) => (
  <li className="flex items-center gap-3 py-1 ">
    <span
      className={`w-4 h-4 rounded border flex items-center justify-center ${
        done ? 'border-emerald-400 bg-emerald-400/20' : 'border-white/20'
    }`}
    >
      {done && <span className="w-1.5 h-1.5 rounded-sm bg-emerald-400"></span>}
    </span>
    <span className={done ? 'line-through text-white/40' : 'text-white/85'}>{text}</span>
  </li>
)

const TodoWidget = () => {
  const [showForm, setShowForm] = useState(false)
  const [todos, setTodos] = useState([
    { id: "", text: "" , done: true},
   
  ])

  // const completedCount = todos.filter((t) => t.done).lengtht

  return (
    <WidgetCard
      label={null}
      gradient="bg-white/[0.03]"
      className="md:col-span-2"
    >
      <div className="flex items-center justify-between  mb-3">
        <div className="text-xs uppercase tracking-widest text-white/50">Today</div>
        {/* task quantity */}
        <div className="text-xs text-white/40">{todos.length} / {todos.length}</div>
        <button className="text-xs text-white/40 bg-white/10 px-2 py-1 rounded-md hover:bg-white/20 transition-all duration-300 active:scale-90"
        onClick={()=>{
          setShowForm(true)
        }}>Add Task</button>
      </div>
      <ul className="space-y-2 text-sm">
        {todos.map((todo,id) => (
          <TodoItem key={id} text={todo.text} done={todo.done} />
        ))}
        <div>
        {showForm && <TodoForm setTodos={setTodos} todos={todos}/>}
        </div>
      </ul>
      
    </WidgetCard>
  )
}

export default TodoWidget
