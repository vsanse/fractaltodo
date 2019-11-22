import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import AddToDo from "../Molecules/AddToDo";
import { handleTodo } from '../../services/db';
import { SETBUCKETS, SETPENDINGTODO } from '../../store/common/types';

export default function AddToDos(props) {
    const dispatch = useDispatch();
    const [newTodo, setnewTodo] = useState("");
    const [newBucket, setnewBucket] = useState("");

    const useBuckets = () => useSelector(state => state.common.buckets);
    const buckets = useBuckets();

    const usePendingTodo = ()=> useSelector(state => state.common.pendingTodo);
    const pendingTodo = usePendingTodo();

    const useCompletedTodo = () => useSelector(state => state.common.completedTodo);
    const completedTodo = useCompletedTodo();

    const handleChange = (event) => {
        if (event.target.name === "todo") {
            setnewTodo(event.target.value)
        }
        else {
            setnewBucket(event.target.value.trim())
        }
    }

    const handleAddTodo = (event) => {
        let data={
            buckets: buckets,
            completedtodo: completedTodo
        }
        if (!buckets.includes(newBucket)) {
            console.log(buckets,newBucket)
            dispatch({type: SETBUCKETS,buckets:[...buckets,newBucket]});
            data.buckets=[...buckets, newBucket]
        }
        data.pendingtodo={
            ...pendingTodo,
            [newBucket]:pendingTodo[newBucket]?[...pendingTodo[newBucket],newTodo]:[newTodo]
        }
        dispatch({type: SETPENDINGTODO,pendingTodo:{
            ...pendingTodo,
            [newBucket]:pendingTodo[newBucket]?[...pendingTodo[newBucket],newTodo]:[newTodo]
        }});
        handleTodo(data)
        setnewBucket("");
        setnewTodo("");
    }

    return (
        <AddToDo
            buckets={buckets}
            newTodo={newTodo}
            newBucket={newBucket}
            handleChange={handleChange}
            handleAddTodo={handleAddTodo}
        />
    )
}