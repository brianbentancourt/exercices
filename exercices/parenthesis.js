
const isOpen = str => ['(', '{', '['].includes(str)

const closes = (strA, strB) => {
    const pairs = { '(': ')', '{': '}', '[': ']' }
    return pairs[strA] === strB
}

function validate(text) {
    let stack = []
    for (let char of text.split('')) {
        if (isOpen(char)) {
            stack.push(char)
        } else {
            const topChar = stack.pop()
            if (!closes(topChar, char)) {
                return false
            }
        }
    }
    return stack.length === 0
}



exports.validate = validate