
let square;

function setup(){
    new Canvas(400, 600);
   
    // code to set the gravity of the world
 world.gravity.y = 10;
    square = new Sprite(200/2,300/2,20,20);
    // code to create a new square sprite
}

function draw(){
    background("grey");

    // code to check if mouse is pressed i.e. mouse.presses()
        // if mouse is pressed, the square sprite "flies" up
        if(mouse.presses()){
        square.vel.y = -5;}
}