Function.prototype.inherits = function(Parent) {
    function Surrogate() {};
    Surrogate.prototype = Parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};




function MovingObject(name) { 
    this.name = name;

    MovingObject.prototype.fly = () => { console.log("WOOOOSH"); }
}


function Ship() { 
    Ship.prototype.sink = () => { console.log("SOS"); }
}


function Asteroid() {
    Asteroid.prototype.destroy = () => { console.log("Turned into crater"); }
}



Ship.inherits(MovingObject);
Asteroid.inherits(MovingObject);

console.log(Ship.prototype);


// Ship.prototype = Object.create(MovingObject.prototype);
// Asteroid.prototype = Object.create(MovingObject.prototype);

