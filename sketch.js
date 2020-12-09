const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisions = [];


function setup() {
  createCanvas(800, 800);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(400, height, 800, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }
  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75))
  }

  for (var m = 15; m <= width; m = m + 50) {
    plinkos.push(new Plinko(m, 175))
  }
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }

}

function draw() {
  background(0);
  Engine.update(engine)
  drawSprites();
  ground.display()
  for (var m = 0; m < divisions.length; m++) {
    divisions[m].display();
  }
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }
  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10))
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
}