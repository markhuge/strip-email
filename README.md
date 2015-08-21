# strip-email 

Strip email addresses from strings. Yup, that's it.

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install strip-email --save
```

## Usage

```js
var strp = require('strip-email'),
    info = require('./package.json'),
    author = strp(info.author);

console.log(author);
```

## Tests

```sh
npm install && npm test
```

> strip-email@1.0.0 test /Users/mark/projects/strip-email
> node test/test.js
TAP version 13
# strip email
ok 1 should be equal
ok 2 should be equal
ok 3 should be equal
ok 4 should be equal
ok 5 should be equal
ok 6 should be equal
ok 7 should be equal
ok 8 should be equal
ok 9 should be equal
ok 10 should be equal
1..10
# tests 10
# pass  10
# ok

```

## Dev Dependencies

- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers


## License

MIT
