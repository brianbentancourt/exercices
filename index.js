const wr = require('./exercices/wordRepetitions')


// Word occurrences
const text = 'Hello! hello, HELLO, how are you? welcome to my repo,'
const word = 'hello'
const occurrences = wr.wordRepetitions(text, word)
console.log(`Occurrences of ${word}: `, occurrences)
