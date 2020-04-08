import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
    static propTypes = {
        setSearchName: PropTypes.func.isRequired
    };
    
    state = {
        searchName: ''
    }
    
    handleChange = (e) => {
        this.setState({searchName: e.target.value});
    }
    
    handleSearch = (e) => {
        this.props.setSearchName(this.state.searchName);
        e.preventDefault();
    }
    
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" value={this.state.searchName} onChange={this.handleChange} />&nbsp;&nbsp;
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        );
    }
}