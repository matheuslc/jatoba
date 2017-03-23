import sinon from 'sinon';
import { expect } from 'chai';
import * as fs from 'fs';
import * as path from 'path';

import reducer from '../../src/reducers/reducer';
import * as actions from '../../src/actions/action'

describe('Redux reducers', () => {
  let whetherResponse = {};

  beforeAll(() => {
    whetherResponse = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../fixtures/whetherResponse.json'), 'utf8'));
  });

  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({
      whether: {
        whether: [],
      }
    })
  });

  it('Should handle SEARCH action', () => {
    expect(reducer({}, {
      type: actions.SEARCH,
      payload: whetherResponse,
      term: 'Florianópolis',
      fetching: false,
      error: false,
    })).to.be.deep.equal({
      whether: {
        whether: whetherResponse,
        fetching: false,
        error: false,
        term: 'Florianópolis'
      }
    })
  });
});
