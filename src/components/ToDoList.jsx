import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) {

  const {todos} = props

  return (
    <ul className='main'>
      {todos.map((todo, todosIndex) => {
        return (
          <ToDoCard {...props} key={todosIndex} index = {todosIndex}>
            <p>{todo}</p>
          </ToDoCard>

        )
      })}
    </ul>
  )
}
