var paper1,scissors1,rock1,play,scissors,paper,rock,s,r,p;
var gameState;




function preload(){
rock1=loadImage("rock.jpg")
paper1=loadImage("paper.png")
scissors1=loadImage("scissors.jpeg")
play1=loadImage("playbutton.png")
}

function setup(){
    createCanvas(1500,800)

    

   
    play=createSprite(760,637,40,80)
    play.addImage("play button",play1)
    
 
    
    scissors=createSprite(1036,706,40,80)
    scissors.addImage("scissorsimg",scissors1)
    scissors.scale=0.3
    scissors.visible=false

    s=createSprite(200,358,40,80)
    s.addImage("scissorsimg1",scissors1)
    s.visible=false;
    s.scale=0.2

    paper=createSprite(540,706,40,80)
    paper.addImage("paperimg",paper1)
    paper.scale=1
    paper.visible=false

    p=createSprite(200,358,40,80)
    p.addImage("paperimg1",paper1)
    p.visible=false;


    rock=createSprite(113,706,40,80)
    rock.addImage("rockimg",rock1)
    rock.scale=0.2
    rock.visible=false

    r=createSprite(200,358,40,80)
    r.addImage("rockimg1",rock1)
    r.visible=false;
    r.scale=0.2

   
   
    

    
    }
  
function draw(){
background("white")
text(mouseX+","+mouseY,mouseX,mouseY)
text("ROCK PAPER SCISSORS!!",805,48)


if(mousePressedOver(play)){
play.visible=false
scissors.visible=true
paper.visible=true
rock.visible=true
}

if(mousePressedOver(scissors)){
    s.visible=true
    p.visible=false
    r.visible=false
    AI()

   }

   if(mousePressedOver(paper)){
    p.visible=true
    s.visible=false
    r.visible=false
    var s1=createSprite(1394,358,40,80)
    s1.addImage("scissorsimg2",scissors1)
    s1.visible=false;
    s1.scale=0.2

    var p1=createSprite(1394,358,40,80)
    p1.addImage("paperimg2",paper1)
    p1.visible=false;

    
    var r1=createSprite(1394,358,40,80)
    r1.addImage("rockimg2",rock1)
    r1.visible=false;
    r1.scale=0.2

    var rand=Math.round(random(1,3))
console.log(rand)


switch (rand){
case 1:
s1.visible=true;
p1.visible=false;
r1.visible=false;

break;

case 2:
p1.visible=true;
s1.visible=false;
r1.visible=false;

break;

case 3:
r1.visible=true;
s1.visible=false;
p1.visible=false;
break;
}


    console.log("test")
   }

   if(mousePressedOver(rock)){
    r.visible=true
    p.visibe=false
    s.visible=false
    AI()
   }
  



drawSprites()
}

function AI(){

var s1=createSprite(1394,358,40,80)
    s1.addImage("scissorsimg2",scissors1)
    s1.visible=false;
    s1.scale=0.2

    var p1=createSprite(1394,358,40,80)
    p1.addImage("paperimg2",paper1)
    p1.visible=false;

    
    var r1=createSprite(1394,358,40,80)
    r1.addImage("rockimg2",rock1)
    r1.visible=false;
    r1.scale=0.2

    var rand=Math.round(random(1,3))
console.log(rand)


switch (rand){
case 1:
s1.visible=true;
p1.visible=false;
r1.visible=false;

break;

case 2:
p1.visible=true;
s1.visible=false;
r1.visible=false;

break;

case 3:
r1.visible=true;
s1.visible=false;
p1.visible=false;
break;
}
}
