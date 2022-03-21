dino="";
harry_potter="";

function preload()
{
    dino=loadSound("jurrasic park theme.mp3");
    harry_potter=loadSound("harry_potter.mp3");
}

function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
