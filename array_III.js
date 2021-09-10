// Custom Array

function CustomArray(){
    Object.defineProperty(this, "length", {
        value: arguments.length,
        writable: true,
        enumerable: false
    });
    for( var i = 0; i < arguments.length; i++ ){
        this[i] = arguments[i];
    }
}

// Pushing an element in the Custom Array
CustomArray.prototype.pushValue = function( value ){
    this[this.length++] = value;
}

// Reversing the Custom Array
CustomArray.prototype.reverseArray = function(){
    var rev = new CustomArray();
    for( var i = this.length-1; i >= 0; i-- ){
        rev.pushValue( this[i] );
    }
    return rev;
}

// Returning the first element
CustomArray.prototype.firstElement = function(){
    return this[0];
}

// Printing Custom Array in the array format
CustomArray.prototype.printArray = function(){
    var str = "[ ";
    for( var i = 0; i < this.length-1; i++ ){
        str += this[i] + ", ";
    }
    
    str += `${this[this.length-1]} ]`;
    return str;
}

// Creating the object of Custom Array
var arr = new CustomArray( 1, 3, 5, 7, 9 );
console.log( arr );
arr.pushValue( 11 );
arr.pushValue( 12 );
arr.pushValue( 14 );
arr.pushValue( 19 );
console.log( arr );
console.log( arr.reverseArray() );
console.log( arr.firstElement() );

console.log( arr.printArray() );
