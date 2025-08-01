//your parameter variables go here!
//let rect_height = 30;
let x = 100;
let y = 110;
let o = 100;
let face = 80;
let noglasses = 6;
let smail = 110;
let starcolor = 20;
let kazari = 90;

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
  background(102, 205, 170); //blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 // 耳　ears
 //条件①　oによって耳の色が変わる　// change color based on o value
if (o < 110) {
    fill(210, 105, 30);//chocolate brown
  } else {
    fill(255, 255, 255); // white
  }
  ellipse(65, 50, 40, 40);
  ellipse(135, 50, 40, 40);

  // 顔 face
  //条件②　faceの値によって色が変わる　// change color based on face value

 if (true) {
  fill(210, 105, 30);
  ellipse(x, x, 95, 95,);
} else {
  fill(255, 255, 255); //white
  ellipse(x, x, 95, 95,);
}

  // 鼻まわり around the nose
  fill(222, 184, 135);
  ellipse(x, 120, 40, 30); 

  // 条件③ appleの数で目の大きさ変更　// change eyes based on the number of apples
  fill(0);
  if (noglasses > 5) {
    ellipse(80, 95, 12, 12);// left eye
    ellipse(120, 95, 12, 12);//right eye
  } else {
    ellipse(80, 95, 7, 7); //left small eye
    ellipse(120, 95, 7, 7);//right small eye
  }

  // 目のハイライト // eyes hightlight
 fill(255); // 白色// white color
 ellipse(79, 93, 5, 5); //left eye
 ellipse(119, 93, 5, 5); // right eye

  // 口 // mouth
let angry = false;
if (angry) {
  line(90, 130, 100, 120);
  line(100, 120, 110, 130);
} else {
  line(x, 130, 90, 120);
  line(x, 130, y, 120);
}

  // 鼻 // nose
  fill(0);
  ellipse(x, y, 15, 5);

  // 条件④: qが120より小さいときほっぺを大きくする　// when q is less than 120, make cheeks bigger
  noStroke();
  fill(240, 128, 128); // right colral
  if (smail < 120) {
    ellipse(70, y, 25, 20); // left cheek
    ellipse(130, y, 25, 20);// right cheek
  } else {
    ellipse(70, y, 15, 10);// left small cheek
    ellipse(130, y, 15, 10);// right small cheek
  }

  // 条件⑤: starcolorの数によって星の色を変える　// change starcolor based on number of starcolor
  if (starcolor < 25) {
    fill(255, 255, 0); // yellow
  } else {
    fill(128, 0, 128); // purple
  }
  ellipse(0, 0, 40, 20);
  ellipse(0, 0, 20, 40);
  //ellipse(190, 190, 40, 20);
  //ellipse(190, 190, 20, 40);

  // 条件⑥: kazariが60以上だったら飾り付ける　// if kazari is more than 60 (equal 60), decorate
  if (kazari >= 60) {
    fill(255, 192, 203); // pink
    ellipse(x, 0, 10, 50);
    ellipse(x, 0, 50, 10);
  }

// 上下に小さいドット　// small dots on top and bottom
for (let i = 0; i < 200; i += 20) {
  fill(255, 182, 193); //pink
  ellipse(i, 0, 5, 5);//ドットの場所iは２０足されてずれていく
  ellipse(i, 200, 5, 5);
}
// 左右に小さいドット // small dots on left and right
for (let m = 0; m < 200; m += 20) {
  fill(255, 182, 193); // pink
  ellipse(0, m, 5, 5);    // 左端
  ellipse(200, m, 5, 5);  // 右端
}




}
 
 



 

 
 

