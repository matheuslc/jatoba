import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/action';

/**
 * @name Whether
 */
class Whether extends Component {
  kelvinToCelsius(temperature) {
    return temperature - 273.15;
  }

  render() {
    if (this.props.fetching === false) {
      return (
        <div className="whether">
          WHETHER
          <header className="whether-header">
            <h1 className="whether-title">
              { this.props.whether.name },
              { this.props.whether.sys.country } </h1>
          </header>

          <section className="whether-details">
            <ul>
              <li>Temperatua: { this.kelvinToCelsius(this.props.whether.main.temp) } C</li>
              <li>Máxima: { this.kelvinToCelsius(this.props.whether.main.temp_max) } C</li>
              <li>Mínima: { this.kelvinToCelsius(this.props.whether.main.temp_min) } C</li>
              <li>Umidade: { this.props.whether.main.humidity } %</li>
            </ul>
          </section>

        </div>
      )
    }

    if (this.props.fetching === true) {
      return (
        <div>Loading</div>
      )
    }

    return (
      <div>Digite o nome de sua cidade</div>
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
