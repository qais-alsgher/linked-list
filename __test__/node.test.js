const Node = require('../node');

describe('test node', () => {
    it('test create node', () => {
        const val = 'qais';
        const node = new Node(val);
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual('qais');
    })
})