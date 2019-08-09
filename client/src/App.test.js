import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App.js';
import sum from './sum.js'


describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = rtl.render(
    <App />
    );
  })
});

const help = require('./sum');

describe('sum function', () => {
  it('sums two integers', () => {
    const expected = 3;
    const actual = help.sum(1, 2);
    expect(actual).toBe(expected);
  });
}); 