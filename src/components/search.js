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
            <nav className="search container justify-content-md-center">
                <div className="row">
                    <h1 className="search__text">Type your city name</h1>
                    <div className="input-group input-group-lg">
                        <input className="form-control"
                               type="text"
                               placeholder="Hmm.. try your city name"
                               onChange={ (event) => this.setState({
                                   query: event.target.value
                               }) } />
                        <span className="input-group-btn">
                          <button className="btn btn-secondary"
                                  onClick={() => this.search(this.state.query)}>
                            Search
                          </button>
                        </span>
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
