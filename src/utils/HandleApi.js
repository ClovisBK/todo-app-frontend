import axios from 'axios'


const baseUrl = "https://todo-app-backend-project-8ah8.onrender.com"

const getAllTodo = (setToDo) => {
    axios.get(baseUrl).then(({data}) => {
        console.log('data ---->', data)
        setToDo(data)
    })
}
const addToDo = (text, setText, setToDo) => {

    axios.post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data)
        setText("")
        getAllTodo(setToDo)

    }).catch((err) => console.log(err))
}
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    
    axios.put(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data) => {
        console.log(data)
        setText("")
        setIsUpdating(false)
        getAllTodo(setToDo)
    })
    .catch((err) =>console.log(err))
}

const deleteToDo = (_id, setToDo) => {

    axios.delete(`${baseUrl}/delete`,{data: {_id}})
    .then((data) => {
        console.log(data)
        getAllTodo(setToDo)

    }).catch((err) => console.log(err))
}


export {getAllTodo, addToDo, updateToDo, deleteToDo}