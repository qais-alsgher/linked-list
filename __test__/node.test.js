const Node = require('../node');

describe('test node', () => {
    it('test create node', () => {
        const node = new Node('qais');
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual('qais');
        expect(node.next).toBeNull();
    })
});
