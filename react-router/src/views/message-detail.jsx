import React, {Component} from 'react';

export default class MessageDetail extends Component {
    state = {
        allMessages: [
            {id: 1, title: 'message001', content: '我爱你，XX'},
            {id: 3, title: 'message003', content: '我爱你，YY'},
            {id: 5, title: 'message005', content: '我爱你，ZZ'},
        ]
    };
    render() {
        const {id} = this.props.match.params;
        const message = this.state.allMessages.find((m) => m.id === id*1);
        console.log(message);
        return (
            <ul>
                <li>ID: {message.id}</li>
                <li>TITLE: {message.title}</li>
                <li>CONTENT: {message.content}</li>
            </ul>
        );
    }
}