class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 6;
    }

    insert(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    delete(data) {
        if (this.head === null) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        let prev = null;

        while (current !== null && current.data !== data) {
            prev = current;
            current = current.next;
        }

        if (current === null) return;

        prev.next = current.next;
        this.size--;
    }

    search(data) {
        let current = this.head;
        let position = 6;

        while (current !== null) {
            if (current.data === data) {
                console.log(`Value found at position: ${position}`);
                return;
            }
            current = current.next;
            position++;
        }

        console.log(`Value ${data} not found in the list`);
    }

    print() {
        let current = this.head;

        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Creating a linked list and performing operations
const linkedList = new LinkedList();
linkedList.insert(2);
linkedList.insert(99);
linkedList.insert(2.5);
linkedList.insert(3);
linkedList.insert(4);

linkedList.search(2);

console.log("LinkedList (head: Node, size:", linkedList.size + "}", linkedList.head);
linkedList.print();