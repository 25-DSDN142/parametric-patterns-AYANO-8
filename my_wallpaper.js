//your parameter variables go here!
//let rect_width = 20;
let x = 100;
let y = 110;
let earcolor = 9;
let withoutglasses = 10;
let angry = false;
let cheeks  = 120;
let starcolor = 50;
let hand = true;
let size = 45;
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

//耳//ears//earcolorが１０より小さかったら、茶色//if earcolor is less than 10, fill with chocolate brown
if (earcolor < 10) {
 fill(210, 105, 30);//chocolate brown
 ellipse(65, 50, 40, 40);
 ellipse(135, 50, 40, 40);
} else {
  fill(255, 255, 255); //white
  ellipse(65, 50, 40, 40);
  ellipse(135, 50, 40, 40);
}

//顔//face//falseなら茶色の顔//if false, fill the face with chocolate brown
if (false) {
  fill (255, 255, 255);//white
  ellipse(x, x, 90, 90); 
} else {
 fill(210, 105, 30);//chpcolate brown
 ellipse(x, x, 90, 90);
}

//鼻まわり//around nose
 fill(222, 184, 135);
 ellipse(x, 120, 40, 30); 
  
//目の大きさ//eyes size//眼鏡なしが９より小さかったら目小さくなる//if withoutglasses is smaller than 9, the eyes become small
if (withoutglasses > 9) {
  fill(0);
  ellipse(80, 95, 12, 12);//left eye
  ellipse(120, 95, 12, 12);//right eye
} else {
  fill(0);
  ellipse(80, 95, 6, 6);//left small eye
  ellipse(120, 95, 6, 6); //right small eye
}
  
//目のハイライト//eye highlight
fill(255, 255, 255);
 ellipse(82, 93, 5, 5);//left
 ellipse(122, 93, 5, 5);//right

//口//mouse//もしangryがほんとなら口がへの字になる//if angry is true, the mouse courves downward
if (angry) {
  line(90, 130, 100, 120);
  line(100, 120, 110, 130);
} else {
 line(x, 130, 90, 120);
 line(x, 130, y, 120);
}

//鼻//nose
  fill(0);
  ellipse(x, y, 15, 5);


//ほっぺ//cheeks//もしcheeksが110かそれ以上なら、ほっぺが大きくなる//if ckeeks is 110 or higher, the cheeks become big
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
  
  if (size > 50) {
   fill(255, 255, 255);
  }else {
    fill(210, 105, 30);

  }

stroke(0);
//fill(210, 105, 30);
ellipse(55, 150, 35, 30);

//fill(210, 105, 30);
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
fill(255,20,147);
triangle(80, 140, 80, 160, 100, 150);
ellipse(100, 150, 7, 7);
triangle(120, 140, 120, 160, 100, 150);
}

let 文字 = true;
if (文字) {

 textSize(20);
 fill(255,20,147);
 text("happy", 73, 175);

}






//笑顔 smail
 //noFill();
 //stroke(0);
 //strokeWeight(2);
 //arc(100, 150, 150, 100, 0, PI);


}








