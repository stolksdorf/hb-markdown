const engine = require('./engine.js');
const _ = require('lodash');

const snakeCase = (text)=>text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s/g, '_');


const blockRules = {
	code : {
		regex : /```\n([^```]+)\n```/,
		render : (lines, code)=>`<pre><code>${code}</code></pre>`
	},
	blocks : {
		regex : /\{\{([a-zA-Z0-9_,]*| )([^\}\}]+)\}\}/,
		render: (line, classes, content)=>{
			return `<div class='${classes.replace(/,/g, ' ')}'>${block(content)}</div>`;
		}
	},
	headers : {
		regex : /(#{1,6}) (.+)\n/,
		render: (line, marks, text)=>{
			return `<h${marks.length} id='${snakeCase(text)}'>${inline(text)}</h${marks.length}>`;
		}
	},
	list : {
		regex : /(\- (.+)\n)+/,
		render : (lines, a, b, c)=>{
			console.log(lines);
			const items = lines.split('\n')
				.map((line)=>`<li>${inline(line.replace('- ', ''))}</li>`)
				.join('\n')
			return `<ul>${items}</ul>`
		}
	},
	// paragraphs : {
	// 	regex: /\n\n([^\n]+)\n/,
	// 	render : (line, text)=>`<p>${inline(text)}</p>`
	// },
};

const inlineRules = {
	code : {
		regex : /`([^`]+)`/g,
		render: (line, text)=>`<code>${text}</code>`
	},
	italics : {
		regex : /_(.+?)_/g,
		render: (line, text)=>`<em>${inline(text)}</em>`
	},
	bold : {
		regex : /\*(.+?)\*/g,
		render: (line, text)=>`<strong>${inline(text)}</strong>`
	},
	sup : {
		regex : /\^(.+?)\^/g,
		render: (line, text)=>`<sup>${inline(text)}</sup>`
	},
	image : {
		regex : /\!\[([^\[]+)\]\(([^\)]+)\)/g,
		render: (line, className, link)=>`<img class='${className}' src='${link}' />`
	},
	hyperlink : {
		regex : /\[([^\[]+)\]\(([^\)]+)\)/g,
		render: (line, text, link)=>`<a href='${link}'>${inline(text)}</a>`
	},
};

const block = (md)=>engine(blockRules, md);
const inline = (md)=>engine(inlineRules, md);

module.exports = block;

