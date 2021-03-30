const text = 'Hello! hello, HELLO, how are you? welcome to my repo,'

const normalize = str => str.toLowerCase().replace(/[.!,:;¿?]/g, '')

const wordRepetitions = (text, word) =>
    normalize(text).split(' ')
        .reduce((acc, e) => {
            if (e === normalize(word))
                return acc.set(e, (acc.get(e) || 0) + 1)
            return acc
        }, new Map()).values().next().value


const word = 'hello'
const occurrences = wordRepetitions(text, word)
console.log(`Occurrences of ${word}: `, occurrences)
