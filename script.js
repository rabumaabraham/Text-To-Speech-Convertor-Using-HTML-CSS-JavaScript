// letting the button speak

let speech = new SpeechSynthesisUtterance();
let text = document.querySelector("textarea");
let mybtn = document.querySelector("button")

function listen(){
    speech.text = text.value;
    window.speechSynthesis.speak(speech);
}

mybtn.addEventListener("click", listen);


// selecting voices

let voices = [];
let voiceSelect = document.querySelector("select");

function myFunction(){
    window.speechSynthesis.onvoiceschanged = function(){
        voices = window.speechSynthesis.getVoices();
        speech.voice = voices[0];

        voiceSelect.innerHTML = '';

        voices.forEach(function(voice, i){
            voiceSelect.options[i] = new Option(voice.name, i);
        })
        voiceSelect.addEventListener("change", function(){
            speech.voice = voices[voiceSelect.value];
        });
    }
}

myFunction();
