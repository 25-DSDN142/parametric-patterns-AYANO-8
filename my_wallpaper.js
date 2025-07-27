//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 // ellipse(100, 100, 150, 150); // phoebe was here
 stroke(0);
 fill(160);
 rectMode(CENTER);
 rect(100, 100, 120, 120);stroke(0, 0, 255);
  strokeWeight(3);
  line(60, 50, 130, 50); // 円の後ろに引く線

  // 2. 緑の円2つ（上半分）
  noStroke();
  fill(0, 200, 0);
  ellipse(70, 50, 50, 50);
  ellipse(130, 50, 50, 50);

  // 4. 線に触れない位置に楕円（Tシャツ色で塗る）
  fill(255, 250, 205); // 例：whiteっぽい色
  ellipse(100, 160, 100, 50);
}




