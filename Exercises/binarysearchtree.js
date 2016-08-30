function BinarySearchTree{
	this._root=null;

	BinarySearchTree.prototype{

		contains : function(value){
			var found=false,
					current=this._root;

					if(value<this._root){
						current=current.left;
					}
					else if(value>this._root_){
						current=current.right;
					}
					else {
						found=true
					}
				return found;
		},

    add: function(value){
		var node = {
			value:value;
			left:null;
			right:null;
		},
		if (this._root===null){
			this._root=node;
		}
		else {
			current=this._root;

		while (true){
			if(value < current.value){
				if(current===null){
					current.left=node;
					break;
				}
				else {
					current=current.left;
				}
			}
			else if (value > current.value) {
				if(current===null){
					current.right=node;
					break;
				}
				else {
					current=current.right;
				}
			}
			else {
				break;
			}
		}
		}
	},
	}
};
