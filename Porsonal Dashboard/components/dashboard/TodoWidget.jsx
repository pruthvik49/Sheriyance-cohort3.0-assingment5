import { useContext, useEffect, useRef, useState } from 'react'
import WidgetCard from '../ui/WidgetCard'
import TodoForm from '../form/TodoForm'
import { UserContext } from '../../context/TodoformC'
import TodoItem from './TodoItem'
import expandimg from '../../src/assets/expand.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const TodoWidget = () => {
  const { showForm, setShowForm, todos, setTodos } = useContext(UserContext)
  const [inputValue, setInputValue] = useState('')
  const inpref = useRef()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedValue = inputValue.trim()

    if (!trimmedValue) return

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Date.now(), text: trimmedValue, done: false },
    ])

    inpref.current.value = " "
  }
 

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
        <div className='flex gap-2'>
        <button className="text-xs text-white/40 bg-white/10 px-2 py-1 rounded-md hover:bg-white/20 transition-all duration-300 active:scale-90"
        onClick={()=>{
          setShowForm(true)
        }}>Add Task</button>
        <img onClick={()=>{
          navigate("/home/bigW")
        }} className=" text-white/40 w-8 bg-white/10 px-1 py-0.5 rounded-md hover:bg-white/20 transition-all duration-300 active:scale-90" src={expandimg} alt="" />
        </div>
      </div>
      <ul className="space-y-2 text-sm">
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
        ))}
        <div>
        {showForm && <TodoForm handleSubmit={handleSubmit} inputValue={inputValue} setInputValue={setInputValue} inpref={inpref}/>}
        </div>
      </ul>

    </WidgetCard>
  )
}

export default TodoWidget
