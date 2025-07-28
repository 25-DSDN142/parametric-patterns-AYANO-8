//setup - run once when the code is first starts
function setup() {
  createCanvas(200, 200); // this sets the size of the area in which we can draw things
  background(135, 206, 235);
}

function draw() {
 translate(width / 2, height / 2);

 //fill(255, 0 //ellipse(50, 100, 45, 45); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down
 // 
 stroke(0);//線の色
 fill(255, 192, 203);//花びら色
 let hanabira = 6;  //花びらの数
 let kyori = 60;//中心からの距離
 for (let i= 0; i < hanabira; i++) {
  ellipse(0, kyori / 2, 40, 40);
  rotate(TWO_PI / hanabira);
}

 fill(240, 128, 128);
 noStroke();
 ellipse(0, 0, 30, 30);
 
}