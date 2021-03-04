/***********************************************************************************
	Project 1
	by Jingyi Zhao

------------------------------------------------------------------------------------
	Notes:
	- Add six PNGs images in the function Preload.
  - and use mouseIsPressed to control the ellipse.
  - Use triangles and stars to draw a sun, plus rotate (frameCount)/time you want to speed up or slow down.
  - The keytyped conversion can be based on pressing *r* is the first page, *d* is the dog room, *c* is the cat room, 
*b* is the rabbit room, *l* is their life, *h* is They wait.


***********************************************************************************/
//mouse ellipse size
var x=200;
var y=200
var r=50;

// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/room.png');
  images[1] = loadImage('assets/dog.png');
  images[2] = loadImage('assets/cat.png');
  images[3] = loadImage('assets/bunny.png');
  images[4] = loadImage('assets/life.png');
  images[5] = loadImage('assets/hope.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(30);

  // set to one for startup
  drawFunction = drawRoom;
}

// sets the background color and mouse
function draw() {
  background(250,250,210);

// mouse is press
  if(mouseIsPressed&&dist(mouseX,mouseY,x,y)<r){
    x=mouseX;
    y=mouseY;
  }
  ellipse(x,y,r,r);

// 



  // will call your state machine function
  drawFunction();
}


// drawOne() will draw the image at index 0 from the array
drawRoom = function() {
   image(images[0],width/2, height/2);

   fill(0,0,0);
   text("To learn about dog, press * d *. To learn about cat, press * c *. To learn about bunny, press * b *.", width/2, height - gTextOffset);
   fill(221,160,221);
   text("Do you want to know about us?", 500,100,300,300);

// drawSun 
   fill(255,255,0);
   stroke(255);
   push();
  translate(1100, 150, 155, 155);
  rotate(frameCount / 400.0);
  star(0, 0, 80, 100, 40);
  pop();

}

// drawTwo() will draw the image at index 1 from the array
drawDog = function() {
   image(images[1],width/2, height/2);

   fill(0,0,0);
   text("If you want to know my life, press * l *.", width/2, height - gTextOffset);

   fill(240,120,0);
   text("Did you know? ", 500,60,300,300);

}

// drawOne() will draw the image at index 2 from the array
drawCat = function() {
   image(images[2],width/2, height/2);

   fill(0,0,0);
   text("If you want to know my life, press * l *.", width/2, height - gTextOffset);

   fill(40,230,120);
   text("Did you know? ", 500,60,300,300);
}

//drawOne() will draw the image at index 3 from the array
drawBunny = function() {
   image(images[3],width/2, height/2);

   fill(0,0,0);
   text("If you want to know my life, press * l *.", width/2, height - gTextOffset);

   fill(255,127,80);
   text("Did you know? ", 500,60,300,300);
}

//drawOne() will draw the image at index 4 from the array
drawLife = function() {
   image(images[4],width/2, height/2);

   fill(0,0,0);
   text("If you finish press * h *, we are waiting for you.", width/2, height - gTextOffset);

   fill(230,50,50);
   text("Dog likes to go out! ", 500,400,100,150);
   fill(72,209,204);
   text("Cat likes to be at home, but not the cages.", 200,80,380,300 );
   fill(0,255,0);
   text("Small animal likes to stay indoor, sometime inside the cage, but sometime outside of the cage." , 980,500,300,300);
}

//drawOne() will draw the image at index 5 from the array
drawHope = function() {
   image(images[5],width/2, height/2);

   fill(0,0,0);
   text("If you want to go back, press * r *.", width/2, height - gTextOffset);

   fill(230,50,50)
   text("Pick me, become your life time partner. ",500,80,300,300);
}

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( key === 'r' ) {
  	drawFunction = drawRoom;
  }
  else if( key === 'd' ) {
  	drawFunction = drawDog;
  }
  else if( key === 'c' ) {
  	drawFunction = drawCat;
  }
  else if( key === 'b' ) {
  	drawFunction = drawBunny;
  }
  else if( key === 'l' ) {
  	drawFunction = drawLife;
  }
  else if( key === 'h' ) {
    drawFunction = drawHope;
  }
}

//sun move
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
