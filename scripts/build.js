
const fs = require('fs');

var nearley = require("nearley");

console.log('nearley', nearley);
console.log('Grammar', nearley.Grammarr);

const grammar = fs.readFileSync('./markdown.ne', 'utf8');


/*
console.log(grammar);

const res = Compile(grammar, {});

console.log(res);

// Create a Parser object from our grammar.
var p = new nearley.Parser(grammar.ParserRules, grammar.ParserStart);

// Parse something
p.feed("1+1");
// p.results --> [ ["sum", "1", "1"] ]

console.log(p);

*/