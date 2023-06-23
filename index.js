// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

for (let i = 1; i <= 100; i++) {
  let OP = '';
  if (i % 3 === 0) {
    console.log('google');
  }
  if (i % 5 === 0) {
    console.log('facebook');
  }
  console.log(OP || i);
}
