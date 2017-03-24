import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/action';

/**
 * @name Weather
 */
class Weather extends Component {
  kelvinToCelsius(temperature) {
    return (temperature - 273.15).toFixed(2);
  }

  getIcon(weather) {
    switch (weather) {
      case '09n':
        return (
          <i className="fa fa-bolt" aria-hidden="true"></i>
        )
      case '10n': {
        return (
          <i className="fa fa-cloud" aria-hidden="true"></i>
        )
        cas
      }
      case '01n': // Sky is clean
        return (
          <i className="fa fa-sun-o" aria-hidden="true"></i>
        )
      case '02n':
        return (
          <i className="fa fa-snowflake-o" aria-hidden="true"></i>
        )
      default:
        return (
          <i className="fa fa-sun-o" aria-hidden="true"></i>
        )
    }
  }

  render() {
    console.log('aa', this.props);

    if (this.props.error === true) {
      return (
        <div className="weather container justify-content-md-center">
          { this.props.weather.response.data.message }
        </div>
      )
    }

    if (this.props.fetching === false) {
      return (
        <div className="weather container justify-content-md-center">
          <span className="row">weather now</span>

          <header className="weather__header row">
            <h1 className="weather__title">
              { this.props.weather.name}, { ' ' + this.props.weather.sys.country }
            </h1>
          </header>

          <section className="weather__details row">
            <div className="weather__main-info">
              <div className="weather__image">
                { this.getIcon( (this.props.weather.weather.length) ? this.props.weather.weather[0].icon : '') }
              </div>

              <div className="weather__main-info">
                <span>{ this.kelvinToCelsius(this.props.weather.main.temp) }ºC</span>
                <p>{ (this.props.weather.weather.length) ? this.props.weather.weather[0].description : '' }</p>
              </div>
            </div>

            <div className="weather__info">
              <ul className="weather__info-list">
                <li>Max: { this.kelvinToCelsius(this.props.weather.main.temp_max) }ºC</li>
                <li>Min: { this.kelvinToCelsius(this.props.weather.main.temp_min) }º</li>
                <li>Humidity: { this.props.weather.main.humidity }%</li>
              </ul>
            </div>
          </section>
        </div>
      )
    }

    if (this.props.fetching === true) {
      return (
        <div className="weather container justify-content-md-center">
          <div className="row">Loading</div>
        </div>
      )
    }

    return (
      <div className="weather container justify-content-md-center">
        <div className="row">Just do it!</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather.weather,
    fetching: state.weather.fetching,
    term: state.weather.term,
    error: state.weather.error
  }
}

export default connect(mapStateToProps, { search })(Weather);
