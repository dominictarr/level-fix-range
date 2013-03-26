var test = require('tape')
var range = require('../')


function ordered(t, opts, exact) {
  var _opts = JSON.parse(JSON.stringify(opts))
  var opts = range(opts)
  //don't change order if there is only start OR end,
  //but not both.
  if(exact) {
    t.ok(opts.start   == _opts.start)
    t.ok(opts.end     == _opts.end)
    t.ok(opts.reverse == _opts.reverse)
    return
  }

  console.log(opts)
  console.log([!!opts.reverse,'===', opts.start, '>', opts.end].join(' '))
  t.ok(!!opts.reverse === opts.start > opts.end, 
    [opts.start, opts.reverse ? '>' : '<', opts.end].join(' ')
  )
}


test('set correct order', function (t) {
  ordered = ordered.bind(null, t)
  ordered({start: 'a', end: 'z'})
  ordered({start: 'v', end: 'e'})
  ordered({start: 'e', end: 'v', reverse: true})
  ordered({start: 'v', end: 'e', reverse: true})
  t.end()
})

//{start: 'v'} and {end: 'v'} are both valid orders,
//from start: 'v' to the end of the db,
//and end: 'v' from the start of the db to 'v'.
//so don't fix them.

test("don't change order", function (t) {
  ordered({start: 'v',           reverse: true}, true)
  ordered({            end: 'v', reverse: true}, true)
  ordered({            end: 'v'               }, true)
  ordered({start: 'v'                         }, true)
  t.end()
})

