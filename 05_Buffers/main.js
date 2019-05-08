// Writing to Buffers
buf = new Buffer(256);
len = buf.write("Simply Easy learning");

console.log("Octets written : " + len);

// Reading from Buffers
buf = new Buffer(256)
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined,0,5)); // defaut encode is 'utf8'

// Convert Buffer to JSON
buf = new Buffer('J S O N');
json = buf.toJSON();

console.log(json);

// Concatenate Buffers
var buffer1 = new Buffer('Buffer 1 ');
var buffer2 = new Buffer('Buffer 2 ');
var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log('Concatenate Buffers ' + buffer3.toString());

// Compare Buffers
var result = buffer1.compare(buffer2);

console.log(result);

//Copy Buffer
buffer1 = new Buffer('ABC');
buffer2 = new Buffer(3);
buffer1.copy(buffer2)
console.log('after copy buffer2: ' + buffer2);

// Slice Buffer







