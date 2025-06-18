// //Niveau A1
// //Initialisation
// setPos(300,300);
// changeColor(color.red);
// faceDown();
// setLineWidth(10);

// //Réalisation
// forward(200);
// faceRight();
// forward(100);


// //Niveau A2
// //Initialisation
// setPos(300,300);
// changeColor(color.yellow);
// faceLeft();
//setLineWidth(10);

// //Réalisation
// forward(100);
// faceDown();
// forward(100);
// faceRight();
// forward(200);
// faceUp();
// forward(200);

// //Niveau A3
// //Initialisation
// setPos(300,300);
// changeColor("#FFA500");
// faceLeft();

// //Réalisation
// forward(100);
// faceRight();
// forward(200);
// faceLeft();
// forward(100);
// faceDown();
// forward(100);
// faceUp();
// forward(200);

// //Niveau A4
// //Initialisation
// setPos(300,500);
// changeColor(color.green);
// faceRight();

// //Réalisation
// forward(200);
// arcLeft(100, 180);
// forward(100);
// arcRight(100,180);
// forward(200);

// //Niveau A5
// //Initialisation
// setPos(300,300);
// changeColor(color.fuchsia);
// faceRight();

// //Réalisation
// arcRight(100, 360);
// arcRight(50, 180);
// arcLeft(50, 180);

// //Niveau A6
// //Initialisation
// setPos(300,300);
// changeColor(color.aqua);
// faceUp();

// //Réalisation
// forward(100);
// up();
// forward(100);
// down();
// forward(200);

// //Niveau A7
// //Initialisation
// setPos(300,300);
// changeColor("#008000")
// faceDown();

// //Réalisation
// forward(100);
// arcLeft(50, 180);
// forward(50);
// up();
// forward(50);
// down();
// forward(100);
// arcLeft(50, 180);

///Niveau B1
//Initialisation
// setPos(200,200);
// changeColor(color.green);
// faceRight();

// //Réalisation
// for (let i = 0; i < 4; i++) {
//     forward(100);
//     faceDown();
//     forward(100);
//     faceRight();
// }

// // Niveau B2
// //Initialisation
// setPos(200,200);
// changeColor(color.red);
// faceUp();

// //Réalisation
// for (let i = 0; i < 4; i++) {
//     forward(50);
//     faceRight();
//     forward(50);
//     faceDown();
//     forward(50);
//     faceRight();
//     forward(50);
//     faceUp();
// }

// Niveau B3
//Initialisation
// setPos(200,200);
// changeColor(color.fuchsia);
// faceRight();

// for (let i=0; i<4; i++){
//     forward(50);
//     right(90);
// }

// // Niveau B4
// //Initialisation
// setPos(200,200);
// changeColor(color.aqua);
// faceRight();

// //Réalisation
// for (let i=0; i <3; i++) {
//     forward(100);
//     left(120);
// }

// // Niveau B5
// //Initialisation
// setPos(200,200);
// changeColor(color.yellow);
// faceUp();

// //Réalisation
// forward(100);
// changeColor(color.red);
// for (let i=0; i<3; i++) {
//     forward(50);
//     right(120);
// }

// // Niveau B6
// //Initialisation
// setPos(200,200);
// changeColor(color.red)
// faceRight();

// //Réalisation

// for (let i=0; i<2; i++) {
//     forward(50);
//     faceUp();
//     forward(50);
//     faceRight();
// }
// changeColor(color.green);
// for (let i=0; i<3; i++) {
//     forward(50);
//     faceDown();
//     forward(50);
//     faceRight();
// }

// // Niveau B24
// //Initialisation
// setPos(100,100);
// changeColor(color.red);
// faceRight();

// //Réalisation
// for (let i =0; i<8; i++){
//     forward(100);
//     left(180-45);
// }
// forward(50);
// changeColor(color.green);

// for (let i=0; i<3; i++) {
//     right(180-45);
//     forward(100);
//     left(180-45)
//     forward(50);
// }
// forward(50);
// right(90);
// forward(25);

// for (let i =0; i<2; i++) {
//     left(90);
//     forward(25);
// }
// right(90);
// forward(50);

// for (let i=0; i<3; i++) {
//     forward(50);
//     left(180-45);
//     forward(100);
//     right(180-45)
// }

// //Niveau B21
// //Initialisation
// setPos(300,300);
// shiftColor(0.57);
// faceRight();

// //Réalisation
// for (let i =0; i<6; i++) {
//     forward(100);
//     right(180-300);
//     forward(50);
//     left(180-60);
//     forward(100);
//     right(180-120);
//     forward(50);
//     right(180-60);
//     forward(50);
//     right(180-60);
//     shiftColor(0.10);
//     up();
//     forward(100);
//     down();
// }

// Niveau D16
// Initialisation
// setPos(300,300);
// changeColor(color.green);
// faceDown();

// //Réalisation
// forward(100);
// right(180-60);
// forward(50);
// faceLeft();

// for (let i=0; i<3; i++) {
//     forward(50);
//     right(90);
// }
// left(180-60);
// forward(50);
// faceRight();
// up();
// changeColor("#FFA500");
// forward(50);
// down();

// let a = 50;
// for (let i=0; i<3; i++) {
//     arcRight(a,180);
//     up();
//     faceUp();
//     forward(a*2 +50);
//     faceRight();
//     a += 50;
//     down();
// }


// // HUIT v1
// //Initialisation
// setPos(300,300);
// changeColor(color.red);
// faceRight();
// a = setLineWidth(300);

// //Réalisation
// for (let i =0; i<3; i++) {
//     setLineWidth(a);
//     arcLeft(80, 360);
//     arcRight(80, 360);
//     shiftColor(0.1);
//     a -= 20;
// }

//!Dragon
// setPos(300,500);
// faceRight();
// setLineWidth(1);


// function dragon(n, size){
//     if (n ==0) {
//         forward(size);
//     }else{
//         right(45);
//         dragon(n-1, size);
//         left(90);
//         dragonInverse(n-1, size);
//         right(45);
//     }
//     shiftColor(0.01);
    
// }
// function dragonInverse(n, size){
//     if(n==0) {
//         forward(size);
//     } else {
//         left(45);
//         dragon(n-1, size);
//         right(90);
//         dragonInverse(n-1, size);
//         left(45);
//     }
//     shiftColor(0.01);
    
// }

// dragon(13,10);


//! Dragon qui fait n'importe quoi
// setPos(300,500);
// faceRight();
// setLineWidth(1);

// function dragon(n, size){
//     if (n ==0) {
//         forward(size + Math.random() * 5);
//     }else{
//         right(45 + (Math.random() -0.5)*20);
//         dragon(n-1, size);
//         left(90 + (Math.random() -0.5)*20);
//         dragonInverse(n-1, size);
//         right(45 + (Math.random() -0.5)*20);
//     }
//     shiftColor(0.01);
    
// }
// function dragonInverse(n, size){
//     if(n==0) {
//         forward(size + Math.random() * 5);
//     } else {
//         left(45 + (Math.random() -0.5)*20);
//         dragon(n-1, size);
//         right(90 + (Math.random() -0.5)*20);
//         dragonInverse(n-1, size);
//         left(45 + (Math.random() -0.5)*20);
//     }
//     shiftColor(0.01);
    
// }

// for (let i =0; i<6; i++) {
//     setPos(300,300);
//     right(i *60);
//     dragon(12,3);
// }


//!Disque
setPos(300,500);
faceRight();
setLineWidth(3);

//Réalisation
for (let i=0; i<360; i++) {
    forward(100);
    backward(100);
    shiftColor(0.01);
    left(1);
}

setLineWidth(5);
changeColor(color.black);

// === Lettre G ===
up();
setPos(200, 500); // Centre horizontal, un peu à gauche
faceRight();
down();

forward(40);
left(90);
forward(80);
left(90);
forward(40);
left(90);
forward(40);
left(90);
forward(20);
right(90);
forward(40);

// === Lettre A ===
up();
setPos(270, 500);
faceUp();
down();

forward(80);
right(135);
forward(50);
left(90);
forward(50);
up();
backward(25);
right(45);
down();
forward(35);

// === Lettre Y ===
up();
setPos(340, 500);
faceUp();
down();

forward(40);
right(30);
forward(50);
up();
backward(50);
left(60);
down();
forward(50);

// === Point d'exclamation "!" ===
up();
setPos(410, 500);
faceUp();
down();

forward(60);
up();
backward(70);
down();



