let currentCardIndex = 0;
let isPlaying = false; // Tracks if the sound is playing
const cards = [
    { sound: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/623673557/mp3", image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/177454951/1800", name: "Blood-colored Woodpecker" },
    { sound: "sound2.mp3", image: "image2.jpg", name: "Name 2" },
    { sound: "sound3.mp3", image: "image3.jpg", name: "Name 3" }
];
 // Prevent card flip and toggle sound playback
 function handlePlaySound(event) {
    event.stopPropagation(); // Prevent the card from flipping

    const audio = document.getElementById("sound");
    const playButton = document.getElementById("playSound");

    if (isPlaying) {
        // Stop the sound
        audio.pause();
        audio.currentTime = 0; // Reset to the beginning
        isPlaying = false;
        playButton.textContent = "🔊 Play Sound";
    } else {
        // Play the sound
        audio.src = cards[currentCardIndex].sound;
        audio.play();
        isPlaying = true;
        playButton.textContent = "🔊 Stop Sound";
    }

    // Update indicator when playback ends
    audio.onended = () => {
        isPlaying = false;
        playButton.textContent = "🔊 Play Sound";
    };
}

// Function to flip the card
function flipCard() {
    const flashcard = document.getElementById("flashcard");
    flashcard.classList.toggle("flipped");
}

// Load the current card's image and name
function loadCard() {
    const image = document.getElementById("image");
    const name = document.getElementById("name");
    const audio = document.getElementById("sound");
    const playButton = document.getElementById("playSound");

    image.src = cards[currentCardIndex].image;
    name.textContent = cards[currentCardIndex].name;
    audio.src = cards[currentCardIndex].sound;
    playButton.textContent = "🔊 Play Sound";
    isPlaying = false;
}

// Navigate to the next card
function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    loadCard();
}

// Navigate to the previous card
function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    loadCard();
}

// Add click event listener to the flashcard to flip it
document.getElementById("flashcard").addEventListener("click", flipCard);

// Initialize the first card when the page loads
document.addEventListener("DOMContentLoaded", () => loadCard());
