import React from 'react'
import TodoContainer from '../Atoms/TodoContainer'
import TodoCard from './TodoCard'
import Card from '../Atoms/Card'

export default function Todos(props) {
    return (
        <div className="todo-wrapper">
            <TodoContainer className={"todo-pendings"}>
                <h2 className="todo-wrapper-title">Pending</h2>
                {
                    props.pendingTodo && Object.keys(props.pendingTodo).length > 0?
                    Object.keys(props.pendingTodo).map((bucket,idx)=>{
                        return (
                            <Card key={idx} className="todo-bucket pendings"  handleClick={props.handleActiveBucket}>
                                <div className="todo-bucket-title">
                                <h2 className="todo-bucket-heading">{bucket}</h2>
                                    <i className="fa fa-angle-down" aria-hidden="true" ></i>
                                </div>
                                <div className="todo-bucket-tasks">
                                    {
                                        props.pendingTodo[bucket].map((todo,idx)=>{
                                            return <TodoCard 
                                                key={idx}
                                                bucket={bucket}
                                                todo={todo}
                                                handleComplete={props.handleComplete}
                                                handleDelete={props.handleDelete}
                                                handleShowEdit={props.handleShowEdit}
                                                type="pending"
                                                idx={idx}
                                            />
                                        })
                                    }
                                </div>
                            </Card>
                        )
                    }):
                    <div className="todo-wrapper-notodo">
                        <h3>No Todos Yet...</h3>
                    </div>
                }
            </TodoContainer>
            <TodoContainer className={"todo-completed"}>
                <h2 className="todo-wrapper-title">Completed</h2>
                {
                    props.completedTodo && Object.keys(props.completedTodo).length>0?
                    Object.keys(props.completedTodo).map((bucket,idx)=>{
                        return (
                            <Card key={idx} className="todo-bucket pendings"  handleClick={props.handleActiveBucket}>
                                <div className="todo-bucket-title">
                                <h2 className="todo-bucket-heading">{bucket}</h2>
                                    <i className="fa fa-angle-down" aria-hidden="true" ></i>
                                </div>
                                <div className="todo-bucket-tasks">
                                    {
                                        props.completedTodo[bucket].map((todo,idx)=>{
                                            return <TodoCard 
                                                key={idx}
                                                todo={todo}
                                                bucket={bucket}
                                                iscomplete={true}
                                                handleIncomplete={props.handleIncomplete}
                                                handleDelete={props.handleDelete}
                                                handleShowEdit={props.handleShowEdit}
                                                type="completed"
                                                idx={idx}
                                            />
                                        })
                                    }
                                </div>
                            </Card>
                        )
                    }):
                    <div className="todo-wrapper-notodo">
                        <h3>No Todos Yet...</h3>
                    </div>
                }
            </TodoContainer>
        </div>
    )
}