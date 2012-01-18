module.exports = function(outstream,override) { 
  var colors = require('colors')
  outstream = outstream || process.stdout
  if (!override && outstream && outstream._type != 'tty') {
    colors.mode = 'none'
  }
}

