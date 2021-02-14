//blueprint PascalCase
class Box{

//parameter(requires 4 values from you) x,y,w,h
constructor(x, y, w, h){
//place where you define props owned by obj and initialize them

var options = {
    'restitution': 1,
    'density': 1,
    'friction': 1
}

//this is pointing to the owner(object that you create using this blueprint) of the property 
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = w;
this.height = h;
World.add(world, this.body);
}

display(){

    push();
    rectMode(CENTER);
    rotate(this.body.angle);
    translate (this.body.position.x, this.body.position.y)
    rect(0,0, this.width, this.height);
    pop ();
}
}