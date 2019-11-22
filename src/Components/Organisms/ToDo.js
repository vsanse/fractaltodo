import React, { useRef } from 'react'
import Todos from '../Molecules/Todos'
import { getClosestParent } from '../../tools/helper';

export default function ToDo(props) {
    const cardRef = useRef();
    const handleActiveBucket = (event) => {
        if (event.target.classList.contains('fa') ||
            event.target.classList.contains('todo-bucket-heading')|| 
            event.target.classList.contains('todo-bucket-title')) {
            getClosestParent(event.target, ".card").classList.toggle("active")
        }

    }
    return (
        <Todos
            cardRef={cardRef}
            handleActiveBucket={handleActiveBucket}
        />
    )
}