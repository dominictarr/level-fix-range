var test = require('tape')
var range = require('../')


function ordered(t, opts, exact) {
  var _opts = JSON.parse(JSON.stringify(opts))
  var opts = range(opts)
  //don't change order if there is only start OR end,
  //but not both.
  if(exact) {
    console.log(opts, _opts)
    t.ok(opts.start == exact.start)
    
    t.ok(opts.end == exact.end)
    return
  }
    
  console.log([!!opts.reverse,'===', opts.start, '>', opts.end].join(' '))
  t.ok(!!opts.reverse === opts.start > opts.end, 
    [opts.start, opts.reverse ? '>' : '<', opts.end].join(' ')
  )
}


test('set correct order', function (t) {
  ordered = ordered.bind(null, t)
  ordered({start: 'a', end: 'z'})
  ordered({start: 'v', end: 'e'})
  ordered({start: 'v', end: 'e', reverse: true})
  ordered({start: 'v',           reverse: true}, {start: 'v'})
  ordered({            end: 'v', reverse: true}, {start: 'v'})
  ordered({            end: 'v'},                {start: 'v'})
  ordered({start: 'v'          },                {start: 'v'})
  t.end()
})

