// EdgeCommons for Edge Animate v1.4.0 +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2013 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.

!function(a){var b=function(){};b.VERSION="1.0.0";a.$;b.accessSVG=function(a){if(a.is("div")){var b=a.css("background-image").replace("url(","").replace(")","");b=b.replace('"',"")}else if(a.is("img"))var b=a.attr("src");a.css("background-image","");var c="ec_"+Math.random().toString(36).substring(7);a.append('<embed id="'+c+'" src="'+b+'" type="image/svg+xml" width="100%" height="100%" />');var d=new jQuery.Deferred,e=document.getElementById(c);return e.onload=function(){var a=e.getSVGDocument();a.notify=function(a,b){var c=document.createEvent("CustomEvent");c.initEvent(b,!0,!0),a.dispatchEvent(c)},d.resolve(a,e,c)},d},a.SVG=b}(EdgeCommons);