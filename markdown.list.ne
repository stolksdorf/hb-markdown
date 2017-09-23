@{%
var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };

var wrap = (el, body)=>`<${el}>${body}</${el}>`
var test = (a,b)=>{
	console.log('a', a);
	console.log('b', b);
}
%}

page		-> ulist:+			{% ([i])=>i.join('') %}

ulist 		-> ulistItem:+					{% ([items])=>wrap('ul', items.join('')) %}
			 | ulistItem:+ newline newline	{% ([items])=>wrap('ul', items.join('')) %}
ulistItem 	-> "*" _ ps						{% ([,ws,str])=>wrap('li', str) %}


ps -> [\s]:* [^\n]:* [\s]:* 			{%  ([,str,])=>str.join('')  %}
_            -> [\s]:+                          {% id %}
newline      -> "\r" "\n"                       {% empty %}
              | "\r" | "\n"                     {% empty %}