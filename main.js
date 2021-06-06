function preload() {

}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    camera=createCapture(VIDEO);
    camera.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dtGtLmZyp/model.json",modelLoaded);
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function draw() {
    image(camera,0,0,300,300);
    classifier.classify(camera,gotresult);
}

function gotresult(error,results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy_name").innerHTML=results[0].confidence.toFixed(3);
    }
}