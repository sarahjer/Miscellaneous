function BinarySearchTree() {
	this._root = null;
}
BinarySearchTree.prototype = {
  constructor: BinarySearchTree,
	add: function(value) {
		var node = {
			value: value,
			left: null,
			right: null
		},
		current;
		if (this._root === null) {
			this._root = node;
		} else {
			current = this._root;
			while (true) {
				if (value < current.value) {
					if (current.left === null) {
						current.left = node;
						break;
					} else {
						current = current.left;
					}
				} else if (value > current.value) {
					if (current.right === null) {
						current.right = node;
						break;
					} else {
						current = current.right;
					}
				} else {
					break;

				}
			}
		}
	},
	printRoot: function() {
		console.log(this._root);
	},
}

var bt = new BinarySearchTree();
bt.add(4);
bt.printRoot();
