class SLL_Node {
    next: SLL_Node;
    data: string;

    constructor(data: string) {
        this.next = null;
        this.data = data;
    }
}

class SLL {
    head: SLL_Node;
    length: number;

    constructor() {
        this.head = null;
    }

    append(data: string): number{
        const newNode = new SLL_Node(data);

        if(this.head == null){
            this.head = newNode;
            this.incrementLength();
            return this.len();
        }

        let last = this.head;

        while(last.next){
            last = last.next;
        }

        last.next = newNode;
        this.incrementLength();
        return this.len();
    }

    decrementLength(){
        this.length -= 1;
    }

    incrementLength(){
        this.length += 1;
    }

    len(): number{
        return this.length;
    }

    printV(){
        let values: Array<string> = [];

        let last = this.head;
        while(last){
            values.push(last.data);
            last = last.next;
        }

        console.log(`["${values.join('", "')}"]`)
    }
}

let SLL_NODE = new SLL()

let list = new SLL();

list.append('First Data');
list.append('Second Data');
list.append('Third Data');
list.append('Fourth Data');
list.append('Fifth Data');
list.printV()
