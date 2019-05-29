import argv from 'yargs';
import inq from 'inquirer';
import { typeOptions } from './config/defaultConfig';

argv
.scriptName('intcommit')
.usage('$0 [args]')
.option('t', {
    alias: 'type',
    demandOption: false,
    describe: 'type of commit',
    type: 'string',
    choices: typeOptions
})
.option('s', {
    alias: 'scope',
    demandOption: false,
    describe: 'scope of commit',
    type: 'string'
})
.option('d', {
    alias: 'description',
    demandOption: false,
    describe: 'description of commit',
    type: 'string'
})
.option('b', {
    alias: 'body',
    demandOption: false,
    describe: 'optional body of commit',
    type: 'string'
})
.option('f', {
    alias: 'footer',
    demandOption: false,
    describe: 'optional footer of commit',
    type: 'string'
});

const {type, scope, description, body, footer} = argv.argv;

const commitMessage = `${type}${scope ? `(${scope})` : ''}: ${description && description}`;

console.log(`git commit -m "${commitMessage}"`);
