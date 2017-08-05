const test = require('ava');
const fs = require('fs');
const N = require('nearley-there');


const md = fs.readFileSync('./markdown.ne', 'utf8');
const Markdown = (txt)=>N.parse(md, txt)[0];


test('block', (t)=>t.pass())