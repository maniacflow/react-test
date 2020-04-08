import React, {Component} from 'react';

export default class App extends Component {
    state = {
        count: 0,
        number: 1
    };
    handleChange = (e) => {
        this.setState({
            number: e.target.value
        });
    }
    increment = () => {
        const {count, number} = this.state;
        this.setState({count: count + number*1});
    }
    decrement = () => {
        const {count, number} = this.state;
        this.setState({count: count - number*1});
    }
    incrementOfOdd = () => {
        const {count, number} = this.state;
        if (count % 2 !== 0) {
            this.setState({count: count + number*1});
        }
    }
    incrementAsync = () => {
        const {count, number} = this.state;
        setTimeout(() => {
            this.setState({count: count + number*1});
        }, 1000);
    }
    render() {
        const {count} = this.state;
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;&nbsp;
                    <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                    <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                    <button onClick={this.incrementOfOdd}>increment of odd</button>&nbsp;&nbsp;
                    <button onClick={this.incrementAsync}>increment async</button>
                </div>
            </div>
        );
    }
}