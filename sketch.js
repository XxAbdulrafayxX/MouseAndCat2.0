var cat, mouse, catImg1, catAn, catImg2, mouseImg1, mouseAn, mouseImg2;
var garden, gardenImg;;




function preload() {

 catImg1 = loadImage("cat1.png");
 catAn = loadAnimation("cat2.png","cat3.png");
 catImg2 = loadImage("cat4.png");

 mouseImg1 = loadImage("mouse1.png");
 mouseAn = loadAnimation("mouse2.png","mouse3.png");
 mouseImg2 = loadImage("mouse4.png");

 gardenImg = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(500,400,50,50);
    garden.addImage(gardenImg);
    
    cat = createSprite(700,650);
    cat.addImage(catImg1);
    cat.scale = 0.2;
  //cat.debug = true;
    cat.setCollider("rectangle", 0,0, 10,10)
  
    mouse = createSprite(200,650);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
     
    if(mouse.isTouching(cat)){
      mouse.addImage("mouse img 2", mouseImg2);
      mouse.changeImage("mouse img 2");

      cat.addImage("cat img 2", catImg2);
      cat.changeImage("cat img 2");
      cat.velocityX = 0;
   
    }
  
    keyPressed(mouse,cat); 
    drawSprites();
}


function keyPressed(){

if(keyDown(LEFT_ARROW)){
cat.velocityX = -5;
cat.addAnimation("cat running", catAn);
cat.changeAnimation("cat running");
cat.scale = 0.25;

mouse.addAnimation("mouse teasing", mouseAn);
mouse.changeAnimation("mouse teasing");

}

}
