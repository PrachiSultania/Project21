var canvas;
var surface1, surface2, surface3, surface4, box;

function preload(){
  
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
      surface1 = createSprite(70, 580, 120, 20);
      surface1.shapeColor ="orange";

      surface2 = createSprite(200, 580, 120, 20);
      surface2.shapeColor ="blue";

      surface3 = createSprite(330, 580, 120, 20);
      surface3.shapeColor ="pink";

      surface4 = createSprite(460, 580, 120, 20);
      surface4.shapeColor ="yellow";


    //create box sprite and give velocity
      box = createSprite(random(20, 750), 400, 50, 50);
      box.shapeColor = "white";
      box.velocityY = -4;

}

function draw() {
    background(0);
    drawSprites();

    /*createEdgeSprites();
    box.bounceOff(topEdge);
    box.bounceOff(leftEdge);
    box.bounceOff(rightEdge);
    box.bounceOff(bottomEdge); */

   if(surface1.isTouching(box) && box.bounceOff(surface1)){
      box.shapeColor = "orange"
   }


if(surface2.isTouching(box) && box.bounceOff(surface2)){
  box.shapeColor = "blue"
}


if(surface3.isTouching(box) && box.bounceOff(surface3)){
  box.shapeColor = "pink"
}


if(surface4.isTouching(box) && box.bounceOff(surface4)){
  box.shapeColor = "yellow"
}

   
}
