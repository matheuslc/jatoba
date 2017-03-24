import sinon from 'sinon';
import { expect } from 'chai';
import * as fs from 'fs';
import * as path from 'path';

import reducer from '../../src/reducers/reducer';
import * as actions from '../../src/actions/action'

describe('Redux reducers', () => {
  let weatherResponse = {};

  beforeAll(() => {
    weatherResponse = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../fixtures/weatherResponse.json'), 'utf8'));
  });

  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({
      weather: {
        weather: [],
      }
    })
  });

  it('Should handle SEARCH action', () => {
    expect(reducer({}, {
      type: actions.SEARCH,
      payload: weatherResponse,
      term: 'Florianópolis',
      fetching: false,
      error: false,
    })).to.be.deep.equal({
      weather: {
        weather: weatherResponse,
        fetching: false,
        error: false,
        term: 'Florianópolis'
      }
    })
  });
});
