import '!style-loader!css-loader!sass-loader!./SourceCard.scss'; //scss-loader.scss';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/preset-scss",
    // "storybook-addon-designs",
    "storybook-addon-jsx"
  ],
  // webpackFinal: async (config, { configType }) => {
  //   config.module.rules.push({
  //     // this is for both less and scss
  //     test: /.*\.(?:le|c|sc)ss$/,
  //     loaders: [
  //       'style-loader',
  //       'css-loader',
  //       'sass-loader'
  //     ]
  //   });
  //   config.plugins.push(new MiniCssExtractPlugin({
  //     filename: '[name]-[contenthash].css',
  //     chunkFilename: '[id]-[contenthash].css',
  //   }));
  //   return config;
  // },
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
  //   },
  // },

}