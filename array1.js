// Custom array

function CustomArray(){
    Object.defineProperty(this, "lengthOfCustomArray", {
        value: 0,
        writable: true,
        enumerable: false
    });
}

CustomArray.prototype.pushing = function(value){
    this[this.lengthOfCustomArray++] = value;
    // this.lengthOfCustomArray++;
}

CustomArray.prototype.popping = function(){
    var poppedElement = this[this.lengthOfCustomArray-1];
    delete this[--this.lengthOfCustomArray];
    return poppedElement;
}

var arr = new CustomArray();
arr.pushing(40);
arr.pushing(38);
arr.pushing(32);
arr.pushing(94);
console.log( arr, arr.lengthOfCustomArray );

console.log( arr.popping() );
console.log( arr.popping() );

console.log( arr, arr.lengthOfCustomArray );

CustomArray.prototype.map = function( callback ){
    
    var resultantArray = new CustomArray();

    for( var index in this ){
        if( this.hasOwnProperty( index ) ){
            var returnedElement = callback( this.index, Number(index), this );
            return returnedElement;
        }
    }

    return resultantArray;
}

function square(a){
    return a*a;
}

var arr1 = arr.map( square );
console.log( arr1 );

