import React from 'react'
import Button from '../Atoms/Button'

export default function TodoCard(props) {
    return (
        <div className="todo-card">
            <div className="actions">
                <Button
                    btnLabel={<><i className="fa fa-trash" aria-hidden="true"></i><span> Delete</span></>}
                    btnClass={"delete"}
                />
                <Button
                    btnLabel={<><i className="fa fa-pencil" aria-hidden="true"></i><span> Edit</span></>}
                    btnClass={"edit"}
                />
            </div>
            <p>This is new todo</p>
        </div>
    )
}