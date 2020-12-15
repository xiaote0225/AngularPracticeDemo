var ab = { a: 1, b: 1 };
var a = ab;
var b = ab;
var xy = { p: ab };
var f = function (a, b) { };
f('hello', 'world');
f(1, 2);
f(1, "test");
