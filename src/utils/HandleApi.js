import axios from 'axios'


const baseUrl = "https://todo-app-backend-project-8ah8.onrender.com"

const getHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        headers: {Authorization: `Bearer ${token}`}
    }
}
const loginUser = (email, password, setToken, navigate) => {
    axios.post(`${baseUrl}/login`, {email, password})
    .then(({data}) => {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        navigate("/")
    })
    .catch((err) => alert(err.response?.data?.message || "Login Failed"));
}
const registerUser = (username, email, password, navigate) => {
    axios.post(`${baseUrl}/register`, {username, email, password})
    .then(() => {
        alert("Registration Successful! Please Login");
        navigate("/login")
    })
    .catch((err) => alert(err.response?.data?.message || "Registration Failed"))
}

const getAllTodo = (setToDo) => {
    axios.get(baseUrl, getHeaders()).then(({data}) => {
        console.log('data ---->', data)
        setToDo(data)
    })
    .catch((err) => console.log(err))
}

const addToDo = (text, setText, setToDo) => {

    axios.post(`${baseUrl}/save`, {text}, getHeaders())
    .then((data) => {
        setText("")
        getAllTodo(setToDo)

    }).catch((err) => console.log(err))
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    
    axios.put(`${baseUrl}/update`, {_id: toDoId, text}, getHeaders())
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllTodo(setToDo)
    })
    .catch((err) =>console.log(err))
}

const deleteToDo = (_id, setToDo) => {

    axios.delete(`${baseUrl}/delete`,{data: {_id}, ...getHeaders()})
    .then((data) => {
        getAllTodo(setToDo)

    }).catch((err) => console.log(err))
}


export {getAllTodo, addToDo, updateToDo, deleteToDo, loginUser, registerUser}