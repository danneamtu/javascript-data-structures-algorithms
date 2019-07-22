const Node = require('./validate')
const validate = require('./validate')

test('validate recognizes a valid Binary Search Tree', () => {
    const n = new Node(10)
    n.insert(5)
    n.insert(15)
    n.insert(0)
    n.insert(20)
    expect(validate(n)).toEqual(true)
})