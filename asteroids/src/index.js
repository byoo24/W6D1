const MovingObject = require('./movingObject.js');
const Asteroid = require('./asteroid.js');


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    window.MovingObject = MovingObject;
    
    const mo = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00" });
    mo.draw(ctx);


    window.as = new Asteroid();

});

