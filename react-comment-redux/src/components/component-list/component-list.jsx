import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ComponentItem from '../component-item/component-item';

import './component-list.css';

export default class ComponentList extends Component {
    // 给组件类指定属性
    static propTypes = {
        comments: PropTypes.array.isRequired,
        delComment: PropTypes.func.isRequired
    };
    
    render() {
        const {comments, delComment} = this.props;
        const display = comments.length == 0 ? 'block' : 'none';
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment, index) => <ComponentItem comment={comment} key={index} delComment={delComment} index={index} />)
                    }
                </ul>
            </div>
        )
    }
}

/*
ComponentList.propTypes = {
    comments: PropTypes.array.isRequired
};
*/