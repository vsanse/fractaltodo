import React from 'react'
import Todos from '../Molecules/Todos';
import { getClosestParent } from '../../tools/helper';
import { handleTodo } from '../../services/db';

export default function ToDo(props) {

    const handleActiveBucket = (event) => {
        if (event.target.classList.contains('fa-angle-down') ||
            event.target.classList.contains('todo-bucket-heading') ||
            event.target.classList.contains('todo-bucket-title')) {
            getClosestParent(event.target, ".card").classList.toggle("active")
        }
    }

    const handleComplete = (bucket, task) => {
        let newTodos = { ...props.todos};
        let updatedBucket = props.todos.pendingTodo[bucket].filter(function (value, index, arr) {
            return value !== task;
        });
        if (updatedBucket.length === 0) {
            delete newTodos.pendingTodo[bucket];
            newTodos.buckets=props.todos.buckets.filter((value)=> value!==bucket)
        }
        else{
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
        let newTodos = { ...props.todos};
        let updatedBucket = props.todos.completedTodo[bucket].filter(function (value, index, arr) {
            return value !== task;
        });
        if (updatedBucket.length === 0) {
            delete newTodos.completedTodo[bucket]
            newTodos.buckets=props.todos.buckets.filter((value)=> value!==bucket)
        }
        else{
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
        let newTodos = { ...props.todos};
        if (type === "completed") {
            let updatedBucket = props.todos.completedTodo[bucket].filter(function (value, index, arr) {
                return value !== task;
            });
            if (updatedBucket.length === 0) {
                delete newTodos.completedTodo[bucket]
                newTodos.buckets=props.todos.buckets.filter((value)=> value!==bucket)
            }
            else{
                newTodos.completedTodo[bucket] = updatedBucket;
            }
        }
        else {
            let updatedBucket = props.todos.pendingTodo[bucket].filter(function (value, index, arr) {
                return value !== task;
            });
            if (updatedBucket.length === 0) {
                delete newTodos.pendingTodo[bucket];
                newTodos.buckets=props.todos.buckets.filter((value)=> value!==bucket)
            }
            else{
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

    return (
        <Todos
            handleActiveBucket={handleActiveBucket}
            pendingTodo={props.todos.pendingTodo}
            completedTodo={props.todos.completedTodo}
            handleComplete={handleComplete}
            handleIncomplete={handleIncomplete}
            handleDelete={handleDelete}
        />
    )
}