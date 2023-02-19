const sentence = "hello there from lighthouse labs";
let delayInMs = 0;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, delayInMs);// <= 1s delay to make it noticeable. Can dial it down later.
  delayInMs += 50;
}
setTimeout(() => {
  console.log('\n');
}, delayInMs + 500);
