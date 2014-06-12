var Conversion = require('transformer-conversion');
var tAscii = require('transformer.ascii');
var tBase32 = require('transformer.base32');
// require any other modules you may need here.
var base32 = require('base32');

module.exports = Conversion(tAscii, tBase32, convert);

function convert(ascii) {
  return base32.encode(ascii);
}
