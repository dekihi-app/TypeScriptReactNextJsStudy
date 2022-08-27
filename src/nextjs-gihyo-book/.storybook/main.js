const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "staticDirs": ["public"],
  babel: async options => ({
    ...options,
    plugin: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-private-methods",
      "@babel/plugin-proposal-property-in-object",
    ],
  }),
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      new TsConfigPathsPlugin.TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json")
      }),
    ];

    return config;
  },
}