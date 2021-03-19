class Box
{
    constructor(x,y,width,height)
    {
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 0.0,
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display()
    {
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        fill(rgb(135,206,235));
        rotate(angle);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}