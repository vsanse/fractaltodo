import React from 'react'
import TodoContainer from '../Atoms/TodoContainer'
import TodoCard from './TodoCard'
import Card from '../Atoms/Card'

export default function Todos(props) {
    return (
        <div className="todo-wrapper">
            <TodoContainer className={"todo-pendings"}>
                <Card className="todo-bucket pendings 1"  handleClick={props.handleActiveBucket}>
                    <div className="todo-bucket-title">
                        <h2 className="todo-bucket-heading">Bucket1</h2>
                        <i className="fa fa-angle-down" aria-hidden="true" ></i>
                    </div>
                    <div className="todo-bucket-tasks">
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                    </div>
                </Card>
                <Card className="todo-bucket pendings 2" handleClick={props.handleActiveBucket}>
                    <div className="todo-bucket-title">
                        <h2 className="todo-bucket-heading">Bucket1</h2>
                        <i className="fa fa-angle-down" aria-hidden="true" ></i>
                    </div>
                    <div className="todo-bucket-tasks">
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                    </div>
                </Card>
            </TodoContainer>
            <TodoContainer className={"todo-completed"}>
            <Card className="todo-bucket pendings 1"  handleClick={props.handleActiveBucket}>
                    <div className="todo-bucket-title">
                        <h2 className="todo-bucket-heading">Bucket1</h2>
                        <i className="fa fa-angle-down" aria-hidden="true" ></i>
                    </div>
                    <div className="todo-bucket-tasks">
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                    </div>
                </Card>
                <Card className="todo-bucket pendings 2" handleClick={props.handleActiveBucket}>
                    <div className="todo-bucket-title">
                        <h2 className="todo-bucket-heading">Bucket1</h2>
                        <i className="fa fa-angle-down" aria-hidden="true" ></i>
                    </div>
                    <div className="todo-bucket-tasks">
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                    </div>
                </Card>
            </TodoContainer>
        </div>
    )
}