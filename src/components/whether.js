import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/action';

/**
 * @name Whether
 */
class Whether extends Component {
  render() {
    if (!this.props.fetching) {
      return (
        <div>
          { this.props.whether.base }
        </div>
      )
    }

    return (
      <div>Loading</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    whether: state.whether.whether,
    fetching: state.whether.fetching,
    term: state.whether.term
  }
}

export default connect(mapStateToProps, { search })(Whether);
