import { sum } from "./operations.mjs"

var y='global';
console.log("value of y in globle scope:"+y);
function fun(){
    var y='functional';
    console.log("value of y in functional scope:"+y);
    {
        const y="block";
        console.log("value of y in block scope:"+y);
    }
};
fun();
function lex(){
    console.log("value of y in lexical scope:"+y);
}
lex();
console.log(sum(10,5));