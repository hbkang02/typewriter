const sentence = "hello there from lighthouse labs \n";


//each letter print out seperately
//for each letter print out with delay 50ms
// 
let delay = 50;
function printChar(anything) {
for (const char of sentence) {
  setTimeout (() => {
    process.stdout.write(char);
  }, delay);
  delay = delay + 50;
}
};

printChar(sentence);
