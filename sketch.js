
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint=Matter.Constraint;
var ground;
var building,b_img;
var knife,knife2,knife4,knife_img;
var ball,rope
box=[];


function preload(){
  b_img=loadImage("cities.gif")
  knife_img=loadImage("Knife.gif")

}
function setup() {
	createCanvas(3000, 700);


	engine = Engine.create();
	world = engine.world;
    ground=new Ground (1500,650,3000,10)

	angleMode(RADIANS)
	
	knife= createSprite(900,90)
	knife.addImage(knife_img)
	knife.scale=0.1

	/*knife2= createSprite(900,300)
	knife2.addImage(knife_img)
	knife2.scale=0.1
	//knife2.velocityY=Math.round(random(20,30))

*/
	ball=new Ball(300,480,100,100)
	rope=new Rope(ball.body,{x:300,y:10})
	//building=createSprite(1030,450)
    //building.addImage(b_img)
	
	for(var i=0;i<8;i++){
		box[i]=new Box(1030,100,70,70)
	}
	for(var i=9;i<17;i++){
		box[i]=new Box(1100,100,70,70)
	}
	for(var i=18;i<26;i++){
		box[i]=new Box(1170,100,70,70)
	}
	for(var i=27;i<35;i++){
		box[i]=new Box(1240,100,70,70)
	}
	
  Engine.run(engine);
}


function draw() {

  background(0);
  
 ground.display()
 for(var i=0;i<8;i++){
	 box[i].display()
 }
 for(var i=9;i<17;i++){
	box[i].display()
}
for(var i=18;i<26;i++){
	box[i].display()
}
for(var i=27;i<35;i++){
	box[i].display()
}

ball.display()
rope.display()
//drawSprites(/
drawSprites();
}

function mouseDragged() {
	
//ball.body.position.x=mouse.x
	
}


