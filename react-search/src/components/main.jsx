import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class Main extends Component {
    static propTypes = {
        searchName: PropTypes.string.isRequired
    };
    
    state = {
        initView: true,
        loading: false,
        users: [],
        errorMsg: ''
    }
    
    // 当组件接收到新的属性时回调
    componentWillReceiveProps(newProps) {
        const {searchName} = newProps;
        this.setState({
            initView: false,
            loading: true
        });
        const url = `https://api.github.com/search/users?q=${searchName}`;
        axios.get(url).then(res => {
            console.log(res);
            const result = res.data;
            const users = result.items.map(item => {
                return {name: item.login, url: item.html_url, avatarUrl: item.avatar_url};
            });
            this.setState({loading: false, users});
        }).catch(err => {
            this.setState({errorMsg: err.message});
        })
    }
    
    render() {
        const {initView, loading, users, errorMsg} = this.state;
        const {searchName} = this.props;
        if (initView) {
            return <h2>请输入关键词进行搜索</h2>
        } else if (loading) {
            return <h2>正在请求中...</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        } else {
            return (
                <div className="row">
                    {
                        users.map((user, index) => (
                            <div className="card" key={index}>
                                <a href={user.url} target="_blank">
                                    <img src={user.avatarUrl} alt="" style={{width: '100px'}} />
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }
                </div>
            );
        }
    }
}