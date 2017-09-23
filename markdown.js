const Nearley = require('nearley');

/** Generated by Nearley **/
function id(x) {return x[0]; }

var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };

var wrap = (el, body)=>`<${el}>${body}</${el}>`
var test = (a,b)=>{
	console.log('a', a);
	console.log('b', b);
}


var appendItem = function (a, b) { return function (d) { return d[a].concat([d[b]]); } };
var appendItemChar = function (a, b) { return function (d) { return d[a].concat(d[b]); } };
var empty = function (d) { return []; };
var emptyStr = function (d) { return ""; };

var wrap = (el, body)=>`<${el}>${body}</${el}>`
var test = (a,b)=>{
	console.log('a', a);
	console.log('b', b);
}
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "page$ebnf$1", "symbols": ["ulist"]},
    {"name": "page$ebnf$1", "symbols": ["page$ebnf$1", "ulist"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "page", "symbols": ["page$ebnf$1"], "postprocess": ([i])=>i.join('')},
    {"name": "ulist$ebnf$1", "symbols": ["ulistItem"]},
    {"name": "ulist$ebnf$1", "symbols": ["ulist$ebnf$1", "ulistItem"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ulist", "symbols": ["ulist$ebnf$1"], "postprocess": ([items])=>wrap('ul', items.join(''))},
    {"name": "ulist$ebnf$2", "symbols": ["ulistItem"]},
    {"name": "ulist$ebnf$2", "symbols": ["ulist$ebnf$2", "ulistItem"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ulist", "symbols": ["ulist$ebnf$2", "newline", "newline"], "postprocess": ([items])=>wrap('ul', items.join(''))},
    {"name": "ulistItem", "symbols": [{"literal":"*"}, "_", "ps"], "postprocess": ([,ws,str])=>wrap('li', str)},
    {"name": "ps$ebnf$1", "symbols": []},
    {"name": "ps$ebnf$1", "symbols": ["ps$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ps$ebnf$2", "symbols": []},
    {"name": "ps$ebnf$2", "symbols": ["ps$ebnf$2", /[^\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ps$ebnf$3", "symbols": []},
    {"name": "ps$ebnf$3", "symbols": ["ps$ebnf$3", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ps", "symbols": ["ps$ebnf$1", "ps$ebnf$2", "ps$ebnf$3"], "postprocess": ([,str,])=>str.join('')},
    {"name": "_$ebnf$1", "symbols": [/[\s]/]},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": id},
    {"name": "newline", "symbols": [{"literal":"\r"}, {"literal":"\n"}], "postprocess": empty},
    {"name": "newline", "symbols": [{"literal":"\r"}]},
    {"name": "newline", "symbols": [{"literal":"\n"}], "postprocess": empty},
    {"name": "page$ebnf$1", "symbols": ["ulist"]},
    {"name": "page$ebnf$1", "symbols": ["page$ebnf$1", "ulist"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "page", "symbols": ["page$ebnf$1"], "postprocess": ([i])=>i.join('')},
    {"name": "ulist$ebnf$1", "symbols": ["ulistItem"]},
    {"name": "ulist$ebnf$1", "symbols": ["ulist$ebnf$1", "ulistItem"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ulist", "symbols": ["ulist$ebnf$1"], "postprocess": ([items])=>wrap('ul', items.join(''))},
    {"name": "ulist$ebnf$2", "symbols": ["ulistItem"]},
    {"name": "ulist$ebnf$2", "symbols": ["ulist$ebnf$2", "ulistItem"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ulist", "symbols": ["ulist$ebnf$2", "newline", "newline"], "postprocess": ([items])=>wrap('ul', items.join(''))},
    {"name": "ulistItem", "symbols": [{"literal":"*"}, "_", "ps"], "postprocess": ([,ws,str])=>wrap('li', str)},
    {"name": "ps2$ebnf$1", "symbols": []},
    {"name": "ps2$ebnf$1", "symbols": ["ps2$ebnf$1", /[^\n\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ps2", "symbols": ["ps2$ebnf$1"], "postprocess": ([str])=>str.join('').trim()},
    {"name": "ps$ebnf$1", "symbols": []},
    {"name": "ps$ebnf$1", "symbols": ["ps$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ps$ebnf$2", "symbols": []},
    {"name": "ps$ebnf$2", "symbols": ["ps$ebnf$2", /[^\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ps$ebnf$3", "symbols": []},
    {"name": "ps$ebnf$3", "symbols": ["ps$ebnf$3", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ps", "symbols": ["ps$ebnf$1", "ps$ebnf$2", "ps$ebnf$3"], "postprocess": ([,str,])=>str.join('')},
    {"name": "_$ebnf$1", "symbols": [/[\s]/]},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": id},
    {"name": "newline", "symbols": [{"literal":"\r"}, {"literal":"\n"}], "postprocess": empty},
    {"name": "newline", "symbols": [{"literal":"\r"}]},
    {"name": "newline", "symbols": [{"literal":"\n"}], "postprocess": empty}
]
  , ParserStart: "page"
}
/** End **/

const CompiledGrammar = new Nearley.Parser(
		grammar.ParserRules,
		grammar.ParserStart
	).grammar;

module.exports = (input)=>{
	const output = (new Nearley.Parser(CompiledGrammar)).feed(input);
	return output.results[0].join('\n');
};