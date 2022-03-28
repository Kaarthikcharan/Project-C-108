function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lO13RQkBq/model.json', modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+" %";
        img1=document.getElementById("cat");
        img2=document.getElementById("dog");
        if(results[0].label=="Cat"){
            img1.src="cat.gif";
            img2.src="dog.png";
            
        }
        else{
            img1.src="dog.gif";
            img2.src="cat.png";
        }
    }
}