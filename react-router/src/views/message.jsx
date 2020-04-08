import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';

import MessageDetail from './message-detail';

export default class Message extends Component {
    state = {
        messages: []
    };
    
    componentDidMount() {
        // 模拟发送 ajax 请求
        setTimeout(() => {
            const messages = [
                {id: 1, title: 'message001'},
                {id: 3, title: 'message003'},
                {id: 5, title: 'message005'},
            ];
            this.setState({messages});
        }, 1000);
    }
    
    showDetail = (id) => {
        this.props.history.push(`/home/message/${id}`);
    }
    
    showDetail2 = (id) => {
        this.props.history.replace(`/home/message/${id}`);
    }
    
    back = () => {
        this.props.history.goBack();
    }
    
    forward = () => {
        this.props.history.goForward();
    }
    
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((message, index) => (
                            <li key={index}>
                                <NavLink to={`/home/message/${message.id}`}>{message.title}</NavLink>&nbsp;&nbsp;
                                <button onClick={() => this.showDetail(message.id)}>push() 查看</button>&nbsp;&nbsp;
                                <button onClick={() => this.showDetail2(message.id)}>replace() 查看</button>
                            </li>
                        ))
                    }
                </ul>
                <p>
                    <button onClick={this.back}>回退</button>
                    <button onClick={this.forward}>前进</button>
                </p>
                <Route path='/home/message/:id' component={MessageDetail} />
            </div>
        );
    }
}