import React from 'react'
import ModalBox from "../Atoms/ModalBox";
import Card from '../Atoms/Card';
import Input from '../Atoms/Input'
import Button from '../Atoms/Button'

export default function EditTodo(props) {
    return (
        <ModalBox>
            <Card className="edit-todo-wrapper">
                <div className="close-modal">
                    <p onClick={props.closeModal}><i class="fa fa-times-circle-o" aria-hidden="true"></i></p>
                </div>
                <form onSubmit={(event) => props.handleSubmit(event,props.bucket, props.task, props.type, props.idx)}>
                    <Input
                        inputClass="edit-todo-input"
                        autoFocus={true}
                        inputPlaceholder="Edit todo"
                        handleChange={props.handleChange}
                        inputName="edit"
                        inputValue={props.task}
                        inputTitle="Edit todo"
                        inputType="text"
                        inputRequired={true}
                    />
                    <Button
                        btnLabel={"Save"}
                        btnClass="primary-bg edit-todo-btn"
                        btnType="submit"
                    />
                </form>
            </Card>
        </ModalBox>
    )
}