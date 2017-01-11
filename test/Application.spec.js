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

  it('scores an empty word as zero', (text) => {
    assert.equal(scoreWord('')).toEqual(0);
  });

  it('scores a letter', () => {
    assert.equal(scoreWord('a')).toEqual(1);
  });

  it('scores words with spaces', () => {
    assert.equal(scoreWord('righteous bro')).toEqual(18);
  });

  it('scores case insensitive words', () => {
    assert.equal(scoreWord('SUH')).toEqual(6);
  });

});
