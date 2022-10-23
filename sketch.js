let walls = [];
let ray;
let dot;

function setup() {
  createCanvas(1000, 700);
  for (let i = 0; i < 10; i++){
    walls.push(new Wall(random(width),random(height),random(width),random(height)));
  }
  walls.push(new Wall(0,0, width, 0));
  walls.push(new Wall(0,0, 0, height));
  walls.push(new Wall(width,0, width, height));
  walls.push(new Wall(0,height, width, height));
  ray = new Ray(100,200);
  dot = new Dot();
}

function draw() {
  background(0);
  for (let wall of walls){
    wall.show();
  }
  dot.show();
  dot.look(walls);
  dot.update(mouseX, mouseY);
}

