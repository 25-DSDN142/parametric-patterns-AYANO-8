//your parameter variables go here!
//let rect_width = 20;
let x = 100;
let y = 110;
let hanabira = 11;
let withoutglases = 10;
let kyori = 60;

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
if (hanabira < 10) {
 fill(210, 105, 30);
 ellipse(65, 50, 40, 40);
 ellipse(135, 50, 40, 40);
} else {
  fill(255, 255, 255);
  ellipse(65, 50, 40, 40);
  ellipse(135, 50, 40, 40);
}
//顔
let whitebear = true;
if (whitebear) {
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
let angry = true
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
  noStroke();
  fill(240, 128, 128);
  ellipse(70, y, 20, 15);
  ellipse(130, y, 20, 15);

  //ellipse(100, 150, 20, 20);
  //星
  fill(255, 255, 0);
  ellipse(10, 10, 40, 20);
  ellipse(10, 10, 20, 40);
  fill(255, 255, 0);
  ellipse(190, 190, 40, 20);
 ellipse(190, 190, 20, 40);
 fill(255, 165, 0);
 fill(255, 192, 203);
 ellipse( x, 10, 10, 50);
 ellipse( x, 10, 50, 11);

}
