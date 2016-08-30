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
