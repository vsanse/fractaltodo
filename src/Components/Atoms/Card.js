import React from 'react'

const Card = (props)=>{
    return (
        <div className={props.className? `${props.className} card`: "card"}
            onClick={(event)=>props.handleClick?props.handleClick(event):null}
        >
            {props.children}
        </div>
    )
}

export default Card;