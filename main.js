var camera = document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,
});
Webcam.attach("#camera");
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML=' <img id="selfie" src="'+data_uri+'" ></img>';
    });
}
console.log('ml5 version:', ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OJ7a-wkxJ/model.json',modelLoaded);
function modelLoaded(){
    console.log('model has been loaded');
}
function identify(){
    img = document.getElementById("selfie");
    classifier.classify(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
