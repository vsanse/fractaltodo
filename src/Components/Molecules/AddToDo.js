import React from 'react'
import Card from '../Atoms/Card'
import Input from '../Atoms/Input'
import Button from '../Atoms/Button'

export default function AddToDo(props){
    return(
        <Card>
            <Input
                inputClass="input-todo"
                autoFocus= {false}
            />
            <Button
                btnLabel={"ADD"}
                btnClass="primary-bg"
            />
        </Card>
    )
}