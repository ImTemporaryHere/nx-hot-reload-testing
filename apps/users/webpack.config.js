const { composePlugins, withNx } = require('@nx/webpack');

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx({
    target: 'node',
  }),
  (config) => {
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300, // Delay before rebuilding
    };
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    return config;
  }
);
