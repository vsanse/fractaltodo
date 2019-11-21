import React from 'react'
import TodoContainer from '../Atoms/TodoContainer'
import TodoCard from './TodoCard'

export default function Todos(props){
    return (
        <div className="todo-wrapper">
            <TodoContainer className={"todo-pendings"}>
                <TodoCard/>
                <TodoCard/>
                <TodoCard/>
                <TodoCard/>
                <TodoCard/>
                <TodoCard/>
            </TodoContainer>
            <TodoContainer className={"todo-completed"}>
                <TodoCard/>
            </TodoContainer>
        </div>
    )
}