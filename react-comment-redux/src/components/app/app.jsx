import React, {Component} from 'react';
import ComponentAdd from '../component-add/component-add';
import ComponentList from '../component-list/component-list';

export default class App extends Component {
    // 给组件对象指定 state 属性
    state = {
        comments: []
    };
    
    componentDidMount() {
        // 模拟发送异步请求，获取数据
        setTimeout(() => {
            const comments = [
                {username: 'Tom', content: 'React 不错！'},
                {username: 'Jack', content: 'React 太难了！'}
            ];
            this.setState({comments});
        }, 1000);
    }
    
    // 添加评论
    addComment = (comment) => {
        const {comments} = this.state;
        comments.unshift(comment);
        // 更新状态
        this.setState({comments});
    };
    
    // 删除评论
    delComment = (index) => {
        const {comments} = this.state;
        comments.splice(index, 1);
        // 更新状态
        this.setState({comments});
    };
    
    render() {
        const comments = this.state.comments;
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
                    <ComponentList comments={comments} delComment={this.delComment} />
                </div>
            </div>
        )
    }
}