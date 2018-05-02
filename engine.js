const _ = require('lodash');

const debug = false;
const log=(...args)=>(debug?console.log(...args):null);


const engine = (rules, input)=>{
	const match = _.reduce(rules, (bestMatch, rule, id)=>{
		if(id == 'default') return bestMatch;
		const info = rule.regex.exec(input);
		if(!info) return bestMatch;

		if(!bestMatch || bestMatch.index > info.index){
			info.id = id;
			return info;
		}
		return bestMatch;
	}, null);

	if(!match) return rules.default ? rules.default(input) : input;

	return input.substring(0, match.index)
		+ rules[match.id].render(...match)
		+ engine(rules, input.substring(match[0].length + match.index))

};

module.exports = engine;