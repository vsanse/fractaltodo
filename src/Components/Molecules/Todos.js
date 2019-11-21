import React from 'react'
import TodoContainer from '../Atoms/TodoContainer'

export default function Todos(props){
    return (
        <div className="todo-wrapper">
            <TodoContainer className={"todo-pendings"}>
            </TodoContainer>
            <TodoContainer className={"todo-completed"}>
            </TodoContainer>
        </div>
    )
}