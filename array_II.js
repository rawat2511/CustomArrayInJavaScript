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

var arr = new CustomArray( 1, 3, 5, 8 , 4, 9 , 12);
console.log( arr );