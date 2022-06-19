noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;
function setup()
{
 video = createCapture(VIDEO);
 video.size(550, 500);
 canvas = createCanvas(550, 550);
 canvas.position(560, 150);
 
 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('posenet is initialised');
}
function gotPoses(results)
{
if (results.length > 0)
}
    console.log(results);
    rightwristX = results[0].pose.rightwrist.x;
    leftwristY = results[0].pose.lefttwrist.x;
    console.log('rightwristX = '+ rightwristX +'leftwristX = '+ leftwristX);
function draw()
{
background('lightblue');
document.getElementById("square_sides").innerHTML = 'side of the message will be = '+ difference + 'px';

}

