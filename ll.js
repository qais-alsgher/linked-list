const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }


}

module.exports = LinkedList;