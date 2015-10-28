// Ordnung.js
'use strict';

(function(window) {
    var container,
        vendorPrefixes = [
            '-webkit-transform',
            '-moz-transform',
            '-o-transform',
            'transform'
        ];

    // Init
    var Ordnung = function(_container) {
        container = _container;
    };

    Ordnung.prototype.layout = function() {
        var elems = container.children,
            shiftBuffer = [],
            sumOff = {},
            lastRect = 0;
            
        // Get element dimensions
        var offsetBuff = Array.prototype.slice.call(elems).map(function(e) {
            return e.getBoundingClientRect()
        });

        // Main loop
        for (var i = 0, l = elems.length-1; i <= l; i++) {
            var rect = offsetBuff[i], xOffset = 0, yOffset = 0,
                fromTop = rect.top + window.pageYOffset;

            // Init column buffer
            if (!(rect.left in sumOff)) {
                sumOff[rect.left] = fromTop;
            }

            // Column state
            var col = sumOff[rect.left];
            
            // Current Top offset minus sum of moves
            yOffset = yOffset ? yOffset : fromTop - col;

            // Shift horizontally?    
            var lastOff = sumOff[lastRect];        
            if (lastRect != rect.left && lastOff > 0 && lastOff < col) {
                yOffset = fromTop - sumOff[lastRect];
                xOffset = lastRect - rect.left;
            }
            
            // Defer HTML layout
            shiftBuffer.push(("translateY(-" + yOffset + "px)") +
                (xOffset ? "translateX(" + xOffset + "px)" : ""))

            // Save the last dance
            if (!xOffset) lastRect = rect.left;
            var xCol = xOffset ? lastRect : rect.left;
            sumOff[xCol] = sumOff[xCol] + rect.height;
        }

        // Do transforms
        for (i = 0; i < l; i++) {
            vendorPrefixes.forEach(function(prefix) {
                elems[i].style[prefix] = shiftBuffer[i];
            })
        }

        // Total height
        var height = [];
        for (var key in sumOff) {
            height.push(sumOff[key])
        };

        // Adjust container
        var totalHeight = Math.max.apply(Math, height) - container.offsetTop;
        container.style.height = (totalHeight - window.pageYOffset) + "px";
    };

    // Expose to AMD environment, e.g. RequireJS
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return Ordnung;
        });
        return;
    }

    // Expose to NodeJS
    if ('undefined' !== typeof module && module.exports) {
        module.exports = Ordnung;
        return;
    }

    // Expose to window if unknown
    window.Ordnung = window.Ordnung || Ordnung;

    // This line either passes the `window` as an argument or
    // an empty Object-literal if `window` is not defined.
}(('undefined' !== typeof window) ? window : {}));