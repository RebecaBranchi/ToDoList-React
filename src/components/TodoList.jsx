import { useEffect, useState } from 'react'
import Form from './Form'
import Todo from './Todo'

const TodoList = () => {

  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos") || "[]"));



  useEffect(() => {
      console.log("Guardar todo local");
      localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const agregarTodo= (todo) => {
    console.log(todo)
    setTodos((old)=> [...old, todo])
  }

  const eliminarTodo = (id) => {
      setTodos((old) => old.filter(item => item.id !== id))
  }

  const completoTodo = (id) => { 

    const completoTodos = todos.map(item => (
      item.id === id ? {...item, estado: !item.estado} : item
    ))

    setTodos(completoTodos)

  }

  return (
    <>
        <Form agregarTodo={agregarTodo}/>
        <ul className='list-group list-group-numbered mt-2'>
          {todos.map((item) => {
              return(
              <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} completoTodo={completoTodo}/>
              )
              })
          }
        </ul>
        
    </>
  )
}

export default TodoList