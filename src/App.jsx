import { useState, useEffect } from "react"
import ToDoCard from "./components/ToDoCard"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {


  const [todos, setTodos] = useState([])
  const [todoValue, settodoValue] = useState('')

  function persistData(newlist) {
    localStorage.setItem('todos', JSON.stringify({ todos: newlist }))
  }
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const editedValue = todos[index]
    settodoValue(editedValue)
    handleDeleteTodo(index)
  }


  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todos, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <ToDoInput handleAddTodos={handleAddTodos} todoValue={todoValue} settodoValue={settodoValue} />
      <ToDoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos} />
    </>
  )
}

export default App
