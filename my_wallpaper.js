//your parameter variables go here!
//let rect_width = 20;
let x = 100;
let y = 110;
let earcolor = 5;
let withoutglases = 10;
let angry = false;
let cheeks  = 120;
let starcolor = 50;
let hand = false;
let gentleman = true;

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(102, 205, 170); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//耳
if (earcolor < 10) {
 fill(210, 105, 30);//chocolate brown
 ellipse(65, 50, 40, 40);
 ellipse(135, 50, 40, 40);
} else {
  fill(255, 255, 255); //white
  ellipse(65, 50, 40, 40);
  ellipse(135, 50, 40, 40);
}
//顔
if (false) {
  fill (255, 255, 255);
  ellipse(x, x, 90, 90); 
} else {
 fill(210, 105, 30);
 ellipse(x, x, 90, 90);
}

//鼻まわり
 fill(222, 184, 135);
 ellipse(x, 120, 40, 30); 
  // Example: add more shapes or patterns as desired
  
  //目の大きさ
if (withoutglases > 9) {
  fill(0);
  ellipse(80, 95, 12, 12);
  ellipse(120, 95, 12, 12);
} else {
  fill(0);
  ellipse(80, 95, 6, 6);
  ellipse(120, 95, 6, 6);  
}
  
//目のハイライト
 fill(255, 255, 255);
 ellipse(82, 93, 5, 5);
 ellipse(122, 93, 5, 5);

   //口
//let angry = true;

if (angry) {
  line(90, 130, 100, 120);
  line(100, 120, 110, 130);
} else {
 line(x, 130, 90, 120);
 line(x, 130, y, 120);
}

 


  //鼻
  fill(0);
  ellipse(x, y, 15, 5);


//ほっぺ
if (cheeks >= 110) {
 noStroke();
 fill(240, 128, 128);
 ellipse(70, y, 25, 20);
 ellipse(130, y, 25, 20);
} else {
  noStroke();
  fill(240, 128, 128);
  ellipse(70, y, 20, 15);
  ellipse(130, y, 20, 15);
}




//星の色
if (starcolor <= 34) {

  fill(248, 180, 0); 
  ellipse(0, 0, 40, 20);
  ellipse(0, 0, 20, 40);


//左右にどっと
for (let i = 0; i < 200; i= i + 20) {
  fill(248, 180, 0);
 ellipse(i, 0, 5, 5);
 ellipse(i, 200, 5, 5);
}

//上下にどっと
 for (let i = 0; i <200; i = i + 20) {
  fill(248, 180, 0);
  ellipse(0, i, 5, 5);
  ellipse(200, i, 5, 5);
 }

 } else { 
  // 黄色
  fill(255, 255, 0); 
  ellipse(0, 0, 40, 20);
  ellipse(0, 0, 20, 40);
 
//左右にどっと
 for (let i = 0; i < 200; i= i + 20) {
  fill(255, 255, 0);
 ellipse(i, 0, 5, 5);
 ellipse(i, 200, 5, 5);
 }

//上下にどっと
 for (let i = 0; i <200; i = i + 20) {
  fill(255, 255, 0);
  ellipse(0, i, 5, 5);
  ellipse(200, i, 5, 5);
    }
 }



//手

if (hand) {
stroke(0);
fill(210, 105, 30);
ellipse(55, 150, 35, 30);

fill(210, 105, 30);
ellipse(145, 150, 35, 30);

//肉球
noStroke();
fill(0);
ellipse(45, 145, 7, 7);
ellipse(55, 143, 7, 7);
ellipse(65, 145, 7, 7);
ellipse(55, 155, 16, 13);

fill(0); 
ellipse(135, 145, 7, 7);
ellipse(145, 143, 7, 7);
ellipse(155, 145, 7, 7);
ellipse(145, 155, 16, 13); 
} 

if (gentleman) {
fill(220, 20, 60);
triangle(80, 140, 80, 160, 100, 150);
ellipse(100, 150, 7, 7);
triangle(120, 140, 120, 160, 100, 150);
}

textSize(20);
fill(176, 224, 230);
text("happy", 73, 165);








//笑顔 smail
 //noFill();
 //stroke(0);
 //strokeWeight(2);
 //arc(100, 150, 150, 100, 0, PI);


}








