# Ordung.js
_The 1kb alternative to Isotope._

## Demo

<a href="http://static.psolbach.com/ordnung.js/example" target="_blank">Example</a>

## Install

### Download

+ [ordnung.js](https://github.com/psolbach/Ordung.js/blob/master/ordnung.js) un-minified, or
+ [ordnung.min.js](https://github.com/psolbach/Ordung.js/blob/master/ordnung.min.js) minified


## Usage

_JS_

``` js
var container = document.querySelector('.container');
var ordnung = new Ordnung(container);

ordnung.layout();
```

_HTML_
``` html
<div class="container">
  <div class="elem"></div>
  <div class="elem"></div>
  <div class="elem"></div>
  ...
</div>
```

Elements should be of equal width but variable height and ``float: left``.    
After layout, the container height will be adjusted to the condensed height of the elements.    

_CSS_    

To use Ordnung with media-queries, you need to use a hack for now:
Clear the styles on ``window.resize`` and call ``ordnung.layout()``. See example.

## Compatibility
Ordnung.js uses CSS-transforms to move stuff around. This is a widely supported property, pleaase refer to [Can I Use](http://caniuse.com/#feat=transforms2d) for specifics. As we're not implementing a bin packing algorithm, Ordnung only works with _fixed-width_ columns, just like the original Isotope.

## License

Ordnung.js is licensed under [GPL 3](http://www.gnu.org/licenses/gpl-3.0.de.html).    
You may use this library at will – if you mention the author.

## Credits
Inspired by Isotope by [Metafizzy](http://metafizzy.co)    
Made by [Paul Solbach](http://twitter.com/___paul)