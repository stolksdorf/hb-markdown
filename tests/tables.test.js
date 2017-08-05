const test = require('ava');

const Markdown = require('../markdown.js');


test('basic unordered list', (t)=>{
	const result = Markdown(`
* test
* test2

* test
* test4`);

	console.log(JSON.stringify(result, null, '  '));

	t.is(result, 'yo')
})