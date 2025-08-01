//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
let x =100;
let y =110;
let hanabira = 6;
let kyori = 60;//中心の距離
//let starcolor = color (255, 255, 0);




function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER); //顔がリピートされる
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(176, 224, 230); //light blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  // Add your custom drawing code here, following the template structure.
 //耳

 
 fill(210, 105, 30);
 ellipse(65, 50, 40, 40);
 ellipse(135, 50, 40, 40);

//顔
 fill(210, 105, 30);
 ellipse(x, x, 90, 90);
//鼻まわり
 fill(222, 184, 135);
 ellipse(x, 120, 40, 30); 
  // Example: add more shapes or patterns as desired
  //目
  fill(0);
  ellipse(80, 95, 10, 10);
  ellipse(120, 95, 10, 10);

  //口
  line(x, 130, 90, 120);
  line(x, 130, y, 120);
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
 ellipse( x, 10, 50, 10);

}

//function draw(){
 
 



 

 
 

