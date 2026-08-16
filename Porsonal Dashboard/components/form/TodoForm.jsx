const TodoForm = ({setTodos , todos}) => {

  console.log("rendering");
  
    const handleSubmit = (e) => {
        e.preventDefault()
        
    }
  return (
    <>
    <form className="w-full" action="" onSubmit={handleSubmit}>
        <input onChange={(e)=>{
          // setTodos({...todos, text : e.target.value});

        }} className="w-full" type="text" placeholder="Add a new task" />
        <button className="w-full" type="submit" onClick={handleSubmit}>Add</button>
    </form>
    </>
  )
}

export default TodoForm