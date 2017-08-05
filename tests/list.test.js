const test = require('ava');
const fs = require('fs');
const N = require('nearley-there');


const Markdown = (txt)=>{
	//console.log(N.parse(fs.readFileSync('./markdown.ne', 'utf8'), txt));
	var res = N.parse(fs.readFileSync('./markdown.ne', 'utf8'), txt)
	if(res instanceof Error) throw res;
	return res;

}

/** Unordered Lists **/

test.only('basic unordered list', (t)=>{
	const result = Markdown(`* test
* test2`);

	t.is(result, `<ul><li>test</li><li>test2</li></ul>`);
});

test('spacing unordered list', (t)=>{
	const result = Markdown(`*    test      space`);
	t.is(result, `<ul><li>test space</li></ul>`);
});

test.only('split unordered list', (t)=>{
	const result = Markdown(`* test

* test2
* test3`);

	console.log('RESULT', result);


	t.is(result,
		`<ul><li>test</li></ul>` +
		`<ul><li>test2</li><li>test3</li></ul>`
	);
});


test('multiline item', (t)=>{
	const result = Markdown(`* hey
 there
* test`);

	t.is(result, `<ul><li>hey there</li><li>test</li></ul>`);
});



/** Ordered Lists **/

test('basic ordered list', (t)=>{
	const result = Markdown(`
1. test
2. test2
1. test3`);

	console.log(result);

	t.is(result, `<ol>
	<li>test</li>
	<li>test2</li>
	<li>test3</li>
</ol>`);
});