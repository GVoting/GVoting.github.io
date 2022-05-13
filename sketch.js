
var AmeyWebV=0, BarbieV=0, DhapataV=0, LadyBug=0;
var AmeyWebC, BarbieC, DhapataC;
var NotaV=0, NotaC;
var state = "1";
var noofpeople=0;
var state = ".";
var DhapataImg, AmeyWebImg, BarbieImg;
function preload(){
DhapataImg = loadImage("dhapata.png");
AmeyWebImg = loadImage("ameyweb.png");
BarbieImg = loadImage("barbie.jfif");
}
function setup() {
  createCanvas(windowWidth,windowHeight);


  AmeyWebC = createButton("Amey Web (Amey Gawale)");
  AmeyWebC.position(15,75);
  AmeyWebC.class("button");
  AmeyWebC.mouseClicked(addAmey);

  BarbieC = createButton("Barbie (Avani Shinde)");
  BarbieC.position(15,175);
  BarbieC.class("button");
  BarbieC.mouseClicked(addAvani);

  DhapataC = createButton("Dhapata (Alka Gawale)");
  DhapataC.position(15,275);
  DhapataC.class("button");
  DhapataC.mouseClicked(addAlka);

  NotaC = createButton("Nota (No One)");
  NotaC.position(15,375);
  NotaC.class("button");
  NotaC.mouseClicked(addNota);



  
}

function draw() {
  console.log(AmeyWebV);
  console.log(BarbieV);
  console.log(DhapataV);
  console.log(NotaV);
  console.log(noofpeople);
  background("white");

  if(noofpeople === 8){
    AmeyWebC.hide();
    BarbieC.hide();
    DhapataC.hide();
    NotaC.hide();
    state = "";

    if(AmeyWebV > BarbieV && AmeyWebV > DhapataV && AmeyWebV > NotaV){
      fill("black");
      textSize(30);
     text("Amey Web Won!!",10,height/2);
    }
    
    if(BarbieV > AmeyWebV && BarbieV > DhapataV && BarbieV > NotaV){
      fill("black");
      textSize(30);
     text("Barbie Won!!",10,height/2);
    }

    if(DhapataV > BarbieV && DhapataV > AmeyWebV && DhapataV > NotaV){
      fill("black");
      textSize(30);
     text("Dhapata Won!!",10,height/2);
    }

    if(NotaV > BarbieV && NotaV > AmeyWebV && NotaV > DhapataV){
      fill("black");
      textSize(30);
     text("No One Won!!",10,height/2);
    }

    


  }
   if(state === "."){ 
     fill("black");
    textSize(30);
    text("Click To Vote",10,35);
     text("No. Of People Voted: "+noofpeople,15,450);
}

if(state === ""){
  fill("black");
  textSize(20);
  text("Amey Web Votes: "+AmeyWebV,width/2 + 50,25);
  text("Barbie Votes: "+BarbieV,width/2 + 50,75);
  text("Dhapata Votes: "+DhapataV,width/2 + 50, 125);
  text("Nota Votes: "+NotaV,width/2 + 50, 175); 
 }
}
 function addAmey(){
AmeyWebV += 1;
noofpeople += 1
 }

 function addAlka(){
DhapataV += 1
noofpeople += 1
 }

 function addAvani(){
BarbieV +=1;
noofpeople += 1
 }

 function addNota(){
NotaV += 1;
noofpeople += 1
 } 
