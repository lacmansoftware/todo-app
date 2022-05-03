import React from 'react'
import { useDispatch } from 'react-redux';
import { completeTodo } from '../redux/reducers/todo/actions'
import '../assets/todo.css'

const Todo = (props) => {
    console.log(props.todo)
    const { id, title, completed } = props.todo;
    const dispatch = useDispatch();

    return (
        <li>
            <span className={completed ? 'todo-completed' : ''}>
                {title}
            </span>
            <input type='checkbox'
                value={completed}
                onClick={() => dispatch(completeTodo(id))}/>
        </li>
    )
}

export default Todo;