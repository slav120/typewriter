const sentence = "hello there from lighthouse labs";
​
​
// for (const char of sentence) {
//   setTimeout(function(){
//     process.stdout.write(char);
//   }, 1000)
​
​
function typeOut(index) {
  if (index === sentence.length) {
    return process.stdout.write("\n"); 
  }
  setTimeout(function() {
    process.stdout.write(sentence[index++]);
    typeOut(index);
  },100);
}
​
typeOut(0);