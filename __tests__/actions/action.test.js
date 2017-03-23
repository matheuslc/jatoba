import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import { expect } from 'chai';
import * as fs from 'fs';
import * as path from 'path';

import * as actions from '../../src/actions/action'

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '4743eefc9dd1e3fc255f055299c0620d';

describe('Redux actions', () => {
  let mock = {};
  let whetherResponse = {};

  beforeAll(() => {
    whetherResponse = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../fixtures/whetherResponse.json'), 'utf8'));
  });

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('Should search and dispatch two SEARCH actions', () => {
    mock.onGet(`${URL}?q=Florianópolis&appid=${API_KEY}`)
      .reply(200, whetherResponse);

    const store = mockStore({
      whether: []
    });

    return store.dispatch(actions.search('Florianópolis'))
      .then(() => {
        const storeActions = store.getActions();

        expect(storeActions).to.have.lengthOf(2);
        expect(storeActions[0]).to.have.property('type');
        expect(storeActions[0]).to.have.property('payload');
        expect(storeActions[0]).to.have.property('fetching');
        expect(storeActions[0]).to.have.property('error');
        expect(storeActions[0]).to.have.property('term');
        expect(storeActions[0].fetching).to.equal(true);
        expect(storeActions[0].type).to.equal(actions.SEARCH);

        expect(storeActions[1]).to.have.property('type');
        expect(storeActions[1]).to.have.property('payload');
        expect(storeActions[1]).to.have.property('fetching');
        expect(storeActions[1]).to.have.property('error');
        expect(storeActions[1]).to.have.property('term');
        expect(storeActions[1].fetching).to.equal(false);
        expect(storeActions[1].payload).to.equal(whetherResponse);
        expect(storeActions[1].type).to.equal(actions.SEARCH);
      });
  });
});
