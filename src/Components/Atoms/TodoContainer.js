import React from 'react'

export default function TodoContainer(props){
    return (
        <div className={props.className? `${props.className} container`: "container"}>
            {props.children}
        </div>
    )
}