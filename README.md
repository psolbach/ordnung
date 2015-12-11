# Ordnung.js
_The 1kb alternative to Isotope._    
_Does grid column layouts in a jiffy, no globals asked._

## Demo

<a href="http://static.psolbach.com/ordnung.js/example" target="_blank">Example</a>

## Install
`npm install ordnung-js`


## Download
+ [ordnung.js](https://raw.githubusercontent.com/psolbach/ordnung/master/ordnung.js) un-minified, or
+ [ordnung.min.js](https://raw.githubusercontent.com/psolbach/ordnung/master/ordnung.min.js) minified


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
Ordnung.js uses CSS-transforms to move stuff around. This is a widely supported property, please consult [Can I Use](http://caniuse.com/#feat=transforms2d) for specifics. As we're not implementing a bin packing algorithm, Ordnung only works with _equal-width_ columns, just like many use cases with the original Isotope.

## Performance
Plenty fast, albeit at the cost of being a one-trick pony.  
Align 1000 elements x 100 runs ➝ median, on an Intel i7-3720QM.

| Browser            | Ordnung ops/sec      | Other ops/sec        |
| ------------------ |:--------------------:|:--------------------:|
| Chrome 46          | 32.26                | 10.64                |
| Firefox 41         | 19.23                | 0.39                 |
| Safari 8           | 29.41                | 8.85                 |

## License

Ordnung.js is licensed under [MIT](https://opensource.org/licenses/MIT).    
You may use this library at will – if you mention the author.

## Credits
Inspired by Isotope by [Metafizzy](http://metafizzy.co)    
Made by [Paul Solbach](http://twitter.com/___paul)
