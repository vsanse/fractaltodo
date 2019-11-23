import React from 'react'
import Card from '../Atoms/Card'
import Input from '../Atoms/Input'
import Button from '../Atoms/Button'
import DropdownDatalist from '../Atoms/DropdownDatalist'

export default function AddToDo(props){
    return(
        <Card className="addTodo">
            <form className="addTdo-form" onSubmit={props.handleAddTodo}>
            <Input
                inputClass="input-todo"
                autoFocus= {false}
                inputRequired= {true}
                inputPlaceholder="Add Todo"
                handleChange={props.handleChange}
                inputName="todo"
                inputValue={props.newTodo}
                inputTitle="Add new todo"
            />
            <DropdownDatalist
                options={props.buckets}
                inputPlaceholder="Add/Choose bucket"
                handleChange={props.handleChange}
                inputName="bucket"
                inputRequired= {true}
                inputValue={props.newBucket}
                inputTitle="Choose or add bucket"
            />
            <Button
                btnLabel={"ADD"}
                btnClass="primary-bg"
                btnType="submit"
            />
            </form>
        </Card>
    )
}
