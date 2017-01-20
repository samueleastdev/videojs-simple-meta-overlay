import videojs from 'video.js';

// Default options for the plugin.
const defaults = {};

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 * @param    {Object} [options={}]
 */
const onPlayerReady = (player, options) => {

    var s3BubbleMetaOverlayWrap = document.createElement('div');
    s3BubbleMetaOverlayWrap.id = "s3bubble-meta-overlay";
    s3BubbleMetaOverlayWrap.className = 's3bubble-meta-overlay';

    var s3BubbleMetaOverlayInnerWrap = document.createElement('div');
    s3BubbleMetaOverlayInnerWrap.id = "s3bubble-meta-overlay-container";
    s3BubbleMetaOverlayInnerWrap.className = 's3bubble-meta-overlay-container';

    s3BubbleMetaOverlayWrap.appendChild(s3BubbleMetaOverlayInnerWrap);

    if (options.subTitle) {
        var s3BubbleMetaOverlayWrapSubTitle = document.createElement('h5');
        s3BubbleMetaOverlayWrapSubTitle.innerHTML = options.subTitle;
        s3BubbleMetaOverlayInnerWrap.appendChild(s3BubbleMetaOverlayWrapSubTitle);
    }

    if (options.title) {
        var s3BubbleMetaOverlayWrapTitle = document.createElement('h1');
        s3BubbleMetaOverlayWrapTitle.innerHTML = options.title;
        s3BubbleMetaOverlayInnerWrap.appendChild(s3BubbleMetaOverlayWrapTitle);
    }

    if (options.para) {
        var s3BubbleMetaOverlayWrapPara = document.createElement('p');
        s3BubbleMetaOverlayWrapPara.innerHTML = options.para;
        s3BubbleMetaOverlayInnerWrap.appendChild(s3BubbleMetaOverlayWrapPara);
    }

    player.el().appendChild(s3BubbleMetaOverlayWrap);

    s3BubbleMetaOverlayWrap.onclick = function() {

        player.play();
    };

    player.on('play', function() {

        addClass(s3BubbleMetaOverlayWrap, 's3bubble-meta-overlay-hidden');

    });

    player.on('pause', function() {

        removeClass(s3BubbleMetaOverlayWrap, 's3bubble-meta-overlay-hidden');

    });

    player.on('playing', function() {

        addClass(s3BubbleMetaOverlayWrap, 's3bubble-meta-overlay-hidden');
    });

    var hasClass = function(ele, cls) {
        return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }

    var addClass = function(ele, cls) {
        if (!hasClass(ele, cls)) ele.className += " " + cls;
    }

    var removeClass = function(ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    }

};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function s3BubbleMetaOverlay
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const s3BubbleMetaOverlay = function(options) {
    this.ready(() => {
        onPlayerReady(this, videojs.mergeOptions(defaults, options));
    });
};

// Register the plugin with video.js.
videojs.plugin('s3BubbleMetaOverlay', s3BubbleMetaOverlay);

// Include the version number.
s3BubbleMetaOverlay.VERSION = '__VERSION__';

export default s3BubbleMetaOverlay;