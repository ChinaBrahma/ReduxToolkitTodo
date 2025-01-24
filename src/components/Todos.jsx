import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from "../features/todo/todoSlice"

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center bg-white p-4 shadow-md rounded-md">
                        <span className="text-gray-700 p-1 m-0">{todo.text}</span>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default Todos