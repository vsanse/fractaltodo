import React, { useState } from 'react'
import Todos from '../Molecules/Todos';
import { notify } from 'react-notify-toast';
import { getClosestParent } from '../../tools/helper';
import { handleTodo } from '../../services/db';
import EditTodo from '../Molecules/EditTodo';

export default function ToDo(props) {

    const [showEdit, setshowEdit] = useState({
        status: false,
        type: "",
        task: "",
        bucket: "",
        idx:-1
    });

    const handleShowEdit = (bucket, task, type, idx) => {
        console.log("here")
        setshowEdit({
            status: true,
            bucket: bucket,
            task: task,
            type: type,
            idx:idx
        })
    }

    const closeModal = () => {
        setshowEdit({
            status: false,
            type: "",
            task: "",
            bucket: "",
            idx:-1
        })
    }

    const handleChange = (event) => {
        setshowEdit({
            ...showEdit,
            task: event.target.value
        })
    }

    const handleActiveBucket = (event) => {
        if (event.target.classList.contains('fa-angle-down') ||
            event.target.classList.contains('todo-bucket-heading') ||
            event.target.classList.contains('todo-bucket-title')) {
            getClosestParent(event.target, ".card").classList.toggle("active")
        }
    }

    const handleComplete = (bucket, task) => {
        let newTodos = { ...props.todos };
        let updatedBucket = props.todos.pendingTodo[bucket].filter(function (value, index, arr) {
            return value !== task;
        });
        if (updatedBucket.length === 0) {
            delete newTodos.pendingTodo[bucket];
            newTodos.buckets = props.todos.buckets.filter((value) => value !== bucket)
        }
        else {
            newTodos.pendingTodo[bucket] = updatedBucket;
        }

        newTodos.completedTodo[bucket] = newTodos.completedTodo[bucket] ? [...newTodos.completedTodo[bucket], task] : [task];
        props.settodos(newTodos);
        handleTodo({
            buckets: newTodos.buckets,
            completedtodo: newTodos.completedTodo,
            pendingtodo: newTodos.pendingTodo
        })
    }

    const handleIncomplete = (bucket, task) => {
        let newTodos = { ...props.todos };
        let updatedBucket = props.todos.completedTodo[bucket].filter(function (value, index, arr) {
            return value !== task;
        });
        if (updatedBucket.length === 0) {
            delete newTodos.completedTodo[bucket]
            newTodos.buckets = props.todos.buckets.filter((value) => value !== bucket)
        }
        else {
            newTodos.completedTodo[bucket] = updatedBucket;
        }
        newTodos.pendingTodo[bucket] = newTodos.pendingTodo[bucket] ? [...newTodos.pendingTodo[bucket], task] : [task];
        props.settodos(newTodos);
        handleTodo({
            buckets: newTodos.buckets,
            completedtodo: newTodos.completedTodo,
            pendingtodo: newTodos.pendingTodo
        })
    }

    const handleDelete = (bucket, task, type) => {
        let newTodos = { ...props.todos };
        if (type === "completed") {
            let updatedBucket = props.todos.completedTodo[bucket].filter(function (value, index, arr) {
                return value !== task;
            });
            if (updatedBucket.length === 0) {
                delete newTodos.completedTodo[bucket]
                newTodos.buckets = props.todos.buckets.filter((value) => value !== bucket)
            }
            else {
                newTodos.completedTodo[bucket] = updatedBucket;
            }
        }
        else {
            let updatedBucket = props.todos.pendingTodo[bucket].filter(function (value, index, arr) {
                return value !== task;
            });
            if (updatedBucket.length === 0) {
                delete newTodos.pendingTodo[bucket];
                newTodos.buckets = props.todos.buckets.filter((value) => value !== bucket)
            }
            else {
                newTodos.pendingTodo[bucket] = updatedBucket;
            }
        }
        props.settodos(newTodos);
        handleTodo({
            buckets: newTodos.buckets,
            completedtodo: newTodos.completedTodo,
            pendingtodo: newTodos.pendingTodo
        })
    }

    const handleEdit = (event,bucket, task, type,idx) => {
        event.preventDefault();
        event.stopPropagation();
        let newTodos = { ...props.todos };
        if (type === "completed") {
            newTodos.completedTodo[bucket][idx]=task;
        }
        else {
            newTodos.pendingTodo[bucket][idx]=task;
        }
        props.settodos(newTodos);
        handleTodo({
            buckets: newTodos.buckets,
            completedtodo: newTodos.completedTodo,
            pendingtodo: newTodos.pendingTodo
        })
        notify.show('Task Edited successfully', 'success', 2000);
        closeModal();
    }

    const handleActiveView=(type)=>{
        if(type==="completed"){
            document.querySelector(".pendings-btn").classList.remove("active");
            document.querySelector(".completed-btn").classList.add("active");
            document.querySelector(".todo-pendings").classList.remove("active");
            document.querySelector(".todo-completed").classList.add("active");
        }
        else{
            document.querySelector(".pendings-btn").classList.add("active");
            document.querySelector(".completed-btn").classList.remove("active");
            document.querySelector(".todo-pendings").classList.add("active");
            document.querySelector(".todo-completed").classList.remove("active");
        }
    }

    return (
        <>
            <Todos
                handleActiveBucket={handleActiveBucket}
                pendingTodo={props.todos.pendingTodo}
                completedTodo={props.todos.completedTodo}
                handleComplete={handleComplete}
                handleIncomplete={handleIncomplete}
                handleDelete={handleDelete}
                handleShowEdit={handleShowEdit}
                handleActiveView={handleActiveView}
            />
            {
                showEdit.status &&
                <EditTodo
                    bucket={showEdit.bucket}
                    task={showEdit.task}
                    type={showEdit.type}
                    handleChange={handleChange}
                    closeModal={closeModal}
                    handleSubmit={handleEdit}
                    idx={showEdit.idx}
                />

            }

        </>
    )
}