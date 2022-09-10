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
    });


    it('test insert last when empty ll', () => {
        const ll = new LinkedList();
        ll.append(55);
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.tail.value).toEqual(55);
        expect(ll.tail.next).toBeNull();
        expect(ll.head.value).toEqual(55);
    });

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
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head.next.next.value).toEqual(8);
        expect(ll.tail.next).toBeNull();
    })
})

// index of element is start from 0
describe('test ll for insert', () => {
    it('test ll for insert in to first ll ', () => {
        const ll = new LinkedList();
        ll.insert(1);
        ll.insert(13);
        ll.insert(14);
        ll.insertInTo(20, 0);
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head.value).toEqual(20);
        expect(ll.head.next.value).toEqual(14);
    });

    it('test ll for insert in to specific location', () => {
        const ll = new LinkedList();
        ll.insert(5);
        ll.insert(8);
        ll.insert(1);
        ll.insert(13);
        ll.insert(14);
        ll.insertInTo(20, 1);
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head.next.value).toEqual(20);
        expect(ll.head.next.next.value).toEqual(13)
    });

    it('test ll for insert in to last ll', () => {
        const ll = new LinkedList();
        ll.insert(1);
        ll.insert(13);
        ll.insert(14);
        ll.insertInTo(20, 3);
        ll.insertInTo(55, 4);
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head.next.next.next.value).toEqual(20);
        // expect(ll.head.next.next.next.next.value).toEqual(55);
        expect(ll.tail.value).toEqual(55);
        expect(ll.head.next.next.next.next.value).toEqual(55);
    });

});