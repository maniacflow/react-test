/*
包含了所有的 action creator（action 的工厂函数）
 */
import {ADD_COMMENT, DEL_COMMENT, RECEIVE_COMMENTS} from './action-types';
// 添加
export const addComment = (comment) => ({type: ADD_COMMENT, data: comment});
// 删除
export const delComment = (index) => ({type: DEL_COMMENT, data: index});
// 同步接收 comments
const receiveComments = (comments) => ({type: RECEIVE_COMMENTS, data: comments});
// 异步获取数据
export const getComments = () => {
    return dispatch => {
        // 模拟发送 ajax 请求异步获取数据
        setTimeout(() => {
            const comments = [
                {username: 'Tom', content: 'React 不错！'},
                {username: 'Jack', content: 'React 太难了！'}
            ];
            // 分发一个同步的 action
            dispatch(receiveComments(comments));
        }, 1000);
    }
}