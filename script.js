//FINAL PROJECT: GAME
// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 800;

// Set up Canvas 
requestAnimationFrame(draw)
function draw() {
  // Draw a grey background
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, cnv.width, cnv.height)
  
  //Draw square
  drawSquare();
  //Move square 
  movesquareArray();
  //Display the room number
  displayRoomNumber();
  // Draw the current room
  if (currentRoom == 1) room1();
  if (currentRoom == 2) room2();
  if (currentRoom == 3) room3();
  if (currentRoom == 4) room4();
  if (currentRoom == 5) room5();
  if (currentRoom == 6) room6();
  if (currentRoom == 7) room7();
  if (currentRoom == 8) room8();
  if (currentRoom == 9) room9();
  if (currentRoom == 10) room10();
  if (currentRoom == 11) room11();
  if (currentRoom == 12) room12();
  if (currentRoom == 13) room13();
  if (currentRoom == 14) room14();
  if (currentRoom == 16) room16();
  if (currentRoom == 17) room17();
  if (currentRoom == 18) room18();
  if (currentRoom == 19) room19();
  if (currentRoom == 20) room20();
  if (currentRoom == 21) room21();
  if (currentRoom == 22) room22();
  if (currentRoom == 23) room23();
  if (currentRoom == 24) room24();
  if (currentRoom == 25) room25();
  if (currentRoom == 26) room26();
  if (currentRoom == 27) room27();
  if (currentRoom == 28) room28();
  if (currentRoom == 29) room29();
  if (currentRoom == 30) room30();

  // Update the current room
  //Adjoining rooms to room 1
  if (currentRoom == 1 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(2);
  if (currentRoom == 1 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(3);
  if (currentRoom == 1 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(4);
  if (currentRoom == 1 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(5);
  //Adjoining rooms to room 2
  if (currentRoom == 2 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(6);
  if (currentRoom == 2 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(1);
  if (currentRoom == 2 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(7);
  //Adjoining rooms to room 3
  if (currentRoom == 3 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(6);
  if (currentRoom == 3 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(1);
  if (currentRoom == 3 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(8);
  //Adjoining rooms to room 4
  if (currentRoom == 4 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(1);
  if (currentRoom == 4 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(7);
  if (currentRoom == 4 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(9);
  //Adjoining rooms to room 5
  if (currentRoom == 5 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(1);
  if (currentRoom == 5 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(8);
  if (currentRoom == 5 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(9);
  //Adjoining rooms to room 6
  if (currentRoom == 6 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(3);
  if (currentRoom == 6 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(2);
  if (currentRoom == 6 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(16);
  //Adjoining rooms to room 7
  if (currentRoom == 7 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(4);
  if (currentRoom == 7 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(2);
  //Adjoining rooms to room 8
  if (currentRoom == 8 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(3);
  if (currentRoom == 8 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(5);
  if (currentRoom == 8 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(21);
  //Adjoining rooms to room 9
  if (currentRoom == 9 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(4);
  if (currentRoom == 9 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(5);
  if (currentRoom == 9 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(10);
  //Adjoining rooms to room 10
  if (currentRoom == 10 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(9);
  if (currentRoom == 10 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(11);
  //Adjoining rooms to room 11
  if (currentRoom == 11 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(12);
  if (currentRoom == 11 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(10);
  if (currentRoom == 11 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(14);
  //Adjoining rooms to room 12
  if (currentRoom == 12 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(11);
  if (currentRoom == 12 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(13);
  //Adjoining rooms to room 13
  if (currentRoom == 13 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(12);
  if (currentRoom == 13 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(14);
  //Adjoining rooms to room 14
  if (currentRoom == 14 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(11);
  if (currentRoom == 14 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(13);
  if (currentRoom == 14 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(15);
  //Victory Room
  if (currentRoom == 15) victory();
  //Adjoining rooms to room 16
  if (currentRoom == 16 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(6);
  if (currentRoom == 16 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(17);
  if (currentRoom == 16 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(19);
  //Adjoining rooms to room 17
  if (currentRoom == 17 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(16);
  if (currentRoom == 17 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(18);
  //Adjoining rooms to room 18
  if (currentRoom == 18 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(17);
  if (currentRoom == 18 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(19);
  if (currentRoom == 18 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(20);
  //Adjoining rooms to room 19
  if (currentRoom == 19 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(16);
  if (currentRoom == 19 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(18);
  // Adjoining rooms to room 20 
  if (currentRoom == 20 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(18);
  //Adjoining rooms to room 21
  if (currentRoom == 21 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(8);
  if (currentRoom == 21 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(22);
  if (currentRoom == 21 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(23);
  //Adjoining rooms to room 22
  if (currentRoom == 22 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(21);
  //Adjoining rooms to room 23
  if (currentRoom == 23 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(21);
  if (currentRoom == 23 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(24);
  if (currentRoom == 23 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(26);
  //Adjoining rooom to room 24
  if (currentRoom == 24 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(23);
  if (currentRoom == 24 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(27);
  if (currentRoom == 24 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(25);
  //Adjoining rooms to room 25
  if (currentRoom == 25 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(24);
  //Adjoining rooms to room 26
  if (currentRoom == 26 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(23);
  if (currentRoom == 26 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(27);
  //Adjoining rooms to room 27
  if (currentRoom == 27 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(26);
  if (currentRoom == 27 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(24);
  if (currentRoom == 27 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y + 60 >= cnv.height) newRoom(28);
  //Adjoining rooms to room 28
  if (currentRoom == 28 && squareArray.x > 450 && squareArray.x < 550 && squareArray.y <= 0) newRoom(27);
  if (currentRoom == 28 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(29);
  //Adjoining rooms to room 29
  if (currentRoom == 29 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(28);
  if (currentRoom == 29 && squareArray.x <= 0 && squareArray.y < 450 && squareArray.y >= 350) newRoom(30);
  //Adjoining rooms to room 30
  if (currentRoom == 30 && squareArray.x + 60 >= 1000 && squareArray.y < 450 && squareArray.y >= 350) newRoom(29);
  requestAnimationFrame(draw)
}
