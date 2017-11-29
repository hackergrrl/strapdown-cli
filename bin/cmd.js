#!/usr/bin/env node

var fs = require('fs')
var marked = require('marked')

// Powered by and inspired by: http://strapdownjs.com

if (process.argv.length !== 4) {
  console.log('USAGE: strapdown FILE.markdown <THEME>')
  console.log()
  console.log('Valid themes:')
  console.log(`  amelia
  cerulean
  cyborg
  journal
  readable
  simplex
  slate
  spacelab
  spruce
  superhero
  united`)
  process.exit(1)
}

// TODO: make it work offline (pull themes from strapdown module)
// TODO: make it display offline (inline strapdown js)

var markdown = marked(fs.readFileSync(process.argv[2], 'utf8'))

var output = `
<!DOCTYPE html>
<html>
<title>${process.argv[2]}</title>

<xmp theme="${process.argv[3]}" style="display:none;">
${markdown}
</xmp>

<script src="http://strapdownjs.com/v/0.2/strapdown.js"></script>
</html>
`

process.stdout.write(output)
