if (process.env.NODE_ENV === 'production') {
  // In production
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
