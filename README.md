# level-fix-range

make reverse ranges easier to use.

When you use reverse ranges, you have to reverse the `start` and `end` also,

``` js
db.createReadStream({start: 'a', end: 'z'})
db.createReadStream({start: 'z', end: 'a', reverse: true})
```

this is confusing and bug-ridden.

level-fix-range fixes the options so they always make sense.
if you want a range to reverse, just set reverse.

``` js
var fix = require('level-fix-range')
db.createReadStream({start: 'a', end: 'z'})
db.createReadStream(fix({start: 'a', end: 'z', reverse: true}))
```

when you pass one option, it won't change anything,
since `{start: X, end: null}` and `{start: null, end: 'X'}`
are both valid. (meaning from `X` to the end of the db,
from the start of the db to `X`, respectively.)

``` js
//get 'm' or after
db.createReadStream({start: 'm'})
//get 'm' or before
db.createReadStream({end: 'm', reverse: true})
```

## Stability

Stable: Expect patches, possible features additions.

## License

MIT
