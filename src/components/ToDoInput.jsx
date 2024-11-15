import { useState } from "react"

export default function ToDoInput(props) {
    const { handleAddTodos, todoValue, settodoValue } = props

    return (
        <header>
            <input value={todoValue} onChange={(e) => { settodoValue(e.target.value) }} placeholder="Enter Todo ..." />
            <button onClick={() => {
                handleAddTodos(todoValue)
                settodoValue('')
            }}>Add</button>
        </header>
    )
}