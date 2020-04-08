// 包含所有的 action creator
import {INCREMENT, DECREMENT} from './action-types';
// 增加
export const increment = (number) => ({type: INCREMENT, data: number});
// 减少
export const decrement = (number) => ({type: DECREMENT, data: number});
// 异步增加
export const incrementAsync = (number) => {
    return dispatch => {
        setTimeout(() => {
            // 1s 之后才去分发一个增加的 action
            dispatch(increment(number));
        }, 1000);
    }
}