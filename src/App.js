import { useEffect, useState } from 'react';
import './components/styles/todostyles.css'
import ToDo from './components/ToDo';
import { addToDo, getAllTodo, updateToDo, deleteToDo } from './utils/HandleApi';


function App() {
const [toDo, setToDo] = useState([])
const [text, setText] = useState('')
const [isUpdating, setIsUpdating] = useState(false)
const [toDoId, setToDoId] = useState('')

useEffect(() => {
getAllTodo(setToDo)
},[])

const updateMode = (_id, text) => {
  setIsUpdating(true)
  setText(text)
  setToDoId(_id)
}

  return (
   <div className="todo-container">
      <h2 className="todo-title">React + Node Todo App</h2>

      <div className="todo-input-wrapper">
        <input
          className="todo-input"
          placeholder="Enter a task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button 
        className="btn-add" 
        onClick={isUpdating ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating) :
         () => addToDo(text, setText, setToDo)}>
          {isUpdating ? "Update Task" : "Add Task"}
        </button>
      </div>
      {toDo.map((item) => 
      <ToDo
       key={item._id}
        text={item.text}
        updateMode={() => updateMode(item._id, item.text)}
        deleteToDo ={() => deleteToDo(item._id, setToDo)}
        />)}
    
    </div>
  );
}

export default App;
