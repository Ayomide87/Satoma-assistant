let talkBtn = document.querySelector('.assistant');
let content = document.querySelector('i');

function speak(sentence) {
    let textSpeak = new SpeechSynthesisUtterance(sentence);
    textSpeak.rate = 1;
    textSpeak.pitch = 1;

    window.speechSynthesis.speak(textSpeak);
}

function wishMe() {
    let day = new Date();
    let hr = day.getHours();

    if (hr >= 0 && hr < 12) {
        speak('Good Morning,Boss')
    }
    else if (hr === 12) {
        speak('Good Noon,Boss')
    }
    else if (hr >= 12 && hr <= 17) {
        speak('Good Afternoon,Boss')
    }
    else {
        speak('Good Evening,Boss');
    }
}

window.addEventListener('load', () => {
    speak('Waking Costant');
    speak('Going supercharged');
    wishMe();

});


let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    content.textContent = transcript
    speakThis(transcript.toLowerCase());
};

talkBtn.addEventListener('click', () => {
    recognition.start();

});

function speakThis(message) {
    let speech = new SpeechSynthesisUtterance();
    speech.text = 'I do not understand what you are saying'
    if (message.includes('hey') || message.includes('hello') || message.includes('hi')) {
        const finalText = 'Hello Boss'
        speech.text = finalText
    }

    if (message.includes('open youtube')) {
        window.open(`https://www.youtube.com/search?=${message.replace('Home', '+')}`, '_blank');
        const finalText = 'Youtube is now opened';
        speech.text = finalText;
    }
    if (message.includes('open instagram')) {
        window.open(`https://www.instagram.com/search?=` + '_blank');
        const finalText = 'Instagram is now opened';
        speech.text = finalText;
    }
    if (message.includes('what news is trending')) {
        window.open(`https://www.google.com/search?=${message.replace('', '+')}`, '_blank');
        const finalText = 'This is what I found on the internet regarding' + message;
        speech.text = finalText;
    }
    if (message.includes('open wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki${message.replace('wikipedia', '+')}`, '_blank');
        const finalText = 'This is what I found on the internet regarding' + message;
        speech.text = finalText;
    }
    if (message.includes('who is') || message.includes('what is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace('', '+')}`, '_blank')
        let finalText = 'This is what I found on the internet regarding' + message;
        speech.text = finalText;
    }
    if (message.includes('open facebook')) {
        window.open(`https://www.facebook.com/search?=${message.replace('', '+')}`, '_blank')
        let finalText = 'This is what I found on the internet regarding' + message;
        speech.text = finalText;
    }
    if (message.includes('open twitter')) {
        window.open(`https://www.twitter.com/search?=${message.replace('', '+')}`, '_blank')
        let finalText = 'This is what I found on the internet regarding' + message;
        speech.text = finalText;
    }


    if (message.includes('ask me a question')) {

        let question =
            [
                'What is one plus one',
                'What is thirty-four multiplied by five',
                'What is the largest planet in our Solar System',
                'How many continents do we have',
                'What is eighty divided by three',
                'What is the world largest continent by land',
                'How many minutes makes an hour'

            ];
        let randomQuestion = Math.floor(Math.random() * question.length)
        console.log(randomQuestion);

        if (randomQuestion === 0) {
            let finalText = question[0]
            speech.text = finalText;
            console.log(question[0]);
        }
        if (randomQuestion === 1) {
            let finalText = question[1]
            speech.text = finalText;
            console.log(question[1]);
        }
        if (randomQuestion === 2) {
            let finalText = question[2]
            speech.text = finalText;
            console.log(question[2]);
        }
        if (randomQuestion === 3) {
            let finalText = question[3]
            speech.text = finalText;
            console.log(question[3]);
        }
        if (randomQuestion === 4) {
            let finalText = question[4]
            speech.text = finalText;
            console.log(question[4]);
        }
        if (randomQuestion === 5) {
            let finalText = question[5]
            speech.text = finalText;
            console.log(question[5]);
        }
        if (randomQuestion === 6) {
            console.log(question[6]);
            let finalText = question[6]
            speech.text = finalText;
        }
    }

    else {

    }
    speech.volume = 5;
    speech.pitch = 1;
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}
