
module.exports = 
function fixRange(opts) {
  var reverse = opts.reverse
  var end     = opts.end
  var start   = opts.start

  if(start == null || end == null) {
    return opts
  }

  var range = [start, end].sort()
  if(reverse)
    range = range.reverse()

  opts.start   = range[0]
  opts.end     = range[1]
  return opts
}

