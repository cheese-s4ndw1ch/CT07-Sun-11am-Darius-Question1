let bird;
let background;
let birdImg;

function preload(){
   background = loadImage("assets/background.png");
   birdImg = loadImage("assets/bird.png");
}
function setup(){
    new Canvas(400, 600);
    square = createSprite(width / 2, height / 2, 50, 50);
    square.img = birdImg;
}

function draw(){
    image(background, 0, 0, width, height);

}
