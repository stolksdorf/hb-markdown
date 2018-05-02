const test = require('ava')
const brewdown = require('./brewdown.js');


test.only('headers',(t)=>{});
`# hello ^there*^ yo* ^

## Neat *guy*`,

test.only('list',(t)=>{});
`- *this* is a list
- how [cool](neato) is this`,

test.only('codeblock',(t)=>{});
`\`\`\`
- *this* is a list
- how cool is this
\`\`\``,

test.only('blocks',(t)=>{});
`{{this,is

## yo \`javascript\`

is *a* block}}`,


test.only('blocks',(t)=>{t.is(brewdown(
`{{this,is

## yo \`javascript\`

is *a* block}}`
),
`<div class='this is'><h2 id='yo_javascript'>yo <code>javascript
</code></h2><p>
is <strong>a</strong> block</p></div>`
)});





test('image',(t)=>{t.is(brewdown(
`![](http://i.imgur.com/sjNZ4os.gif)
![cool gif](http://i.imgur.com/sjNZ4os.gif)`
),
`<p><img src='http://i.imgur.com/sjNZ4os.gif' />
<img class='cool gif' src='http://i.imgur.com/sjNZ4os.gif' /></
p>`
)});







