let speech = new SpeechSynthesisUtterance();
let text = document.querySelector("textarea")


let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = function() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (
        voiceSelect.options[i] = new Option(voice.name, i)));
    }

voiceSelect.addEventListener("change", function() {
    speech.voice = voices[voiceSelect.value]
});



function listen() {
    speech.text = text.value;
    window.speechSynthesis.speak(speech);
}

document.querySelector("button").addEventListener("click", listen);