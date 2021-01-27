var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    surface1= createSprite(0,600,200,50);
    surface1.shapeColour= "red";
    surface2= createSprite(200,600,200,50);
    surface2.shapeColour= "green";
    surface3= createSprite(400,600,200,50);
    surface3.shapeColour= "yellow";
    surface4= createSprite(600,600,200,50);
    surface4.shapeColour= "blue";

    box= createSprite(random(20,750));
    box.shapeColour= "white"
    box.velocityX=4;
    box.velocityY=4;


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
box.bounceOff(edges);

if(box.isTouching(surface1) && box.bounceOff(surface1)){
box.shapeColour= "red"

}

if(box.isTouching(surface2) && box.bounceOff(surface2)){
    box.shapeColour="green"
    
    music.addSound("music.mp3")
    }

    if(box.isTouching(surface3) && box.bounceOff(surface3)){
        box.shapeColour= "yellow"
        
        }

        if(box.isTouching(surface4)){
            box.shapeColour="blue"
           box.velocityX=0;
           box.velocityY=0;
            }

drawSprites();
    //add condition to check if box touching surface and make it box
}
