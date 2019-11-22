import * as types from "./types";
export function toggleLoader() {
    return { type: types.TOGGLELOADER };
}
export function setCompletedTodo(completedTodo) {
    return { type: types.SETCOMPLETEDTODO, completedTodo }
}
export function setPendingTodo(pendingTodo) {
    return { type: types.SETPENDINGTODO, pendingTodo }
}
export function setBuckets(buckets) {
    return { type: types.SETBUCKETS, buckets }
}
export function addNewBucket(bucket) {
    return { type: types.ADDNEWBUCKET, bucket }
}