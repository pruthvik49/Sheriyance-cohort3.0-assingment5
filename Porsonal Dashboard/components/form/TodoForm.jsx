import React from "react";
import { useForm } from "react-hook-form"
const TodoForm = ({ handleSubmit, inputValue, setInputValue,inpref }) => {


  return (
    <>
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          ref={inpref}
          // value={inputValue}

          // onChange={(e) => setInputValue(e.target.value)}
          className="w-full h-7 border border-gray-500 p-4 rounded-xl"
          type="text"
          placeholder="Add a new task"
        />
        <button onClick={() => setInputValue(inpref.current.value)} className="w-full" type="submit">Add</button>
        {/* <button onClick={() => localStorage.setItem("todo",JSON.stringify(inpref.current.value))} className="w-full" type="submit">Add</button> */}
      </form>
    </>
  );
}

export default TodoForm