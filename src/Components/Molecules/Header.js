import React from 'react'
import Button from '../Atoms/Button'

export default function Header(props) {
    return (
        <header className="App-header">
            <div className="logo primary"> FractalTODO</div>
            <div className="signup">
                <Button
                    btnLabel={"signin"}
                    btnClass={"primary-bg"}
                    handleClick={props.setshowAuthForm}
                    args={[true]}
                />
            </div>
        </header>
    )
}