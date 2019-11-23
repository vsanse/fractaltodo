import React from 'react'
import Card from '../Atoms/Card'
import Input from '../Atoms/Input'
import Button from '../Atoms/Button'
import DropdownDatalist from '../Atoms/DropdownDatalist'

export default function AddToDo(props){
    return(
        <Card className="addTodo">
            <Input
                inputClass="input-todo"
                autoFocus= {false}
                inputPlaceholder="Add Todo"
                handleChange={props.handleChange}
                inputName="todo"
                inputValue={props.newTodo}
                inputTitle="Add new todo"
            />
            <DropdownDatalist
                options={props.buckets}
                inputPlaceholder="Add to bucket"
                handleChange={props.handleChange}
                inputName="bucket"
                inputValue={props.newBucket}
                inputTitle="Choose or add bucket"
            />
            <Button
                btnLabel={"ADD"}
                btnClass="primary-bg"
                handleClick={props.handleAddTodo}
            />
        </Card>
    )
}