import React from 'react'
import Card from '../Atoms/Card'
import Input from '../Atoms/Input'
import Button from '../Atoms/Button'
import Dropdown_Datalist from '../Atoms/DropdownDatalist'

export default function AddToDo(props){
    return(
        <Card className="addTodo">
            <Input
                inputClass="input-todo"
                autoFocus= {false}
            />
            <Dropdown_Datalist
                options={props.buckets}
            />
            <Button
                btnLabel={"ADD"}
                btnClass="primary-bg"
            />
        </Card>
    )
}