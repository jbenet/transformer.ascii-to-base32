# transformer.ascii-to-base32

[Transformer](http://github.com/jbenet/transformer) conversion: ascii to base32

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.

### Commandline

```
> echo 'beep boop' | transform ascii base32
c9jpaw10c9qpyw0

> echo 'c9jpaw10c9qpyw0' | transform base32 ascii
beep boop
```

### Javascript

```js
var transformer = require('dat-transformer');
var ascii2base32 = transformer('ascii', 'base32');
ascii2base32('beep boop'); // c9jpaw10c9qpyw0
```
