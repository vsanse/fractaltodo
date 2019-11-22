import React from 'react'
import Todos from '../Molecules/Todos';
import { useSelector, useDispatch } from "react-redux";
import { getClosestParent } from '../../tools/helper';
import { handleTodo } from '../../services/db';
import { SETCOMPLETEDTODO, SETPENDINGTODO, SETBUCKETS } from '../../store/common/types';

export default function ToDo(props) {

    const dispatch = useDispatch();

    const useBuckets = () => useSelector(state => state.common.buckets);
    const buckets = useBuckets();

    const usePendingTodo = () => useSelector(state => state.common.pendingTodo);
    const pendingTodo = usePendingTodo();

    const useCompletedTodo = () => useSelector(state => state.common.completedTodo);
    const completedTodo = useCompletedTodo();

    const handleActiveBucket = (event) => {
        if (event.target.classList.contains('fa-angle-down') ||
            event.target.classList.contains('todo-bucket-heading') ||
            event.target.classList.contains('todo-bucket-title')) {
            getClosestParent(event.target, ".card").classList.toggle("active")
        }
    }

    const handleComplete = (bucket, task) => {
        let newPendings = { ...pendingTodo };
        let newCompleted = { ...completedTodo };
        let newbuckets = [...buckets];
        let updatedBucket = pendingTodo[bucket].filter(function (value, index, arr) {
            return value !== task;
        });
        if (updatedBucket.length === 0) {
            delete newPendings[bucket];
            newbuckets=buckets.filter((value)=> value!==bucket)
        }
        else{
            newPendings[bucket] = updatedBucket;
        }
        newCompleted[bucket] = newCompleted[bucket] ? [...newCompleted[bucket], task] : [task];
        dispatch({ type: SETPENDINGTODO, pendingTodo: newPendings });
        dispatch({ type: SETCOMPLETEDTODO, completedTodo: newCompleted });
        dispatch({type: SETBUCKETS,buckets:newbuckets});
        handleTodo({
            buckets: newbuckets,
            completedtodo: newCompleted,
            pendingtodo: newPendings
        })
    }

    const handleIncomplete = (bucket, task) => {
        let newPendings = { ...pendingTodo };
        let newCompleted = { ...completedTodo };
        let newbuckets = [...buckets];
        let updatedBucket = completedTodo[bucket].filter(function (value, index, arr) {
            return value !== task;
        });
        if (updatedBucket.length === 0) {
            delete newCompleted[bucket]
            newbuckets=buckets.filter((value)=> value!==bucket)
        }
        else{
            newCompleted[bucket] = updatedBucket;
        }
        newPendings[bucket] = newPendings.hasOwnProperty(bucket) ? [...newPendings[bucket], task] : [task];
        dispatch({ type: SETPENDINGTODO, pendingTodo: newPendings });
        dispatch({ type: SETCOMPLETEDTODO, completedTodo: newCompleted });
        dispatch({type: SETBUCKETS,buckets:newbuckets});
        handleTodo({
            buckets: newbuckets,
            completedtodo: newCompleted,
            pendingtodo: newPendings
        })
    }

    const handleDelete = (bucket, task, type) => {
        let newbuckets = [...buckets];
        if (type === "completed") {
            let newCompleted = { ...completedTodo };
            let updatedBucket = completedTodo[bucket].filter(function (value, index, arr) {
                return value !== task;
            });
            if (updatedBucket.length === 0) {
                delete newCompleted[bucket];
                newbuckets=buckets.filter((value)=> value!==bucket);
            }
            else{
                newCompleted[bucket] = updatedBucket;
            }
            dispatch({ type: SETCOMPLETEDTODO, completedTodo: newCompleted });
            dispatch({type: SETBUCKETS,buckets:newbuckets});
            handleTodo({
                buckets: newbuckets,
                completedtodo: newCompleted,
                pendingtodo: pendingTodo
            })
        }
        else {
            let newPendings = { ...pendingTodo };
            let updatedBucket = pendingTodo[bucket].filter(function (value, index, arr) {
                return value !== task;
            });
            if (updatedBucket.length === 0) {
                delete newPendings[bucket];
                newbuckets=buckets.filter((value)=> value!==bucket);
            }
            else{
                newPendings[bucket] = updatedBucket;
            }
            dispatch({ type: SETPENDINGTODO, pendingTodo: newPendings });
            dispatch({type: SETBUCKETS,buckets:newbuckets});
            handleTodo({
                buckets: newbuckets,
                completedtodo: completedTodo,
                pendingtodo: newPendings
            })
        }
    }

    return (
        <Todos
            handleActiveBucket={handleActiveBucket}
            pendingTodo={pendingTodo}
            completedTodo={completedTodo}
            handleComplete={handleComplete}
            handleIncomplete={handleIncomplete}
            handleDelete={handleDelete}
        />
    )
}