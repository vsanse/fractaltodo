import React from 'react'
import Button from '../Atoms/Button'

export default function TodoCard(props) {
    return (
        <div className="todo-card">
            <div className="actions">
                <Button
                    btnLabel={<><i className="fa fa-trash" aria-hidden="true"></i></>}
                    btnClass={"delete"}
                    btnTitle="Delete"
                    handleClick={props.handleDelete}
                    args={[props.bucket,props.todo,props.type]}
                />
                <Button
                    btnLabel={<><i className="fa fa-pencil" aria-hidden="true"></i></>}
                    btnClass={"edit"}
                    btnTitle="Edit"
                    
                />
                <Button
                    btnLabel={<>{props.iscomplete?<i className="fa fa-exclamation" aria-hidden="true"></i>:<i className="fa fa-check-circle" aria-hidden="true"></i>}</>}
                    btnClass={props.iscomplete?"incomplete":"complete"}
                    btnTitle="Mark Incomplete"
                    handleClick={props.iscomplete?props.handleIncomplete:props.handleComplete}
                    args={[props.bucket,props.todo]}
                />
            </div>
            <p>{props.todo}</p>
        </div>
    )
}