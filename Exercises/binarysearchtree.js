function BinarySearchTree() {
		this._root = null;
		BinarySearchTree.prototype = {
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
		}
};
BinarySearchTree ();
