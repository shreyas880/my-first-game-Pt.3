var killArr;
var pawn1,pawn2,pawn3,pawn4;
var cross1,cross2;
var cross3,cross4;
var cross5,cross6;
var cross7,cross8;
var rand;
var plr1X,plrY;



function setup(){
  createCanvas(windowWidth,windowHeight);

  rand = floor(random(1,8));
  console.log(rand);
  
  pawn1 = createButton('PAWN 1');
  pawn1.position(800,200);

  pawn2 = createButton('PAWN 2');
  pawn2.position(900,200);

  pawn3 = createButton('PAWN 3');
  pawn3.position(800,300);

  pawn4 = createButton('PAWN 4');
  pawn4.position(900,300);




  b1 = createSprite(190,170,100,100);

  b2 = createSprite(190,60,100,100);
  
  b3 = createSprite(190,280,100,100);

  cross1 = createSprite(190,280,100,10);
  cross1.depth = 4;
  cross1.shapeColor = 0;

  cross2 = createSprite(190,280,10,100);
  cross2.depth = 4;
  cross2.shapeColor = 0;

  b4 = createSprite(190,390,100,100);
 
  b5 = createSprite(190,500,100,100);

  b6 = createSprite(300,60,100,100);  
  b7 = createSprite(410,60,100,100);

  cross3 = createSprite(410,60,100,10);
  cross3.depth = 9;
  cross3.shapeColor = 0;

  cross4 = createSprite(410,60,10,100);
  cross4.depth = 9;
  cross4.shapeColor = 0;



  b8 = createSprite(520,60,100,100);
  b9 = createSprite(630,60,100,100);
 

  b11 = createSprite(630,170,100,100);
  b13 = createSprite(630,280,100,100);

  cross5 = createSprite(630,280,100,10);
  cross5.depth = 13;
  cross5.shapeColor = 0;

  cross6 = createSprite(630,280,10,100);
  cross6.depth = 13;
  cross6.shapeColor = 0;




  b14 = createSprite(630,390,100,100);

  b16 = createSprite(300,500,100,100);  
  b17 = createSprite(410,500,100,100);

  cross3 = createSprite(410,500,100,10);
  cross3.depth = 17;
  cross3.shapeColor = 0;

  cross4 = createSprite(410,500,10,100);
  cross4.depth = 17;
  cross4.shapeColor = 0;

  b18 = createSprite(520,500,100,100);
  b19 = createSprite(630,500,100,100);



  b20 = createSprite(300,170,100,100);
  b21 = createSprite(410,170,100,100);
  b22 = createSprite(520,170,100,100);

  b23 = createSprite(300,280,100,100);
  b24 = createSprite(410,280,100,100);
  b24.shapeColor = rgb(4,244,216);
  b25 = createSprite(520,280,100,100);

  b26 = createSprite(300,390,100,100);
  b27 = createSprite(520,390,100,100);
  b28 = createSprite(410,390,100,100);
  


  l1 = createSprite(410,115,540,10);
  l1.shapeColor = "black";
  
  l2 = createSprite(410,225,540,10);
  l2.shapeColor = "black";

  l3 = createSprite(410,335,540,10);
  l3.shapeColor = "black";

  l4 = createSprite(410,445,540,10);
  l4.shapeColor = "black";

  l5 = createSprite(245,280,10,540);
  l5.shapeColor = "black";
  
  l6 = createSprite(355,280,10,540);
  l6.shapeColor = "black";

  l7 = createSprite(465,280,10,540);
  l7.shapeColor = "black";

  l8 = createSprite(575,280,10,540);
  l8.shapeColor = "black";

  ol1 = createSprite(135,280,10,540);
  ol1.shapeColor = 0;

  ol2 = createSprite(410,5,560,10);
  ol2.shapeColor = 0;

  ol3 = createSprite(685,280,10,540);
  ol3.shapeColor = 0;

  ol4 = createSprite(410,555,560,10);
  ol4.shapeColor = 0;

  plr1 = createSprite(440,525,25,25);
  plr1.shapeColor = "lime";

  plr1p2 = createSprite(440,475,25,25);
  plr1p2.shapeColor = "lime";

  plr1p3 = createSprite(385,525,25,25);
  plr1p3.shapeColor = "lime";

  plr1p4 = createSprite(385,475,25,25);
  plr1p4.shapeColor = "lime";

  plr2 = createSprite(440,30,25,25);
  plr2.shapeColor = "yellow";

  plr2p2 = createSprite(440,85,25,25);
  plr2p2.shapeColor = "yellow";

  plr2p3 = createSprite(380,30,25,25);
  plr2p3.shapeColor = "yellow";

  plr2p4 = createSprite(380,85,25,25);
  plr2p4.shapeColor = "yellow";

  //lihdushfdiukhskxdugjdvkick
  
  plr3 = createSprite(605,310,25,25);
  plr3.shapeColor = "blue";

  plr3p2 = createSprite(605,255,25,25);
  plr3p2.shapeColor = "blue";

  plr3p3 = createSprite(660,255,25,25);
  plr3p3.shapeColor = "blue";

  plr3p4 = createSprite(660,310,25,25);
  plr3p4.shapeColor = "blue";

  plr4 = createSprite(215,310,25,25);
  plr4.shapeColor = "red";


  plr4p2 = createSprite(215,255,25,25);
  plr4p2.shapeColor = "red";


  plr4p3 = createSprite(170,255,25,25);
  plr4p3.shapeColor = "red";


  plr4p4 = createSprite(170,310,25,25);
  plr4p4.shapeColor = "red";


  
  killArr = [];   

    
}
function draw(){
  background(255);

  fill(255,0,0);
  textSize(42);

  sameBox(plr1p4,plr1);

  
  pawn1.mousePressed(() => {
    
    rand = floor(random(1,8));
    console.log(rand);

    if(rand === 1){
      moveForward(plr1);
      
    }else if(rand === 2){
      moveForward(plr1);
      moveForward(plr1);
      
    }else if(rand === 3){
      moveForward(plr1);
      moveForward(plr1);
      moveForward(plr1);

    }else if(rand === 4){
      moveForward(plr1);
      moveForward(plr1);
      moveForward(plr1);
      moveForward(plr1);

    }else if(rand === 5){
      moveForward(plr1);
    
    }else if(rand === 6){
      moveForward(plr1);
      moveForward(plr1);

    }else if(rand === 7){
      moveForward(plr1);
      moveForward(plr1);
      moveForward(plr1);

    }else if(rand === 8){
      moveForward(plr1);
      moveForward(plr1);
      moveForward(plr1);
      moveForward(plr1);
      moveForward(plr1);
      moveForward(plr1);
      moveForward(plr1);
      moveForward(plr1);
    }})
    
    pawn2.mousePressed(() => {
      
      rand = floor(random(1,8));
      console.log(rand);
  
      if(rand === 1){
        moveForward(plr1p2);
        
      }else if(rand === 2){
        moveForward(plr1p2);
        moveForward(plr1p2);
        
      }else if(rand === 3){
        moveForward(plr1p2);
        moveForward(plr1p2);
        moveForward(plr1p2);
  
      }else if(rand === 4){
        moveForward(plr1p2);
        moveForward(plr1p2);
        moveForward(plr1p2);
        moveForward(plr1p2);
  
      }else if(rand === 5){
        moveForward(plr1p2);
      
      }else if(rand === 6){
        moveForward(plr1p2);
        moveForward(plr1p2);
  
      }else if(rand === 7){
        moveForward(plr1p2);
        moveForward(plr1p2);
        moveForward(plr1p2);
  
      }else if(rand === 8){
        moveForward(plr1p2);
        moveForward(plr1p2);
        moveForward(plr1p2);
        moveForward(plr1p2);
        moveForward(plr1p2);
        moveForward(plr1p2);
        moveForward(plr1p2);
        moveForward(plr1p2);
      }})

      pawn3.mousePressed(() => {
      
        rand = floor(random(1,8));
        console.log(rand);
    
        if(rand === 1){
          moveForward(plr1p3);
          
        }else if(rand === 2){
          moveForward(plr1p3);
          moveForward(plr1p3);
          
        }else if(rand === 3){
          moveForward(plr1p3);
          moveForward(plr1p3);
          moveForward(plr1p3);
    
        }else if(rand === 4){
          moveForward(plr1p3);
          moveForward(plr1p3);
          moveForward(plr1p3);
          moveForward(plr1p3);
    
        }else if(rand === 5){
          moveForward(plr1p3);
        
        }else if(rand === 6){
          moveForward(plr1p3);
          moveForward(plr1p3);
    
        }else if(rand === 7){
          moveForward(plr1p3);
          moveForward(plr1p3);
          moveForward(plr1p3);
    
        }else if(rand === 8){
          moveForward(plr1p3);
          moveForward(plr1p3);
          moveForward(plr1p3);
          moveForward(plr1p3);
          moveForward(plr1p3);
          moveForward(plr1p3);
          moveForward(plr1p3);
          moveForward(plr1p3);
        }})

        pawn4.mousePressed(() => {
      
          rand = floor(random(1,8));
          console.log(rand);
      
          if(rand === 1){
            sameBox(plr1p4,plr1);
            console.log(plr1.x,plr1.y);
            moveForward(plr1p4);
            
          }else if(rand === 2){
            console.log(plr1.x,plr1.y);
            moveForward(plr1p4);
            moveForward(plr1p4);
            
          }else if(rand === 3){
            console.log(plr1.x,plr1.y);
            moveForward(plr1p4);
            moveForward(plr1p4);
            moveForward(plr1p4);
      
          }else if(rand === 4){
            console.log(plr1.x,plr1.y);
            moveForward(plr1p4);
            moveForward(plr1p4);
            moveForward(plr1p4);
            moveForward(plr1p4);
      
          }else if(rand === 5){
            console.log(plr1.x,plr1.y);
            moveForward(plr1p4);
          
          }else if(rand === 6){
            console.log(plr1.x,plr1.y);
            moveForward(plr1p4);
            moveForward(plr1p4);
      
          }else if(rand === 7){
            console.log(plr1.x,plr1.y);
            moveForward(plr1p4);
            moveForward(plr1p4);
            moveForward(plr1p4);
      
          }else if(rand === 8){
            console.log(plr1.x,plr1.y);
            moveForward(plr1p4);
            moveForward(plr1p4);
            moveForward(plr1p4);
            moveForward(plr1p4);
            moveForward(plr1p4);
            moveForward(plr1p4);
            moveForward(plr1p4);
            moveForward(plr1p4);
          }})
    



  if(rand === 1){
    text(rand,70,200);
  }else if(rand === 2){
    text(rand,70,200);
  }else if(rand === 3){
    text(rand,70,200);
  }else if(rand === 4){
    text(rand,70,200);
  }else if(rand === 5){
    rand = 1;
    text(rand,70,200);
  }else if(rand === 6){
    rand = 2;
    text(rand,70,200);
  }else if(rand === 7){
    rand = 3;
    text(rand,70,200);
  }else{
    text(rand,70,200);
  }

  drawSprites();
}
function moveForward(pawn){
  if(pawn.isTouching(b5) || pawn.isTouching(b16) || pawn.isTouching(b17) || pawn.isTouching(b18)){
    pawn.x += 105;
  }else if(pawn.isTouching(b19) || pawn.isTouching(b11) || pawn.isTouching(b13) || pawn.isTouching(b14)){
    pawn.y -= 115;
  }else if(pawn.isTouching(b6) || pawn.isTouching(b7) || pawn.isTouching(b8) || pawn.isTouching(b9)){
    pawn.x -= 115;
  }else{
    pawn.y += 115;
  }

  

  if(pawn.isTouching(b16) && killArr.length >= 1){
    pawn.y -= 120;
  }
  
  if(pawn.isTouching(b22) && plr2.isTouching(b22)){
      plr2.x = 430;
      plr2.y = 45;
      killArr.push("1");

  }
}

function sameBox(pawn1,pawn2){
  if(pawn1.isTouching(b5) && pawn2.isTouching(b5)){
    text("ALERT! MOVE A DIFFERENT PAWN");
    plr1X.push(pawn2.x);
    plr1Y.push(pawn2.y);

    console.log(plr1X,plr1Y);

    pawn2.x = plr1X[0];
    pawn2.y = plr1Y[0];

  }else if(pawn1.isTouching(b18) && pawn2.isTouching(18)){
    text("ALERT! MOVE A DIFFERENT PAWN");
    plr1X.push(pawn2.x);
    plr1Y.push(pawn2.y);

    console.log(plr1X,plr1Y);

    pawn2.x = plr1X[0];
    pawn2.y = plr1Y[0];

  }
}


  
