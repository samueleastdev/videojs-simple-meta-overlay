# Videojs S3Bubble Meta Overlay

A simple overlay for S3Bubble video meta data title and description

## Table of Contents

<!-- START doctoc -->
<!-- END doctoc -->
## Installation

```sh
npm install --save videojs-s3bubble-meta-overlay
```

The npm installation is preferred, but Bower works, too.

```sh
bower install  --save videojs-s3bubble-meta-overlay
```

## Usage

To include videojs-s3bubble-meta-overlay on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-s3bubble-meta-overlay.min.js"></script>
<script>
  var player = videojs('my-video');

  player.s3BubbleMetaOverlay();
</script>
```

### Browserify

When using with Browserify, install videojs-s3bubble-meta-overlay via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-s3bubble-meta-overlay');

var player = videojs('my-video');

player.s3BubbleMetaOverlay();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-s3bubble-meta-overlay'], function(videojs) {
  var player = videojs('my-video');

  player.s3BubbleMetaOverlay();
});
```

## License

MIT. Copyright (c) Media Streaming Websites &lt;support@s3bubble.com&gt;


[videojs]: http://videojs.com/
