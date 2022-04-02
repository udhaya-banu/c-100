var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();
function begin(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        talk();
    }
}

function talk(){
    var synth=window.speechSynthesis;
speak_data="taking your selfie in  five seconds";
utterthis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
Webcam.attach("#camera");
setTimeout(function(){
    takeselfie();
    saveselfie();
},5000);
}
Webcam.set({
    width:360,
    height:300,
    image_format:"png",
    png_quality:90
});
cam=document.getElementById("camera");
function takeselfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="any" src="'+data_uri+'">';
    });
}
 function saveselfie(){
     var atag=document.getElementById("link");
     var image=document.getElementById("any").src;
     atag.href=image;
     atag.click();
 }