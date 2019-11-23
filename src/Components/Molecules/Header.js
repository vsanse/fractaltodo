import React from 'react'
import Button from '../Atoms/Button'

export default function Header(props) {
    return (
        <header className="App-header">
            <div className="logo primary"><strong>FractalTodo</strong></div>
            <div className="signup">
                {
                    props.isLoggedIn?
                    <Button
                        btnLabel={"logout"}
                        btnClass={"logout"}
                        handleClick={props.handleLogout}
                    />:
                    <Button
                        btnLabel={"signin"}
                        btnClass={"primary-bg"}
                        handleClick={props.setshowAuthForm}
                        args={[true]}
                    />
                }
            </div>
        </header>
    )
}
