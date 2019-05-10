// absolute file path
console.log(__filename);

// absolute directory path
console.log(__dirname);

function printHello() {
    console.log('Hello World!');
}

// call above function after 2 seconds
let t = setTimeout(printHello, 2000);

// clear the timer
clearTimeout(t);

// execute fucntion after every 2 second
setInterval(printHello, 2000);



