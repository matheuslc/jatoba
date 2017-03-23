import React, { Component } from 'react';
import Search from './search'

/**
 * @class
 * @name Index
 * @description Application entrypoint
 */
export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container-fluid">
          <Search />

            { this.props.children }
        </div>
    )
  }
}
