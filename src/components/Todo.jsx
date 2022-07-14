import React from 'react'

const Todo = ({todo, eliminarTodo, completoTodo}) => {

    const {id, tarea, description, estado, prioridad} = todo;

  return (
    <li className='list-group-item d-flex justify-content-between aling-items-start'>
        <div className='ms-2 me-auto'>
            <div className='fw-bold'>{tarea} ({estado ? 'Finalizado' : 'Pendiente'})</div>
            <p>{description}</p>
            <div>
                <button className="btn btn-danger me-2" onClick={()=>eliminarTodo(id)}>Eliminar</button>
                <button className="btn btn-warning" onClick={()=>completoTodo(id)}>Completo/Pendiente</button>
            </div>
        </div>
        <span className='badge bg-primary '>
            {prioridad && 'Importante'}
        </span>
    </li>    
  )
}

export default Todo