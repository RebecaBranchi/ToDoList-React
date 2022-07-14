import React from 'react'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className='container'>
        <h1 className="navbar navbar-dark bg-primary">To Do List</h1>
        <TodoList/>
    </div>
  )
}

export default App