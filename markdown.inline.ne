# https://github.com/jgm/peg-markdown/blob/master/markdown_parser.leg#L421

@{%
const appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
const appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
const empty = function (d) { return []; };
const emptyStr = function (d) { return ""; };

const wrap = (el, idx)=>(d)=>`<${el}>${d[idx]}</${el}>`;

//const wrap = (el, body)=>`<${el}>${body}</${el}>`
const test = (a,b)=>{
	console.log('a', a);
	console.log('b', b);
}
%}

page -> text:+			{% function([i]){ return i.join('') } %}


text -> span text 		{% function([t, c]){ return t.concat(c)} %}
	  | span	 		{% function([t]){ return t} %}



strong -> "*" text "*"	{% wrap('strong', 1) %}
italic -> "_" text "_"	{% wrap('em', 1) %}

span -> strong | italic | regText 	{% id %}

regText -> [^\n\r",] {% id %}




chars -> char:* {% id %}
char              -> [^\n\r",]                       {% id %}





ps -> [\s]:* [^\n]:* [\s]:* 			{%  ([,str,])=>str.join('')  %}
_            -> [\s]:+                          {% id %}
newline      -> "\r" "\n"                       {% empty %}
              | "\r" | "\n"                     {% empty %}