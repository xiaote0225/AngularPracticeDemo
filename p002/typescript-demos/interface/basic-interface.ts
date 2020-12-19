interface ClockInterface{
    currentTime:Date; //当前时间
}

class Clock implements ClockInterface{
    currentTime: Date;
    constructor(h:number,m:number){}; //构造函数
}