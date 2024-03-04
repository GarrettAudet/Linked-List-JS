class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(value){
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    getSize() {
        return this.size;
    }

    getHead(){
        return this.head;
    }

    getTail(){
        return this.tail;
    }

    at(index){
        if (index < 0 || index >= this.size) return null; 
        let current = this.head;
        let currentIndex = 0;
        while (current) {
            if (currentIndex === index) {
                return current;
            }
            current = current.nextNode;
            currentIndex++;
        }
        return null; 
    }

    pop(){
        if (!this.head) return null;
        let removedValue;
        if (!this.head.nextNode) { 
            removedValue = this.head.value;
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while (current.nextNode.nextNode) {
                current = current.nextNode;
            }
            removedValue = current.nextNode.value;
            current.nextNode = null;
            this.tail = current;
        }
        this.size--;
        return removedValue;
    }

    contains(value){
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
    
        return false;
    }

    find(value){
        let current = this.head;
        let index = 0;
    
        while (current) {
            if (current.value === value) {
                return index; 
            }
            current = current.nextNode;
            index++;
        }
    
        return null; 
    }

    toString() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.nextNode;
        }
        return result.join(' -> ');
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) return false; 

        const newNode = new Node(value);
    
        if (index === 0) { 
            newNode.nextNode = this.head;
            this.head = newNode;
            if (!this.tail) {
                this.tail = newNode;
            }
        } else if (index === this.size) { 
            this.tail.nextNode = newNode;
            this.tail = newNode;
        } else { 
            let current = this.head;
            let prev = null;
            let currentIndex = 0;
    
            while (currentIndex < index) {
                prev = current;
                current = current.nextNode;
                currentIndex++;
            }
    
            prev.nextNode = newNode;
            newNode.nextNode = current;
        }
    
        this.size++;
        return true;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size || !this.head) return null; 

        let removedValue;
        if (index === 0) { 
            removedValue = this.head.value;
            this.head = this.head.nextNode;
            if (!this.head) {
                this.tail = null; 
            }
        } else {
            let current = this.head;
            let prev = null;
            let currentIndex = 0;
    
            while (currentIndex < index) {
                prev = current;
                current = current.nextNode;
                currentIndex++;
            }
    
            removedValue = current.value;
            prev.nextNode = current.nextNode;
    
            if (!current.nextNode) {
                this.tail = prev; 
            }
        }
    
        this.size--;
        return removedValue;
    }
}

// Test all the functions
const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
console.log("List after append:", list.toString());

list.prepend(0);
console.log("List after prepend:", list.toString());

console.log("Size of the list:", list.getSize());

console.log("Head of the list:", list.getHead());

console.log("Tail of the list:", list.getTail());

console.log("Node at index 2:", list.at(2));

console.log("Popped value:", list.pop());
console.log("List after pop:", list.toString());

console.log("Does the list contain 2?", list.contains(2));
console.log("Does the list contain 3?", list.contains(3));

console.log("Index of value 2:", list.find(2));
console.log("Index of value 3:", list.find(3));

list.insertAt(2.5, 2);
console.log("List after insertAt:", list.toString());

list.removeAt(2);
console.log("List after removeAt:", list.toString());

console.log("List as a string:", list.toString());
