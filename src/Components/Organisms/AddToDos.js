import React, { useState } from 'react'
import AddToDo from "../Molecules/AddToDo";

export default function AddToDos(props) {
    const [buckets, setbuckets] = useState(["bucket1", "bucket2"]);
    const [newTodo, setnewTodo] = useState("");
    const [newBucket, setnewBucket] = useState("");

    const handleChange = (event) => {
        if (event.target.name === "todo") {
            setnewTodo(event.target.value)
        }
        else {
            setnewBucket(event.target.value.trim())
        }
    }

    const handleAddTodo = (event) => {
        let data={}
        if (!buckets.includes(newBucket)) {
            setbuckets([...buckets,newBucket]);
            data.buckets=[...buckets, newBucket]
        }
        data.todo={
            newBucket:[newTodo]
        }
        console.log(data)
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