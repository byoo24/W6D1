const MovingObject = require('./movingObject.js');
const Util = require('./util.js');


function Asteroid() {
    this.COLOR = "#777"; 
    this.RADIUS = 35;

}

Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid;