function Vehicle(type, speed) {
    this.type = type;
    this.speed = speed;
    
}

Vehicle.prototype.move = function(){
    console.log( this.type + " is moving at speed of " + this.speed);
};

const car = new Vehicle('Car', 100);

car.move();