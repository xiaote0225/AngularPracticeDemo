interface A { a : number }
interface B { b : number }
var ab: A & B  = {a : 1, b : 1}

var a : A = ab;
var b : B = ab;

interface X {p: A}
interface Y {p: B}

var xy: X & Y = {p : ab}

type F1 = (a:string,b:string) => void;
type F2 = (a:number,b:number) => void;

var f:F1 & F2 = (a:string|number,b:string | number) => {};

f('hello','world'); //正确
f(1,2); //正确
f(1,"test"); //错误