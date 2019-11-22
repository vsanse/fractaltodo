import React, {useState} from 'react'
import AddToDo from "../Molecules/AddToDo";

export default function AddToDos(props){
    const [buckets, setbuckets] = useState(["bucket1","bucket2"]);
    return(
        <AddToDo
         buckets={buckets}
        />
    )
}