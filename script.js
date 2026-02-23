const keys = document.querySelectorAll(".piano-keys");

// reusable audio object
const pianoSound = new Audio();

keys.forEach((key) => {
    key.addEventListener("click", () => {
        const clickedKey = key.dataset.list; // must exist in HTML
        pianoSound.src = `./KeySounds/key${clickedKey}.mp3`;
        pianoSound.currentTime = 0; // allows rapid clicks
        pianoSound.play();
    });
});