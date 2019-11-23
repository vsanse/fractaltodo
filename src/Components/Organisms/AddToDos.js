import React, { useState } from 'react';
import AddToDo from "../Molecules/AddToDo";
import { handleTodo } from '../../services/db';

export default function AddToDos(props) {
    const [newTodo, setnewTodo] = useState("");
    const [newBucket, setnewBucket] = useState("");
    const handleChange = (event) => {
        if (event.target.name === "todo") {
            setnewTodo(event.target.value)
        }
        else {
            var clean = event.target.value.replace(/\s\s+|\./g, " ")
            setnewBucket(clean);
        }
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        event.stopPropagation();
        let data={
            buckets: props.todos.buckets,
            completedtodo: props.todos.completedTodo
        }
        if (!props.todos.buckets.includes(newBucket)) {
            data.buckets=[...props.todos.buckets, newBucket]
        }
        data.pendingtodo={
            ...props.todos.pendingTodo,
            [newBucket]:props.todos.pendingTodo[newBucket]?[...props.todos.pendingTodo[newBucket],newTodo]:[newTodo]
        }
        props.settodos({
            ...props.todos,
            buckets:data.buckets,
            pendingTodo: {
                ...props.todos.pendingTodo,
            [newBucket]:props.todos.pendingTodo[newBucket]?[...props.todos.pendingTodo[newBucket],newTodo]:[newTodo]
            }
        })
        handleTodo(data)
        setnewBucket("");
        setnewTodo("");
    }

    return (
        <AddToDo
            buckets={props.todos.buckets}
            newTodo={newTodo}
            newBucket={newBucket}
            handleChange={handleChange}
            handleAddTodo={handleAddTodo}
        />
    )
}
