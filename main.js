closer = "";
heatwaves = "";
rightWristX = 0;
rightWritstY = 0;
leftWristX = 0;
leftWritstY = 0;

function preload(){
closer = loadSound("closer.mp3");
heatwaves = loadSound("heatwaves.mp3");
}

function setup(){
canvas = createCanvas(600,550);
canvas.center();

video = createCapture(VIDEO);
video.hide();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(VIDEO, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet has been initialised.')
}

function gotPoses(results){
    if(results.length > 0){

        console.log(results);

        rightWritstX = results[0].pose.rightWrist.x;
        rightWritstY = results[0].pose.rightWrist.y;

        leftWritstX = results[0].pose.leftWrist.x;
        leftWritstY = results[0].pose.leftWrist.y;

        console.log("rightWristX: "+rightWritstX+"rightWristY: "+rightWritstY);
        console.log("leftWristX: "+leftWritstX+"leftWristY: "+leftWritstY);
    }
}

function draw(){
image(video, 0, 0, 600, 550);
}