
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const { addDecorator } = require("@storybook/react");
const { jsxDecorator } = require("storybook-addon-jsx");


addDecorator(jsxDecorator);