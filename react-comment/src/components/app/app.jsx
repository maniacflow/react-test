import React, {Component} from 'react';

import ComponentAdd from '../component-add/component-add';
import ComponentList from '../component-list/component-list';

export default class App extends Component {
    state = {
        comments: [],
    }
    
    componentDidMount() {
        // 模拟异步 ajax 请求
        const comments = [
            {username: 'Tom', content: 'React 不错！'},
            {username: 'Jack', content: 'React 太难了！'}
        ];
        setTimeout(() => {
            this.setState({comments});
        }, 1000);
    }
    
    addComment = (comment) => {
        const {comments} = this.state;
        comments.unshift(comment);
        this.setState({comments});
    }
    
    delComment = (index) => {
        const {comments} = this.state;
        comments.splice(index, 1);
        this.setState({comments});
    }
    
    render() {
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对 React 的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <ComponentAdd addComment={this.addComment} />
                    <ComponentList comments={this.state.comments} delComment={this.delComment} />
                </div>
            </div>
        );
    }
}