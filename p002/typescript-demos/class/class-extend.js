var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInmeter) {
        if (distanceInmeter === void 0) { distanceInmeter = 0; }
        console.log(this.name + " moved " + distanceInmeter + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(theName) {
        return _super.call(this, theName) || this;
    }
    Snake.prototype.move = function (distanceInmeter) {
        if (distanceInmeter === void 0) { distanceInmeter = 5; }
        console.log('Snake ......');
        _super.prototype.move.call(this, distanceInmeter);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(theName) {
        return _super.call(this, theName) || this;
    }
    Horse.prototype.move = function (distanceInmeter) {
        if (distanceInmeter === void 0) { distanceInmeter = 9; }
        console.log('Horse ......');
        _super.prototype.move.call(this, distanceInmeter);
    };
    return Horse;
}(Animal));
var snake = new Snake('I am a Snake');
snake.move();
var horse = new Horse('I am a Horse');
horse.move(66);
