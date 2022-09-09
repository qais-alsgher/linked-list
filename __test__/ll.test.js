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


describe('test ll delete', () => {

    it('test delete middle element when list is empty', () => {
        const ll = new LinkedList();
        ll.deleteMidle();
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head).toBeNull();
        expect(ll.tail).toBeNull();
    });

    it('test delete middle element whene have one or two node', () => {
        const ll = new LinkedList();
        ll.insert(11);
        ll.insert(9);

        ll.deleteMidle();
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head).toBeNull();
        expect(ll.tail).toBeNull();
    });

    it('test delete middle element when numer of node is odd', () => {
        const ll = new LinkedList();
        ll.insert(11);
        ll.insert(9);
        ll.insert(5);
        ll.insert(13);
        ll.insert(14);

        ll.deleteMidle();
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head.next.next.value).toEqual(9);
        expect(ll.tail.next).toBeNull();
    });

    it('test delete middle element when numer of node is even', () => {
        const ll = new LinkedList();
        ll.insert(5);
        ll.insert(8);
        ll.insert(1);
        ll.insert(13);
        ll.insert(14);
        ll.insert(15);
        ll.deleteMidle();
        const size = ll.numberNode();
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head.next.next.value).toEqual(8);
        expect(ll.tail.next).toBeNull();
    })
})