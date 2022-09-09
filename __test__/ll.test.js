const LinkedList = require('../ll');

describe('test ll insert', () => {
    it('test llinsert first', () => {
        const ll = new LinkedList();
        ll.insert(2);
        ll.insert(3);
        expect(ll).toBeDefined();
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head.value).toEqual(3);
        expect(ll.head.next.value).toEqual(2);
        expect(ll.head.next.next).toBeNull();

    });

});

// describe('test ll ')