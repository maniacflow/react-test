import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ComponentAdd extends Component {
    static propTypes = {
        addComment: PropTypes.func.isRequired
    };
    state = {
        username: '',
        content: ''
    };
    
    handleChange = (e) => {
        const name  = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit = (e) => {
        const comment = this.state;
        this.props.addComment(comment);
        this.setState({
            username: '',
            content: ''
        });
        e.preventDefault();
    }
    
    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" name="content" value={this.state.content} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}