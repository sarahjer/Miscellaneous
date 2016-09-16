function BinarySearchTree() {
	this._root = null;
	console.log('Object initialized');
}
;
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
	traverse:function (node) {
		if(node != null){
			if(node.right !=null){
				this.traverse(node.right);
			}
			console.log(node.value);
			if(node.left != null){
				this.traverse(node.left);
			}
		}
		else{
			console.log("Node is Null");
		}
	},
	search: function (node) {
		var a = false; root = this._root;
		while (a != true && root != null) {
			if (node > root.value) {
				root = root.right;
			}
			else if (node < root.value) {
				root = root.left;
			}
			else {
				a = true; 
				console.log("Found");
			}
		}	
		if (a == false) {
			console.log("Not Found");
		}
	},
	secondLargest: function (node) {
		while(true){
			var next = node.right;
			if (next.right != null) {
				node = node.right;
				console.log(node);
				}
				else {
					break;
				}
			}
		}
		
}


var bt = new BinarySearchTree();
bt.add(5);
bt.add(3);
bt.add(2);
bt.add(8);
bt.add(4);
bt.add(6);
bt.add(9);
bt.printRoot();
bt.traverse(bt._root);
bt.search(9);
bt.secondLargest(bt._root);
