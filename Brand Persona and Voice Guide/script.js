const convertBtn =
document.getElementById("convertBtn");

const input =
document.getElementById("userInput");

const output =
document.getElementById("outputBox");

const themeToggle =
document.getElementById("themeToggle");

convertBtn.addEventListener(
    "click",
    () => {

        const text =
        input.value.trim();

        if(!text){

            output.innerHTML =
            "Please enter a message.";

            return;
        }

        const converted =
        `☕ Hey coffee lovers! ${text}

Let's make today a little brighter, one delicious cup at a time.`;

        output.innerHTML =
        converted;

        /* TEXT TO SPEECH */

        if(
            "speechSynthesis" in window
        ){

            speechSynthesis.cancel();

            const speech =
            new SpeechSynthesisUtterance(
                converted
            );

            speech.lang = "en-US";

            speech.rate = 1;

            speech.pitch = 1.1;

            speech.volume = 1;

            speechSynthesis.speak(
                speech
            );

        }else{

            alert(
                "Text-to-Speech is not supported in this browser."
            );

        }

    }
);

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );

    }
);