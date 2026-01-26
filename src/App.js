import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './components/styles/todostyles.css'
import ToDo from './components/ToDo';
import Login from './components/Login';
import Register from './components/Register';
import { addToDo, getAllTodo, updateToDo, deleteToDo } from './utils/HandleApi';

function App() {
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState('')
  const [token, setToken] = useState(localStorage.getItem("token"))

  useEffect(() => {
    if (token) {
      getAllTodo(setToDo)
    }
  }, [token])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setToken(null)
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />} />
        <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
        
        <Route path="/" element={
          token ? (
            <div className="todo-container">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <h2 className="todo-title">My Tasks</h2>
                 <button className="btn-add" style={{backgroundColor: '#e74c3c', width: '80px'}} onClick={handleLogout}>Logout</button>
              </div>

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
                  deleteToDo={() => deleteToDo(item._id, setToDo)}
                />
              )}
            </div>
          ) : <Navigate to="/login" />
        } />
      </Routes>
    </Router>
  );
}

export default App;