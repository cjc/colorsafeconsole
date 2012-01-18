var colors = require('colors')

module.exports = function(outstream,override) { 
  if (!override && outstream && outstream._type != 'tty') {
    colors.mode = 'none'
  }
}

