function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YZZlKFp7G/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'The Sound is - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(3)+"%";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+", "+random_number_g+", "+random_number_b+")";

        img = document.getElementById('alien1');
        img2 = document.getElementById('alien2');
        img3 = document.getElementById('alien3');
        img4 = document.getElementById('alien4');
        
        if (results[0].label == "Clap") {
            img.src = 'Dance.gif';
            img2.src = 'Normal2.webp';
            img3.src = 'Normal3.webp';
            img4.src = 'Normal4.webp';
        }
        else if (results[0].label == "Snap"){
             img.src = 'Normal.webp';
            img2.src = 'Dance2.gif';
            img3.src = 'Normal3.webp';
            img4.src = 'Normal4.webp';
        }
        else if (results[0].label == "Whistle"){
            img.src = 'Normal.webp';
            img2.src = 'Normal2.webp';
            img3.src = 'Dance3.gif';
            img4.src = 'Normal4.webp';
        }
        else{
            img.src = 'Normal.webp';
            img2.src = 'Normal2.webp';
            img3.src = 'Normal3.webp';
            img4.src = 'Dance4.gif';
        }
        }
}