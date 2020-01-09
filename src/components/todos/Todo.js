import React from 'react'

const Todo = props => {
    const handleOnClick = () => {
        props.delete(props.id)
    }

    return(
        <div className="todo-item">
            <span>{props.text}</span><button onClick={handleOnClick}>DELETE</button>
        </div>
    )
}

export default Todo;
