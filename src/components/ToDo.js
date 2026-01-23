
import React from 'react'

const ToDo = ({text, updateMode, deleteToDo}) => {
  return (
  <ul className="todo-list">
          <li className="todo-item">
            <span className="todo-text">{text}</span>
            <div className='buttons'>
                <button className="btn-edit" onClick={updateMode}>
                Edit
                </button>
                <button className="btn-delete" onClick={deleteToDo}>
                Delete
                </button>
            </div>
          </li>
    
      </ul>
  )
}

export default ToDo
