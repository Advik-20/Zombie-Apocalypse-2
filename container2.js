class Container2 {
    constructor(x, y, width, angle) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, width, options);
      this.width = width;
      this.height = 20;
      Matter.Body.setAngle(this.body,angle);

      World.add(world, this.body);

      Matter.Body.setStatic(this.body,true);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };