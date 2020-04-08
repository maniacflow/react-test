/*
包含 n 个 reducer 函数（根据老的 state 和 action 返回一个新的 state）
 */
import {ADD_COMMENT, DEL_COMMENT, RECEIVE_COMMENTS} from './action-types';
const initComments = []
export function comments(state = initComments, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state]
            break;
        case DEL_COMMENT:
            return state.filter((comment, index) => index != action.data);
            break;
        case RECEIVE_COMMENTS:
            return action.data;
            break;
        default:
            return state;
    }
}