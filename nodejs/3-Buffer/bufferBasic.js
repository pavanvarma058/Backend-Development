const { Buffer } = require("node:buffer");
const buf = Buffer.from("Hello World");
console.log(buf);
console.log("Buffer length:", buf.length);

const buf2 = Buffer.from("Hello, Yeswanth");
console.log(buf2.toString());
console.log(buf.toString("utf-8", 0, 5));

const buf3 = Buffer.from("Hello");
console.log(buf3);
buf3[0] = 0x4a;
console.log(buf3);
console.log(buf3.toString());

const b1 = Buffer.from("Hello");
const b2 = Buffer.from(" Charlie");
const merged = Buffer.concat([b1, b2]);
console.log(merged.toString());
console.log(merged.length);
