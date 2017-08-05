@{%
var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };

var wrap = (el, body)=>{
	return `<${el}>${body}</${el}>`
};

var test = (a,b)=>{
	console.log('a', a);
	console.log('b', b);
}
%}




#ulist  -> ulistItem						{% ([items])=>wrap('ul', items)  %}
#		| ulist newline ulistItem		{% ([list,,items2])=>test(list, items2) %}

# ulistItem -> "*" string				{% ([,str]) => wrap('li', str) %}



page		-> ulist:+			{% ([i])=>i.join('') %}

ulist 		-> ulistItem:+					{% ([items])=>wrap('ul', items.join('')) %}
			 | ulistItem:+ newline newline	{% ([items])=>wrap('ul', items.join('')) %}
ulistItem 	-> "*" _ ps						{% ([,ws,str])=>wrap('li', str) %}



#page     -> (list line | line):* list:?  {% ([pairs, last]) => [].concat(...pairs, last || []) %}

#list      -> ulist | olist

# ulist     -> ulistItem:+                   {% ([items]) => `<ul>\n${items.join('\n')}\n</ul>` %}



#olist     -> olistItem:+                   {% ([items]) => `<ol>\n${items.join('\n')}\n</ol>` %}
#olistItem -> "\n" [0-9]:+ "." _ string                {% (data)=>`\t<li>${data[4]}</li>` %}


#line     -> "\n" string                 {% ([, str]) => str %}
#string   -> [^\n*]:*                    {% ([chars]) => chars.join("") %}


ps2 -> [^\n\n]:*		{% ([str])=>str.join('').trim() %}

ps -> [\s]:* [^\n]:* [\s]:* 			{%  ([,str,])=>str.join('')  %}
_            -> [\s]:+                          {% id %}
newline      -> "\r" "\n"                       {% empty %}
              | "\r" | "\n"                     {% empty %}