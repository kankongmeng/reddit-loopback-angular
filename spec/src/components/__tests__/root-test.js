import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import Root from '../root';

describe('root', function () {
  it('changes without problems', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);

    const inputNode = ReactDOM.findDOMNode(root.refs.input);

    const newValue = 'some text';
    inputNode.value = newValue;
    TestUtils.Simulate.change(inputNode);

    const nameNode = ReactDOM.findDOMNode(root.refs.name);
    expect(nameNode.textContent).toEqual(newValue);
  });
});
