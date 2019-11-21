import React from 'react'
import Card from '../Atoms/Card'
import Button from '../Atoms/Button'

export default function TodoCard(props) {
    return (
        <Card className={"todo-card"}>
            <div className="actions-container">
                <h2>This is new todo</h2>
                <div className="actions">
                    <Button
                        btnLabel={<><i class="fa fa-trash" aria-hidden="true"></i><span> Delete</span></>}
                        btnClass={"delete"}
                    />
                    <Button
                        btnLabel={<><i class="fa fa-pencil" aria-hidden="true"></i><span> Edit</span></>}
                        btnClass={"edit"}
                    />
                </div>
            </div>
        </Card>
    )
}