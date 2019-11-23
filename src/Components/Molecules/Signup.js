import React from 'react'
import Card from '../Atoms/Card'
import Input from '../Atoms/Input'
import Button from '../Atoms/Button'

export default function Signup(props) {
    return (
        <Card className="auth-form-wrapper" >
            <div className="close-modal">
                <p onClick={props.closeModal}><i className="fa fa-times-circle-o" aria-hidden="true"></i></p>
            </div>
            <form className="auth-form" onSubmit={props.handleSignUp}>
                <label>
                    Email:
                    <Input
                        inputClass="auth-form-email"
                        autoFocus={true}
                        inputPlaceholder="Enter email"
                        handleChange={props.handleChange}
                        inputName="email"
                        inputValue={props.email}
                        inputTitle="Enter your email"
                        inputType="email"
                        inputRequired={true}
                    />
                </label>
                <label>
                    Password:
                    <Input
                        inputClass="auth-form-passwd"
                        autoFocus={false}
                        inputPlaceholder="Choose password"
                        handleChange={props.handleChange}
                        inputName="password"
                        inputValue={props.password}
                        inputTitle="Choose your password"
                        inputType="password"
                        inputRequired={true}
                    />
                </label>
                <Button
                    btnLabel={"Signup"}
                    btnClass="primary-bg auth-form-btn"
                    btnType="submit"
                />
                {
                    props.error.status &&
                    <p className="error-span">{props.error.msg}</p>
                }
                <div className="auth-form-bottom">
                    <p><strong>Already a user? </strong></p><
                        a href="javascript:void(0)" onClick={() => { props.handleActiveForm("signin") }}>SignIn</a>
                </div>
            </form>
        </Card >
    )
}