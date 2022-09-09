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

describe('test ll insert ', () => {
    it('test insert last', () => {
        const ll = new LinkedList();
        ll.insert(2);
        ll.insert(3);
        ll.append(55);
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.tail.value).toEqual(55);
        expect(ll.tail.next).toBeNull();
        expect(ll.head.value).toEqual(3);
        expect(ll.head.next.value).toEqual(2);
    })
})