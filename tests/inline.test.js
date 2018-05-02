const test = require('ava');
const fs = require('fs');
const N = require('nearley-there');


const Markdown = (txt)=>{
	var res = N.parse(fs.readFileSync('./markdown.inline.ne', 'utf8'), txt)
	if(res instanceof Error) throw res;
	return res;

}

/** Bold **/

test('basic formatting', (t)=>{
	t.is(Markdown(`hello *there*`),
		`hello <strong>there</strong>`);

	t.is(Markdown(`hello _there_`),
		`hello <em>there</em>`);
});

test('formatting hanging', (t)=>{
	const result = Markdown(`hello *there_`);
	t.is(result, `hello *there_`);
});

test('nested', (t)=>{
	t.is(Markdown(`why *hello _there_*`),
		`why <strong>hello <em>there</em><strong>`);
});
