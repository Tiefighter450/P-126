function setup() {
  canvas = createCanvas(597, 498);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  background(220);
  canvas.center();
  image(video, 0, 0, 597, 498);
}
