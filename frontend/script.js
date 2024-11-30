let currentCardIndex = 0;
const cards = [
    { sound: "sound1.mp3", image: "image1.jpg", name: "Name 1" },
    { sound: "sound2.mp3", image: "image2.jpg", name: "Name 2" },
    { sound: "sound3.mp3", image: "image3.jpg", name: "Name 3" }
];

function playSound() {
    const audio = document.getElementById("sound");
    audio.src = cards[currentCardIndex].sound;
    audio.play();
}

function flipCard() {
    const flashcard = document.getElementById("flashcard");
    flashcard.classList.toggle("flipped");
}

function loadCard() {
    const image = document.getElementById("image");
    const name = document.getElementById("name");
    image.src = cards[currentCardIndex].image;
    name.textContent = cards[currentCardIndex].name;
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    loadCard();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    loadCard();
}

document.addEventListener("DOMContentLoaded", () => loadCard());
