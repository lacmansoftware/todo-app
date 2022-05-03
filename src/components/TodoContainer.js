import React from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

const TodoContainer = () => {
    return (
        <div className='todo-container'>
            <h2>Todo App 😄</h2>
            <TodoList />
            <TodoAdd />
        </div>
    )
}

export default TodoContainer;