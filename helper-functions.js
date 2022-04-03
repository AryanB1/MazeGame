// Helper Functions
//Event Listener
document.getElementById("Btn1").addEventListener('click', removeHTML);
//Remove HTML el+ements
function removeHTML() {
  document.getElementById("head1").innerHTML = " "
  document.getElementById("para1").innerHTML = " "
  document.getElementById("Btn1").style.display = "none"
  document.getElementById("myCanvas").style.display = "inline-block"
}

// Basic code for drawing lines 
function drawLine(x1, y1, x2, y2) {
  ctx.lineWidth = 8;
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
//Drawing quadrants, as well as collision detection for the quadrants
function Quadrant1(x, y) {
  //Quadrant 1
  drawLine(25, 25, 25, y);
  drawLine(21, 25, x, 25);
  if(squareArray.x >= 20 && squareArray.x < x && squareArray.y < 25) squareArray.y += squareArray.ySpeed;
  if(squareArray.x < 21 && squareArray.y >= 25 && squareArray.y < y) squareArray.x += squareArray.xSpeed;
}
function Quadrant2() {
  //Quadrant 2
  drawLine(975, 21, 975, 350);
  drawLine(550, 25, 975, 25);
  if(squareArray.x >= 550 && squareArray.x < 975 && squareArray.y < 25) squareArray.y += squareArray.ySpeed;
  if(squareArray.x + 60 > 975 && squareArray.y + 60 >= 25 && squareArray.y + 60 < 350) squareArray.x -= squareArray.xSpeed;
  }
function Quadrant3() {  
    //Quadrant 3
  drawLine(25, 450, 25, 775);
  drawLine(21, 775, 450, 775);
  if(squareArray.x + 60 >= 25 && squareArray.x + 60 < 450 && squareArray.y + 60 > 775) squareArray.y -= squareArray.ySpeed;
 if(squareArray.x < 25 && squareArray.y >= 450 && squareArray.y < 775) squareArray.x += squareArray.xSpeed;

}

function Quadrant4(x, y) {
  //Quadrant 4
  drawLine(975, y, 975, 775);
  drawLine(x, 775, 979, 775);
  if(squareArray.x + 60 >= x && squareArray.x + 60 < 979 && squareArray.y + 60 > 775) squareArray.y -= squareArray.ySpeed;
  if(squareArray.x + 60 > 970 && squareArray.y + 60 >= y && squareArray.y + 60 < 800) squareArray.x -= squareArray.xSpeed;
}
//Create array
let squareArray = [];
//Add elements to array
squareArray = {
  x: 500,
  y: 400,
  wh: 50,
  xSpeed: 8,
  ySpeed: 8
}
//Global Variable
let currentRoom = 1
//Draw a square using elements from the array
function drawSquare() {
  ctx.fillStyle = "white";
  ctx.fillRect(squareArray.x, squareArray.y, squareArray.wh, squareArray.wh);
}
// Keyboard Variables
wPressed = false;
aPressed = false;
sPressed = false;
dPressed = false;
//Event Listeners
document.addEventListener('keydown', keydownHandler);
document.addEventListener('keyup', keyupHandler);
// keyboard function
function keydownHandler(event){
  if (event.code == 'KeyW') wPressed = true;
  if (event.code == 'KeyA') aPressed = true;
  if (event.code == 'KeyS') sPressed = true;
  if (event.code == 'KeyD') dPressed = true;
}
// keyboard function
function keyupHandler(event){
  if (event.code == 'KeyW') wPressed = false;
  if (event.code == 'KeyA') aPressed = false;
  if (event.code == 'KeyS') sPressed = false;
  if (event.code == 'KeyD') dPressed = false;
}
function movesquareArray(){
  if (wPressed) squareArray.y -= squareArray.ySpeed;
  if (sPressed) squareArray.y += squareArray.ySpeed;
  if (aPressed) squareArray.x -= squareArray.xSpeed;
  if (dPressed) squareArray.x += squareArray.xSpeed;
}
//Update the rooms
function newRoom(roomCurrent) {
  squareArray.x = 500;
  squareArray.y = 400;
  currentRoom = roomCurrent;
}
//To make things easier display a in the top left corner that displays the room number
function displayRoomNumber() {
  ctx.font = "30px Comic sans";
  ctx.fillStyle = "black";
  ctx.fillText("Room " + currentRoom, 50, 75)
}
//Code behind drawing of all rooms
function room1() {
  //Draw and Detect Quadrant 1 
  Quadrant1(450, 350);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(550, 450);
}

function room2() {
    //Draw and Detect Quadrant 1 
    Quadrant1(550, 350);
    //Draw and Detect Quadrant 2
    Quadrant2();
    //Draw and Detect Quadrant 3
    Quadrant3();
    //Draw and Detect Quadrant 4
    Quadrant4(550, 450);
}

function room3() {
    //Draw and Detect Quadrant 1 
    Quadrant1(450, 450);
    //Draw and Detect Quadrant 2
    Quadrant2();
    //Draw and Detect Quadrant 3
    Quadrant3();
    //Draw and Detect Quadrant 4
    Quadrant4(550, 450);
}

function room4() {
    //Draw and Detect Quadrant 1 
    Quadrant1(450, 350);
    //Draw and Detect Quadrant 2
    Quadrant2();
    //Draw and Detect Quadrant 3
    Quadrant3();
    //Draw and Detect Quadrant 4
    Quadrant4(550, 350);
}

function room5() {
    //Draw and Detect Quadrant 1 
    Quadrant1(450, 350);
    //Draw and Detect Quadrant 2
    Quadrant2();
    //Draw and Detect Quadrant 3
    Quadrant3();
    //Draw and Detect Quadrant 4
    Quadrant4(450, 450);
}
function room6() {
  //Draw and Detect Quadrant 1 
  Quadrant1(550, 350);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(550, 450);
}
function room7() {
  //Draw and Detect Quadrant 1 
  Quadrant1(550, 350);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(550, 350);
}
function room8() {
  //Draw and Detect Quadrant 1 
  Quadrant1(450, 450);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(550, 450);
}
function room9() {
  //Draw and Detect Quadrant 1 
  Quadrant1(450, 350);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(450, 450);
}
function room10() {
  //Draw and Detect Quadrant 1 
  Quadrant1(450, 350);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(450, 350);
}
function room11() {
  //Draw and Detect Quadrant 1 
  Quadrant1(450, 450);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(550, 450);
}
function room12() {
  //Draw and Detect Quadrant 1 
  Quadrant1(550, 450);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(550, 450);
}
function room13() {
  //Draw and Detect Quadrant 1 
  Quadrant1(550, 350);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(550, 350);
}
function room14() {
  //Draw and Detect Quadrant 1 
  Quadrant1(450, 350);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(450, 450);
}
function victory() {
  document.getElementById("myCanvas").style.display = "none"
  document.getElementById("head1").innerHTML = "Congratulations you beat the game!"
}
function room16() {
  //Draw and Detect Quadrant 1 
  Quadrant1(450, 350);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(450, 450);
}

function room17() {
  //Draw and Detect Quadrant 1 
  Quadrant1(550, 350);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(550, 350);
}
function room18() {
  //Draw and Detect Quadrant 1 
  Quadrant1(550, 350);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(550, 450);
}
function room19() {
  //Draw and Detect Quadrant 1 
  Quadrant1(450, 450);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(450, 450);
}
function room20() {
  //Draw and Detect Quadrant 1 
  Quadrant1(550, 450);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(450, 450);
}
function room21() {
  //Draw and Detect Quadrant 1 
  Quadrant1(450, 350);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(550, 350);
}
function room22() {
  //Draw and Detect Quadrant 1 
  Quadrant1(450, 450);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(450, 350);
}
function room23() {
  //Draw and Detect Quadrant 1 
  Quadrant1(550, 350);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(550, 450);
}
function room24() {
  //Draw and Detect Quadrant 1 
  Quadrant1(450, 350);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(550, 350);
}
function room25() {
  //Draw and Detect Quadrant 1 
  Quadrant1(450, 450);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(450, 350);
}
function room26() {
  //Draw and Detect Quadrant 1 
  Quadrant1(550, 450);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(550, 450);
}
function room27() {
  //Draw and Detect Quadrant 1 
  Quadrant1(450, 450);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(550, 450);
}
function room28() {
  //Draw and Detect Quadrant 1 
  Quadrant1(450, 350);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(450, 350);
}
function room29() {
  //Draw and Detect Quadrant 1 
  Quadrant1(550, 350);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(450, 450);
}
function room30() {
  //Draw and Detect Quadrant 1 
  Quadrant1(550, 450);
  //Draw and Detect Quadrant 2
  Quadrant2();
  //Draw and Detect Quadrant 3
  Quadrant3();
  //Draw and Detect Quadrant 4
  Quadrant4(450, 450);
}