import React from 'react';
import ReactDOM from 'react-dom';
import Subtotal from './Subtotal';

describe(`Subtotal Component`, () => {
  it(`renders without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Subtotal></Subtotal>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})