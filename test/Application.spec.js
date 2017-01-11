import React from 'react';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import { expect, assert } from 'chai';
import Application from '../lib/components/Application';
const scoreWord = require('../lib/components/helpers/scoreWord');

describe("Application", () => {

  it('should render as a <div>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'div');
  });
});

describe ('scoreWord', () => {
  it('should be a function', () => {
    assert.isFunction(scoreWord);
  });

  it('scores an empty word as zero', () => {
    const text = scoreWord('')
    assert.equal(text, 0);
  });

  it('scores a letter', () => {
    const score = scoreWord('suh')
    assert.equal(score, 6);
  });

  it('scores words with spaces', () => {
    const score = scoreWord('      righteousbro        ')
    assert.equal(score,18);
  });

  it('scores case insensitive words', () => {
    const score = scoreWord('FAM')
    assert.equal(score, 8)

  });

});
