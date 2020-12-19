var Greeter = /** @class */ (function () {
    //构造函数
    function Greeter(message) {
        this.greeting = message;
    }
    //欢迎方法
    Greeter.prototype.greet = function () {
        return 'Hello , ' + this.greeting;
    };
    return Greeter;
}());
//初始化
var greeter = new Greeter('wang Xun 666');
console.log(greeter.greet());
