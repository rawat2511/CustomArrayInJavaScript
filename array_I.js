// Custom Array 

function CustomArray(){
    Object.defineProperty(this, "length", {
        value: arguments.length,
        writable: true,
        enumerable: false
    });
}


var arr = new CustomArray(2, 3, 4, 5, 28, 38, 348, 4848);
console.log( arr.length ); // Output: 8
