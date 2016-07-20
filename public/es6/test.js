/*global console*/
'use strict';

const sentences = [
    {subject: 'Books', verb: 'are', object: 'tough'},
    {subject: 'Code', verb: 'writes', object: 'itself'}
];

function say({subject, verb, object}) {
    console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentences) {
    say(s);
}