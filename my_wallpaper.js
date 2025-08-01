//your parameter variables go here!
let rect_width = 20;
let rect_height = 30;
let x = 100;
let y = 110;
let hanabira = 6;
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

if (x < 110) {
    fill(210, 105, 30);
  } else {
    fill(139, 69, 19); // darker brown
  }
  ellipse(65, 50, 40, 40);
  ellipse(135, 50, 40, 40);

  // 顔
  fill(210, 105, 30);
  ellipse(x, x, 95, 95,);

  // 鼻まわり
  fill(222, 184, 135);
  ellipse(x, 120, 40, 30); 

  // 条件2: hanabiraの数によって目のサイズ変更
  fill(0);
  if (hanabira > 5) {
    ellipse(80, 95, 12, 12);
    ellipse(120, 95, 12, 12);
  } else {
    ellipse(80, 95, 8, 8);
    ellipse(120, 95, 8, 8);
  }

  // 目のハイライト
 fill(255); // 白色
 ellipse(77, 92, 4, 4); // 左目のハイライト
 ellipse(117, 92, 4, 4); // 右目のハイライト

  // 口
  line(x, 130, 90, 120);
  line(x, 130, y, 120);

  // 鼻
  fill(0);
  ellipse(x, y, 15, 5);

  // 条件3: yが120より小さいときほっぺを大きくする
  noStroke();
  fill(240, 128, 128);
  if (y < 120) {
    ellipse(70, y, 25, 20);
    ellipse(130, y, 25, 20);
  } else {
    ellipse(70, y, 20, 15);
    ellipse(130, y, 20, 15);
  }

  // 条件4: rect_widthによって星の色を変える
  if (rect_width < 25) {
    fill(255, 255, 0); // yellow
  } else {
    fill(255, 215, 0); // gold
  }
  ellipse(0, 0, 40, 20);
  ellipse(0, 0, 20, 40);
  //ellipse(190, 190, 40, 20);
  //ellipse(190, 190, 20, 40);

  // 条件5: kyoriが60以上なら上に飾りをつける
  if (kyori >= 60) {
    fill(255, 192, 203); // pink
    ellipse(x, 0, 10, 50);
    ellipse(x, 0, 50, 10);
  }

// 上下に小さいドット
for (let i = 0; i < 200; i += 20) {
  fill(255, 182, 193);
  ellipse(i, 0, 5, 5);
  ellipse(i, 200, 5, 5);
}
// 左右に小さいドット
for (let m = 0; m < 200; m += 20) {
  fill(255, 182, 193);
  ellipse(0, m, 5, 5);    // 左端
  ellipse(200, m, 5, 5);  // 右端
}




}
