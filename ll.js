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

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    numberNode() {
        let num = 0;
        let curentNode = this.head;
        while (curentNode.next) {
            curentNode = curentNode.next;
            num++;
        }
        return num;
    }

    deleteMidle() {
        if (!this.head) {
            console.log('the list is empty')
        } else if (!this.head.next || !this.head.next.next) {
            this.head = null;
            this.tail = null
        } else {
            const num = this.numberNode();
            let previousND = this.head;
            for (let i = 0; i < (Math.ceil(num / 2) - 2); i++) {
                previousND = previousND.next;
            }
            if (num % 2 === 0) {
                const deleteNode = previousND.next;
                previousND.next = deleteNode.next;
                deleteNode.next = null;
            } else {
                const deleteNode = previousND.next.next;
                previousND.next = deleteNode.next;
                deleteNode.next = null;
            }
        }
    }




    // insertInTo(value) {
    //     let curentNode = this.head;
    //     while ()
    // }



    displiy() {
        curentNode = this.head;
        while (curentNode.next) {
            console.log(curentNode);
            curentNode.next;
        }
    }
}
module.exports = LinkedList;