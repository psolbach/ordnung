# Ordung.js
_The 1kb alternative to Isotope._

## Install

### Download

+ [ordnung.js](https://github.com/psolbach/Ordung.js/ordnung.js) un-minified, or
+ [ordnung.min.js](https://github.com/psolbach/Ordung.js/ordnung.min.js) minified

### Package managers

Bower: `bower install ordnung --save`

## License

### Commercial license

Ordnung.js is licensed under [GPL 3](http://www.gnu.org/licenses/gpl-3.0.de.html).

## Usage

_JS_

``` js
var container = document.querySelector('.container');
var ordnung = new Ordnung(container);

ordnung.layout();
```

_HTML_

Elements should be of equal width but variable height and ``float: left``.

## Credits
Inspired by Isotope by [Metafizzy](http://metafizzy.co)    
Made by [Paul Solbach](http://twitter.com/___paul)