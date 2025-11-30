let img;

function preload() {
  img = loadImage('/images/pearl.jpg');
}

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  // bg is panorama
  panorama(img);
  
  // rotate with mouse
  orbitControl();
  
  // sphere
  
  imageLight(img);
  
  specularMaterial(50);
  shininess(50);
  
  noStroke();
  
  sphere(100);
}