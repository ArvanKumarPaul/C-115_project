function preload() {};

function setup() {

  canvas = createCanvas(400, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(400, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);

}

function gotPoses(results) {

  console.log(results);

  if(results.length>0) {

    console.log("nose X = " + results[0].pose.nose.x);
    console.log("nose Y = " + results[0].pose.nose.y);

  }

}

function modelLoaded() {

  console.log("poseNet is initialised");

}

function draw() {

  image(video, 0, 0, 400, 300);

}

function take_snapshot() {

  save("moustache_img.png");

}