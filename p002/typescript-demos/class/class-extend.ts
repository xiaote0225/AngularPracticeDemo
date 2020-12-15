class Animal{
    name:string;
    constructor(theName:string){
        this.name = theName;
    }
    move(distanceInmeter:number = 0){
        console.log(`${this.name} moved ${distanceInmeter}m.`);
    }
}

class Snake extends Animal{
    constructor(theName:string){
        super(theName);
    }
    move(distanceInmeter:number = 5){
        console.log('Snake ......');
        super.move(distanceInmeter);
    }
}

class Horse extends Animal{
    constructor(theName:string){
        super(theName);
    }
    move(distanceInmeter:number = 9){
        console.log('Horse ......');
        super.move(distanceInmeter);
    }
}

var snake = new Snake('I am a Snake');
snake.move();

var horse = new Horse('I am a Horse');
horse.move(66);