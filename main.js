song = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 600, 500)
}
function preload() {
    song = loadSound("bones.mp3");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded() {
    console.log("Posenet is Activated!")
}

function gotPoses(results)
{
    if(results.length > 0)
    {console.log(results);
        leftwristX = results[0].pose.leftwrist.x;
        leftwristY = results[0].pose.leftwrist.y;
        console.log("leftwristX = "+leftwristX+"leftwristY = "+leftwristY);

        rightwristX = results[0].pose.rightwrist.x;
        rightwristY = results[0].pose.rightwrist.y;
        console.log("rightwristX = "+rightwristX+"rightwristY = "+rightwristY);

    }
}