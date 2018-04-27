const path = require('path');
const settings = require('./app/config/settings');

module.exports = {
  mode: settings.env,
  watch: true,
  entry: [
    './app/home.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
