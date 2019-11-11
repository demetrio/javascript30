/*!
	devtools-detect
	Detect if DevTools is open
	https://github.com/sindresorhus/devtools-detect
	by Sindre Sorhus
	MIT License
*/
(function() {
    'use strict';
    var devtools = {
        open: false,
    };
    var threshold = 160;
    var emitEvent = function(state) {
        window.dispatchEvent(
            new CustomEvent('devtoolschange', {
                detail: {
                    open: state,
                },
            })
        );
    };

    setInterval(function() {
        var widthThreshold = window.outerWidth - window.innerWidth > threshold;
        var heightThreshold = window.outerHeight - window.innerHeight > threshold;

        if (
            !(heightThreshold && widthThreshold) &&
            ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) ||
                widthThreshold ||
                heightThreshold)
        ) {
            if (!devtools.open) {
                emitEvent(true);
            }
            devtools.open = true;
        } else {
            if (devtools.open) {
                emitEvent(false);
            }
            devtools.open = false;
        }
    }, 500);

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = devtools;
    } else {
        window.devtools = devtools;
    }
})();

let stateEl = document.querySelector('#devtools-state');

window.addEventListener('devtoolschange', function(e) {
    stateEl.textContent = e.detail.open ? "Great! Let's work! 🔥🔥🔥🔥" : 'Open it again to check the info!';
});
