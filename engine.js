const _ = require('lodash');

const debug = true;
const log=(...args)=>(debug?console.log(...args):null);


const engine = (rules, input)=>{

	log('------');
	log('"' + input +'"');

	const match = _.reduce(rules, (bestMatch, rule, id)=>{
		const info = rule.regex.exec(input);
		if(!info) return bestMatch;

		log(id, info);
		if(!bestMatch || bestMatch.index > info.index){
			info.id = id;
			return info;
		}
		return bestMatch;
	}, null);
	log('best', match);

	if(!match) return input;

	return input.substring(0, match.index)
		+ rules[match.id].render(...match)
		+ engine(rules, input.substring(match[0].length + match.index))

};

module.exports = engine;