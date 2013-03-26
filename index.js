
module.exports = 
function fixRange(opts) {
  var reverse = opts.reverse
  var end     = opts.end
  var start   = opts.start

  var range = [start, end].sort()
  if(start != null && end != null && reverse)
    range = range.reverse()

  start = range.shift()
  end   = range.shift()

  opts.start   = start
  opts.end     = end
  return opts
}

