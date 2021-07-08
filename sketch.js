const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;



var bg,snow;
var snowImg;
var maxDrops=100;
var snowFall=[];



function preload(){

bg=loadImage("snow2.jpg");
snowImg=loadImage("snow4.webp");




}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  if(frameCount%80===0){
    for(var i=0;i<maxDrops;i++){
      snowFall.push(new Snow(random(0,800),10))
    }
  }

}

function draw() {
  background(bg);  
  Engine.update(engine)
  for(var i =0;i<maxDrops;i+=100){
    snowFall[i].display();
    snowFall[i].updateY();
  }
  drawSprites();
}