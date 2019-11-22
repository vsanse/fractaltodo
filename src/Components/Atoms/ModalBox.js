import React from 'react'

const ModalBox = (props)=>{
    return (
        <div className={props.className? `${props.className} modal`: "modal"}>
            {props.children}
        </div>
    )
}

export default ModalBox;