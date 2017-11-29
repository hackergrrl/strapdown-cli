# strapdown-cli

> A small command line utility for [Strapdown](http://strapdownjs.com).

[Strapdown](http://strapdownjs.com) generates attractive single-page websites
from simple markdown text. `strapdown-cli` is a simple tool that lets you
generate these web pages from the command line. You give it a filename and a
strapdown theme name, and the website will be written to standard out.

## Usage

```
$ cat > foo.markdown
# hello world

a fine day to be writing markdown!
^D

$ strapdown foo.markdown united > foo.html

$ cat foo.html
<!DOCTYPE html>
<html>
<title>foo.markdown</title>

<xmp theme="united" style="display:none;">
<h1 id="hello">hello</h1>
<p>A fine day to be writing markdown!</p>

</xmp>

<script src="http://strapdownjs.com/v/0.2/strapdown.js"></script>
</html>
```

<center><img src="https://github.com/noffle/strapdown-cli/raw/master/screenshot.png"/></center>

## API

If you're looking for a programmatic API, you want the
[strapdown](http://strapdownjs.com) project.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install strapdown-cli
```

## License

ISC

