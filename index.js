var transformer = require('dat-transformer');
var tAscii = transformer('ascii');
var tBase32 = transformer('base32');
// require any other modules you may need here.
var base32 = require('base32');

module.exports = transformer.Conversion(tAscii, tBase32, convert);

function convert(ascii) {
  return base32.encode(ascii);
}
