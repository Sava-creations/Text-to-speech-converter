listen.onclick=function(){
     let speech = new SpeechSynthesisUtterance(); //new object of constructor
    speech.text = document.getElementById('text-input').value;
    window.speechSynthesis.speak(speech);        //window.property.method
}

