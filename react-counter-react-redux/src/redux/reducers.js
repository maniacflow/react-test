// 包含所有 reducer 函数的模块
import {INCREMENT, DECREMENT} from './action-types';

export function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + action.data;
            break;
        case DECREMENT:
            return state - action.data;
            break;
        default:
            return state;
    }
}