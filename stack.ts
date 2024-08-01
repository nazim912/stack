class StackNode<T> {
    value: T;
    next: StackNode<T> | undefined;
    constructor(value: T) {
        this.value = value;
        this.next = undefined;
    }
}

class Stack<T> {
    head: StackNode<T> | undefined;
    constructor() {
        this.head = undefined;
    }
    push(value: T): void {
        const newkNode = new StackNode(value);
        if (this.head === undefined) {
            this.head = newkNode;
        } else {
            newkNode.next = this.head;
            this.head = newkNode;
        }
    }
    pop(): T | undefined {
        if (this.head != undefined) {
            const valuePop = this.head.value;
            this.head = this.head.next;
            return valuePop;
        }
    }
    isEmpty(): boolean {
        return this.head == undefined
    }

    peek(): T | undefined {
        if (this.head != undefined) {
            return this.head.value;
        }
        return undefined
    }

    display(): string {
        let res: string = "";
        let current: StackNode<T> | undefined = this.head;
        while (current !== undefined) {
            if (current.next !== undefined) {
                res += current.value + (" ");
            }
            else {
                res += current.value
            }
            current = current.next;
        }
        return res;
    }
}

// Exemple d'utilisation
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack:", stack.display()); // Affiche: "3 2 1"
console.log("Peek:", stack.peek()); // Affiche: 3
console.log("Pop:", stack.pop()); // Affiche: 3
console.log("Stack après pop:", stack.display()); // Affiche: "2 1"
console.log("Is Empty:", stack.isEmpty()); // Affiche: false
