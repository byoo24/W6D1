

function MovingObject(obj) {
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
}


MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(50, 50, 80, 0, 2 * Math.PI);
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 20;
    ctx.stroke();
    ctx.fillStyle = 'red';
    ctx.fill();
};


MovingObject.prototype.move = function() {

};



module.exports = MovingObject;