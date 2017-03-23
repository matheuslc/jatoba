import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { search } from '../actions/action';

/**
 * @class
 * @name Search
 * @description Search bar
 */
class Search extends Component {
    constructor(props) {
        super(props);
    }

    search(query) {
        return this.props.search(query);
    }

    render() {
        return (
            <nav className="search row justify-content-md-center">
                <div className="col-6">
                    <h1 className="text-center">Yes! You can search.</h1>
                    <div className="input-group">
                        <input className="form-control"
                               type="text"
                               placeholder="What's the title of your book?"
                               onChange={ (event) => this.setState({
                                   query: event.target.value
                               }) } />

                        <Link to="/"
                              onClick={() => this.search(this.state.query)}>
              <span className="input-group-addon">
                Search
              </span>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return { search: state.search };
}

export default connect(mapStateToProps, { search })(Search)
