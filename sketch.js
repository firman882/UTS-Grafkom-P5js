function setup() {
  createCanvas(700, 500);
  noLoop();
}
function draw() {
  background(135, 206, 235); // Latar langit biru muda
  
  // Gunung
  fill(34, 139, 34);
  triangle(100, 400, 250, 200, 400, 400); // Gunung kiri
  triangle(300, 400, 450, 100, 600, 400); // Gunung kanan
  

  // Matahari
  fill(255, 204, 0);
  noStroke(0);
  ellipse(370, 50, 80, 80);
  
  // Awan
  fill(255);
  ellipse(150, 100, 60, 40);
  ellipse(180, 90, 60, 40);
  ellipse(200, 100, 60, 40);

  ellipse(300, 80, 70, 50);
  ellipse(330, 70, 70, 50);
  ellipse(360, 80, 70, 50);
  
  //jalan
  fill("black");
  rect(0,380, 800, 300);
  fill("white");
rect(0,375,800,10);
  rect(50,430,150,5);
  rect(270,430,150,5);
  rect(500,430,150,5);

  // Gambar burung
  drawBird(200, 150, 20);
  drawBird(300, 100, 25);
  drawBird(400, 200, 30);
  drawBird(500, 120, 15);
  drawBird(600, 180, 20);
}
//Burung
function drawBird(x, y, size) {
  stroke(0); // Warna hitam untuk garis burung
  strokeWeight(2); // Ketebalan garis burung

  // Gambar dua garis membentuk "V" sebagai burung
  line(x - size / 2, y, x, y - size / 2);
  line(x, y - size / 2, x + size / 2, y);
}


