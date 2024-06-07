let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    populateVoiceList();
};

function populateVoiceList() {
    voiceselect.innerHTML = ''; // Select element ko khali karo
    
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceselect.add(option);
    });
}

voiceselect.addEventListener("change",()=>{
    speech.voice = voices[voiceselect.value]
});

// Update speech voice when the user changes the selection
voiceselect.addEventListener("change", () => {
    let selectedVoiceIndex = voiceselect.selectedIndex;
    speech.voice = voices[selectedVoiceIndex];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
