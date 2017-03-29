function BinarySearchTree() {
	this._root = null;
	console.log('Object initialized');
}
var length = 0;
var l = 0;
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
		console.log("Value of root is: " + this._root.value);
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
		var largest = node;
		while (node != null) {
			var parentNode = node;
			var rightFlag = false;
			if (node.right != null) {
				node = node.right;
				rightFlag = true;
			}	
			else if (node.left != null) {
				node = node.left;
			} 
			else {
				break;
			}	
			if(largest.value < node.value){
				largest = node;
			}
			if(node.right == null && node.left == null && rightFlag) {
				if(node.value >= largest.value){
					node = parentNode;
				} 
				break;
			}
		}
		console.log(node.value);
	},
	findHeight: function(node){
		if(!node) return 0;
		var leftHeight = this.findHeight(node.left);
   		var rightHeight = this.findHeight(node.right);

   return Math.max(leftHeight, rightHeight) + 1;
	}
}


var bt = new BinarySearchTree();

bt.add(17);
bt.add(5);
bt.add(20);
bt.add(10);
bt.add(25);
bt.add(21);
bt.add(23);
bt.add(14);
bt.add(8);
bt.printRoot();
console.log(bt.traverse(bt._root));
bt.search(9);
bt.secondLargest(bt._root);
console.log(bt.findHeight(bt._root));
