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
			length++;
			console.log(node.value);
			this.traverse(node.pointer);
		} 
		// console.log(length);
		// length = 0;
		return length;
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
	},
	delete: function(node) {
		console.log('Delete method start ****');
		current = this._root;
		var prev = null;
		while(true) {
			if(node != current.value) {
				prev = current;
				current = current.pointer;
				console.log(prev);
				console.log(current);
			} else {
				prev.pointer = current.pointer;
				break;
			}
			if(current == null){
				break;
			}
		}
		console.log('Delete method end ****');
	},
	removeDuplicates: function() {
		var current = this._root;
		var obj = {};
		var prev = null;
		while(current != null){
			var ch = current.value;
			if(!obj[ch]){
				prev = current;
				obj[ch] = true;
			} else {
				prev.pointer = current.pointer;
			}
			current = current.pointer;
			if(current == null){
				break;
			}
		}
		console.log(obj);
	},
	returnKthtoLast: function(k) {
		current = this._root;
		var j = 0;
		while(true){
			if(k != j){
				current = current.pointer;
				j++;
			} else {
				break;
			}
			var next = current;
		}
		var current1 = this._root;
		while(true){
			if(next != null){
				current1 = current1.pointer;
				next = next.pointer;
			} else {
				break;
			}
		}
		console.log(current1);
	},
	findMidNode: function(node, rt) {
		// console.log("Node:" + node);
			if(node == rt.value || rt.pointer == null) {
				console.log(rt);
				return rt;	
			} 
			
		return this.findMidNode(node, rt.pointer);			
	},
	deleteMidNode: function(node) {
		var n = this.findMidNode(node, this._root);
		console.log("N : " +n);
		console.log(n.pointer);
		if(n == null || n.pointer == null){
			return false;
		} 
		var next = n.pointer;
		n.value = next.value;
		n.pointer = next.pointer;
		return true;
	},
	partition: function(p) {
		var node = this._root;
		var beforeStart = null;
		var beforeEnd = null;
		var afterStart = null;
		var afterEnd = null;

		while(node != null){
			var next = node.pointer;
			node.pointer = null;
			if(node.value < p){
				if(beforeStart == null){
					beforeStart = node;
					beforeEnd = beforeStart;
				} else {
					beforeEnd.pointer = node;
					beforeEnd = node;
				}
			} else {
				if(afterStart == null){
					afterStart = node;
					afterEnd = afterStart;
				} else {
					afterEnd.pointer = node;
					afterEnd = node;
				}
			}
			node = next;
		}
		if(beforeStart == null){
			return afterStart;
		}

		beforeEnd.pointer = afterStart;
		return beforeStart;
		// this.traverse(beforeStart);
	}, 
	sumLists: function(l1, l2){
		var current1 = l1._root;
		var current2 = l2._root; 
		var sum;
		var carry = 0;
		var ll3 = new SingleLinkedList();
		while(current1 != null && current2 != null){
			 sum = current1.value + current2.value + carry;
			 carry = sum >= 10 ? 1 : 0; 
			 if(sum >= 10 ){
			 	sum = sum % 10;
			 }  
			 // if(current1.pointer == null || current2.pointer == null){
			 // 	ll3.add(sum);
			 // 	ll3.add(carry);
			 // } else {
			 // 	ll3.add(sum);
			 // }
			 ll3.add(sum);
			 current1 = current1.pointer;
			 current2 = current2.pointer;	 		 
		}
		if(carry > 0){
			ll3.add(carry);
		}
		return ll3;
	},
	sumListsR: function(l1, l2) {
		var current1 = l1._root;
		var current2 = l2._root; 
		var sum;
		var carry = 0;
		while(current1.pointer != null){
			current1 = current1.pointer;
			current2 = current2.pointer;
		}
		sum = current1.value + current2.value + carry;
		carry = sum >= 10 ? 1 : 0; 
		if(sum >= 10 ){
			sum = sum % 10;
		} 
	}
}


var ll = new SingleLinkedList();
ll.add(9);
ll.add(3);
ll.add(7);
var ll2 = new SingleLinkedList();
ll2.add(6);
ll2.add(7);
ll2.add(1);

// ll.add(6);
// ll.add(5);
// ll.printRoot();
// ll.traverse(ll._root);
// ll.search(10);
// ll.reverse(ll._root);
// ll.traverse(ll._root);
// ll.delete(10);
// ll.traverse(ll._root);
// ll.removeDuplicates();
// ll.traverse(ll._root);
// console.log("****LL2****")
// ll.traverse(ll2._root);
// ll.returnKthtoLast(4);
// ll.findMidNode(12,ll._root);
// ll.deleteMidNode(17);
// ll.traverse(ll._root);
// ll.partition(12);
// ll.traverse(ll._root);
console.log(ll.sumLists(ll, ll2));
ll.sumListsR(ll,ll2);