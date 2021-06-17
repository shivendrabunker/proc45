  var bgI;
  var leftbar,leftbarImg;
  var rightbar;  
  
  function preload(){
    
    bgImg = loadImage("images/bckg.png")
    leftbarImg = loadImage("images/left-brick.png")

  }
  

  function setup() {
    createCanvas(800,470);
    
    leftbar = createSprite(175, 290, 50, 50);
    leftbar.addImage(leftbarImg);  
    leftbar.velocityY = 2;
  }

function draw() {
  background(bgImg);  

  fill("red")
  text(mouseX + "," + mouseY , 100,100)

  if (leftbar.y > 300)
  {
    leftbar.y = 150
  }

  // right side banana hai apko



  drawSprites();
}