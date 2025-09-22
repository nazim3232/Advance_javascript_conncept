console.log("This is the advance javascript ");
let a = 9;
let b = 90;
let c = 78;
console.log(a + b + c);
//This is the advance javascript concept of the people of this country and this is not the father and not the mother of this

//scope of in the javascript;
//console.log
//console.log(a1); // it will give error because a1 is not defined in this scope  
let a1 = 10;
function outer()
{
    let b1 = 11;
    console.log(a1);
    console.log(b1);    
    //console.log(c1); // it will give error because c1 is not defined in this scope
    function inner()
    {
        let c1 = 12;
        console.log(a1);
        console.log(b1);
        console.log(c1);
    }
    inner();
}
outer();
console.log("This is evrythting about the closure in the javascript");
console.log("Let's state the closure in the javascript");   
function closure()
{
    let count = 0;
     return function()
    {
        count++;
        return count;
    }
}
let getCounter = closure();
console.log(getCounter());
console.log(getCounter());
console.log(getCounter());
//this is the ending of the closure in the javascript
console.log("This is the ending of the closure in the javascript");
console.log("This is the currying in the javascript");

//f(a)(b)(c)

//this concept is called the carrying in the javascript.
//How to use apply bind and call in the javascript


