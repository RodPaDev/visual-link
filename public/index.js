var SLL_Node = (function () {
    function SLL_Node(data) {
        this.next = null;
        this.data = data;
    }
    return SLL_Node;
}());
var SLL = (function () {
    function SLL() {
        this.head = null;
    }
    SLL.prototype.append = function (data) {
        var newNode = new SLL_Node(data);
        if (this.head == null) {
            this.head = newNode;
            this.incrementLength();
            return this.len();
        }
        var last = this.head;
        while (last.next) {
            last = last.next;
        }
        last.next = newNode;
        this.incrementLength();
        return this.len();
    };
    SLL.prototype.decrementLength = function () {
        this.length -= 1;
    };
    SLL.prototype.incrementLength = function () {
        this.length += 1;
    };
    SLL.prototype.len = function () {
        return this.length;
    };
    SLL.prototype.printV = function () {
        var values = [];
        var last = this.head;
        while (last) {
            values.push(last.data);
            last = last.next;
        }
        console.log("[\"" + values.join('", "') + "\"]");
    };
    return SLL;
}());
var SLL_NODE = new SLL();
var list = new SLL();
list.append('First Data');
list.append('Second Data');
list.append('Third Data');
list.append('Fourth Data');
list.append('Fifth Data');
list.printV();
//# sourceMappingURL=index.js.map