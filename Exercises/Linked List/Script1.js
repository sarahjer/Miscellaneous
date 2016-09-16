function DoubleLinkedList(){
	this._root = null;
}

DoubleLinkedList.prototype = {
	constructor: DoubleLinkedList,
	add: function (value) {
		var node = {
			value: value,
			left: null,
			right: null
		},
		current;
		if (this._root === null) {
			this._root = node;
		}
		else {
			current = this._root;
			while (true) {
				if (current.right == null) {
					current.right = node;
					node.left = current;
					break;
				}
				else {
					current = current.right;
				}
			}
		}
	},
	traverse: function (node) {
		if(node != null) {
			console.log(node.value);
			this.traverse(node.right);
		} else {
			console.log ("Node is null");
		}
	},
}

var dll = new DoubleLinkedList();
dll.add(2);
dll.add(4);
dll.add(8);
dll.add(16);
dll.add(32);
dll.add(64);
dll.add(128);
dll.traverse(dll._root);