console.log("Hey there!")

//target the pic
const fabric = document.querySelector("#pic");
const princess = document.querySelector("#drawing");

//move it to random position
/// create a rand num, assign to var, create a str w/ rand num
/// assign str to top property

let randomWidth = Math.random() * 400; 
console.log(randomWidth);
fabric.style.top = randomWidth + "px";