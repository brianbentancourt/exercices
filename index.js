const wr = require('./exercices/wordRepetitions')
const parenthesis = require('./exercices/parenthesis')


// Word occurrences
const text = 'Hello! hello, HELLO, how are you? welcome to my repo,'
const word = 'hello'
const occurrences = wr.wordRepetitions(text, word)
console.log(`Occurrences of ${word}: `, occurrences)



// parenthesis
const test1 = '(())'
const test2 = '({()()}[()])'
const test3 = '{[}()}'

const result1 = parenthesis.validate(test1)
console.log(test1, result1)
const result2 = parenthesis.validate(test2)
console.log(test2, result2)
const result3 = parenthesis.validate(test3)
console.log(test3, result3)
