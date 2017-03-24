import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/action';

/**
 * @name Whether
 */
class Wheather extends Component {
  kelvinToCelsius(temperature) {
    return (temperature - 273.15).toFixed(2);
  }

  getIcon(whether) {
    console.log('aaa', whether);
    switch (whether) {
      case 'Rain':
        return (
          <i className="fa fa-rain" aria-hidden="true"></i>
        )
      case 'Clouds':
        return render (
          <i className="fa fa-cloud" aria-hidden="true"></i>
        )
    }
  }

  render() {
    if (this.props.error) {
      return (
        <div className="whether container justify-content-md-center">
          { this.props.whether.response.data.message }
        </div>
      )
    }

    if (this.props.fetching === false) {
      return (
        <div className="whether container justify-content-md-center">
          <span className="row">Whether now</span>

          <header className="whether__header row">
            <h1 className="whether__title">
              { this.props.whether.name },
              { this.props.whether.sys.country } </h1>
          </header>

          <section className="whether__details row">
            <div className="whether__main-info">
              <div className="whether__image">
                { this.getIcon( (this.props.whether.whether) ? this.props.whether.wheather[0].main : '') }
              </div>

              <div className="whether__main-info">
                <span>{ this.kelvinToCelsius(this.props.whether.main.temp) }ºC</span>
                <p>{ (this.props.whether.whether) ? this.props.whether.whether[0].description : '' }</p>
              </div>
            </div>

            <div className="whether__info">
              <ul className="whether__info-list">
                <li>Max: { this.kelvinToCelsius(this.props.whether.main.temp_max) }ºC</li>
                <li>Min: { this.kelvinToCelsius(this.props.whether.main.temp_min) }º</li>
                <li>Humidity: { this.props.whether.main.humidity }%</li>
              </ul>
            </div>
          </section>
        </div>
      )
    }

    if (this.props.fetching === true) {
      return (
        <div className="whether container justify-content-md-center">
          <div className="row">Loading</div>
        </div>
      )
    }

    return (
      <div className="whether container justify-content-md-center">
        <div className="row">Type your city name</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    whether: state.whether.whether,
    fetching: state.whether.fetching,
    term: state.whether.term,
    error: state.whether.error
  }
}

export default connect(mapStateToProps, { search })(Whether);
