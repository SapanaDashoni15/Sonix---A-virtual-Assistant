const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition )
// console.log(recognition);

recognition.lang = "en-US";
// console.log(recognition.Lang);

const btn = document.querySelector("#btn");
// console.log(btn);

btn.addEventListener("click", ()=>{

    recognition.start();

    //convert text to voice
    function speak(text) {
        const abc = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(abc);
    }

    function handleCommands(command) {
        if(command.includes("open youtube")) {
            speak("opening youtube...")
            window.open("https://www.youtube.com", "_blank")
        }

        else if(command.includes("open linkedin")) {
            speak("opening linkedin...")
            window.open("https://www.linkedin.com", "_blank")
        }

        else if(command.includes("open reddit")) {
            speak("opening reddit...")
            window.open("https://www.reddit.com", "_blank")
        } 
        else {
            speak("search on Google")
        }
    }

    speak("Hello! I am Sounix - a virtual assistant, How can I help you?")

    setTimeout(()=>{
        recognition.start();
    }, 3000);

    recognition.onresult= (event)=> {
        console.log(event)
    }
});



