function SingleLinkedList() {
	this._root = null;
}

SingleLinkedList.prototype = {
	constructor: SingleLinkedList,
	add: function(value) {
		var node = {
			value : value,
			pointer : null
		},
		current;
		if(this._root === null) {
			this._root = node;
		} else {
			current = this._root;
			while (true){
				if (current.pointer === null) {
					current.pointer = node;
					break;
				} else {
					current = current.pointer;
				}
			}
		}
	},
	printRoot: function() {
		console.log(this._root);
	},
	traverse: function (node) {
		if(node != null) {
			console.log(node.value);
			this.traverse(node.pointer);
		} else {
			console.log ("Node is null");
		}
	},
	search: function(node) {
		var a = false; root = this._root;
		while (a != true && root != null) {
			if ( node != root.value) {
				root = root.pointer;
			}
			else {
				a = true;
				console.log ("Found");
			}
		}
		if (a == false) {
		console.log("Not Found");
		}
	},
	reverse: function(node) {
		var next1 = null;
		while (true) {
			var next;
			if(next1 != null){
				next = next1;
			} else{
				next = node.pointer;
				node.pointer = null;
			}
			next1 = next.pointer;
			next.pointer = node;
			node = next;

			if (next1 === null) {
				this._root = node;	
				break;
			}
		}
	}		
}

var ll = new SingleLinkedList();
ll.add(1);
ll.add(3);
ll.add(4);
ll.add(12);
ll.add(17);
ll.add(10);
ll.add(7);
ll.add(9);
ll.printRoot();
ll.traverse(ll._root);
ll.search(13);
ll.reverse(ll._root);
ll.traverse(ll._root);