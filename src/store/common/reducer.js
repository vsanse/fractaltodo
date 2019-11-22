import initialState from "../initialState";
import * as types from "./types";
export default function commonReducer(state = initialState.common, action) {
    switch (action.type) {
        case types.TOGGLELOADER:
            return {
                ...state,
                showLoader: !state.showLoader
            };
        case types.SETCOMPLETEDTODO:
            return {
                ...state,
                completedTodo: action.completedTodo
            }
        case types.SETPENDINGTODO:
            return {
                ...state,
                pendingTodo: action.pendingTodo
            }
        default:
            return state;
    }
}
