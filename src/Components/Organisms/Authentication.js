import React from 'react'
import ModalBox from '../Atoms/ModalBox'
import Card from '../Atoms/Card'

export default function Authentication(props){

    return (
        <ModalBox>
            <Card>
                <button onClick={()=>props.setshowAuthForm(false)}></button>
            </Card>
        </ModalBox>
    )
} 