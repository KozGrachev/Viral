import React from 'react';

export const decorators = [(Story) => <div style={{
  margin: '0',
  padding: '0',
  boxSizing: 'border-box',
  fontFamily: 'Comfortaa',
}}><Story /></div>];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const { addDecorator } = require("@storybook/react");
const { jsxDecorator } = require("storybook-addon-jsx");


addDecorator(jsxDecorator);