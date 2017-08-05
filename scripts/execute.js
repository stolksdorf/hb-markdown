const fs = require('fs');

const nearley = require('nearley');

const grammar = require('../markdown.js');
var parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart);


const input = fs.readFileSync('./tests/test.txt', 'utf8');

parser.feed(input);

console.log(JSON.stringify(parser.results, null, '  '));