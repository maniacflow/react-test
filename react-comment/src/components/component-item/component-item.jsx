import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './component-item.css';

export default class ComponentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        delComment: PropTypes.func.isRequired
    }
    
    handleDel = () => {
        const {comment, index, delComment} = this.props;
        if (window.confirm(`您确定要删除 ${comment.username} 的留言吗？`)) {
            delComment(index);
        }
    }
    
    render() {
        const {comment} = this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="#!" onClick={this.handleDel}>删除</a>
                </div>
                <p className="user"><span>{comment.username}</span> <span>说：</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}