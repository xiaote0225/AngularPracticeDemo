var x = 1;
let z = 1;
{
    var x = 2;
    let z = 2;
    console.log('x in Function is:'+x);
    console.log('z in Function is:'+z);
}
console.log('x is:'+x);
console.log('z is:'+z);